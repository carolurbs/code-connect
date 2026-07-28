import logger from '@/logger';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.css'
import { CardPost } from "@/app/components/CardPost";
import { redirect } from 'next/navigation';
import db from "../../../../prisma/db";
async function getPostBySlug(slug) {
    try{
        const post = await db.post.findFirst({
    where:{
        slug: slug
    },
    include:{
        author:true
    }
})
if(!post){
    throw new Error(`Post com o slug "${slug}" não encontrado.`);

}

const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml;
    return post;
}
catch (error) {
    logger.error(`Erro ao buscar o post com slug "${slug}":`, error);
    redirect('/not-found');
}
}

const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug);

    return(
        <div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
        </div>

    )
};
export default PagePost
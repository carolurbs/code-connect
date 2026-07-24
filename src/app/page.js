import {CardPost}  from "./components/CardPost";
import db from "../../prisma/db";
import logger from "../logger";
import styles from './page.module.css';
import Link from "next/link";
/*  const post ={
    
            "id": 1,
            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
            "title": "Introdução ao React",
            "slug": "introducao-ao-react",
            "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
            "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
            "author": {
                "id": 101,
                "name": "Ana Beatriz",
                "username": "anabeatriz_dev",
                "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
            }
  }*/
async function getAllPosts(page){
  try{
    const perPage = 6;
    const skip = (page-1)*perPage;
  const totalItems = await db.post.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;
    const posts = await db.post.findMany({
      take:perPage,
      skip,
      orderBy: { createdAt: 'desc' },
      include: {
        author: true
      }
    })
    return {data: posts, prev, next}

  }
  catch (error) {
    logger.error('Erro ao buscar posts:', error);
    return {data: [], prev: null, next: null}
  }
}
export default async function Home({searchParams}) {
  const currentPage = parseInt(searchParams?.page) || 1;
  const {data:posts, prev,next} = await getAllPosts(currentPage);
  return (
    <main className={styles.grid}>
    {posts.map((post) => (
      <CardPost key={post.id} post={post} />
    ))}
    <div className={styles.links}>
    {prev && <Link href={`/?page=${prev}`}>Anterior</Link>}
    {next && <Link href={`/?page=${next}`}>Próximo</Link>}
    </div>
    </main>
  );
}

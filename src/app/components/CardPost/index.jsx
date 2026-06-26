import Image from "next/image";
import styles from "./cardPost.module.css"
import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
return (
<article className={styles.card}>
<header className={styles.header}>
    <figure>
        <Image 
        src={post.cover}
        width={438}
        height={133} 
        alt = {`Capa do post ${post.title}`} />
    </figure>
</header>
<section className={styles.body}>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
</section>
<footer className={styles.footer}>
    <Avatar 
    imageSrc={post.author.avatar}
    name={post.author.username} 
    />
</footer>
</article>
);
};
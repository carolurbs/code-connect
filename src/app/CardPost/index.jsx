import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
return (
<article>
<header>
    <figure>
        <Image src={post.cover} />
    </figure>
</header>
<section>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
</section>
<footer>
    <Avatar name={post.author.name} imageSrc={post.author.avatar} />
</footer>
</article>
);
};
import connectDB from "@/database/db";
import BlogModel, { Blog as BlogType, IComment } from "@/database/blogSchema";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogComment from "@/components/blogComment";
import style from "@/app/blog/[slug]/post.module.css";
import CommentForm from "@/components/blogCommentForm";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Blog({ params }: IParams) {
  await connectDB();

  const { slug } = await params;

  // get a plain JS object typed as BlogType
  const blog = await BlogModel.findOne({ slug }).lean<BlogType>().exec();

  if (!blog) {
    return notFound();
  }

  return (
    <main>
      <h1>{blog.title}</h1>

      <Image src={blog.image} alt={blog.image_alt} width={300} height={300} />

      <article className={style["post-article"]}>
        <p>{blog.content}</p>
      </article>

      <CommentForm slug={slug} />
      <h1>Comments</h1>
      <div>
        {blog.comments.map((comment: IComment, index: number) => (
          <BlogComment key={index} comment={comment} />
        ))}
      </div>
    </main>
  );
}

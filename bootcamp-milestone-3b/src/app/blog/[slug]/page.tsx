import connectDB from '@/database/db';
import blogSchema from '@/database/blogSchema';
import { notFound } from 'next/navigation';
import Image from "next/image"
import Comment from '@/components/comment';
import style from "@/app/blog/[slug]/post.module.css"

type IParams = {
  params: Promise<{
    slug: string
  }>;
}

export default async function Blog({ params }: IParams) {
  await connectDB();
  const { slug } = await params;
  const blog = await blogSchema.findOne({ slug }).orFail();

  if (!blog) {
    return notFound();
  }
  return (
    <main>
      <h1>{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.image_alt}
        width="300"
        height="300"
      />
      <article className={style["post-article"]}>
        <p>{blog.content}</p>
      </article>
      <h1>Comments</h1>
      <div>
        {/* TODO: ADD STYLING TO COMMENTS */}
        {blog.comments.map((comment, index) => (
          <Comment key={index} comment={comment}/>
        ))}
      </div>
    </main>
  );
}
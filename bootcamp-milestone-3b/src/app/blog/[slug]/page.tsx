import { NextResponse } from 'next/server';
import connectDB from '@/database/db';
import blogSchema from '@/database/blogSchema';
import { notFound } from 'next/navigation';

type IParams = {
  params: {
    slug: string
  }
}

export default async function GET({ params }: IParams) {
  await connectDB();
  const { slug } = params;
  const blog = await blogSchema.findOne({ slug }).orFail();

  if (!blog) {
    return notFound();
  }
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </main>
  );
}
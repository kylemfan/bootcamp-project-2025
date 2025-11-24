import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import blogSchema from '@/database/blogSchema';

type IParams = {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    console.log(blog)
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}

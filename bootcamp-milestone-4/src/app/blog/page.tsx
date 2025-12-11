import React from "react";
import BlogPreview from "@/components/blogPreview";
import Link from "next/link";
import connectDB from "@/database/db";
import BlogModel, { Blog as BlogType } from "@/database/blogSchema";

type BlogWithId = BlogType & { _id: string };

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return JSON.parse(JSON.stringify(blogs));
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <main>
        <p>Failed to load blogs. Please try again later.</p>
      </main>
    );
  }
  if (blogs.length === 0) {
    return (
      <main>
        <p>No blogs found.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Blog</h1>
      <div>
        {blogs.map((blog: BlogWithId) => (
          <Link key={blog._id} href={`/blog/${blog.slug}`}>
            <div>{<BlogPreview {...blog} />}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

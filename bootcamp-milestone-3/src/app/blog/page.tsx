import React from "react";
import BlogPreview from "@/components/blogPreview";
import Link from "next/link";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail()
    return blogs;
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
        <h1>Blog</h1>
        <p>Failed to load blogs. Please try again later.</p>
      </main>
    );
  }
  if (blogs.length === 0) {
    return (
      <main>
        <h1>Blog</h1>
        <p>No blogs found.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Blog</h1>
      <div>
        {blogs.map((blog) => (
          <Link key={blog._id.toString()} href={`/blog/${blog.slug}`}>
            <div>{<BlogPreview {...blog} />}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

import React from "react";
import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <div>
        {blogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            <div>{<BlogPreview {...blog} />}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

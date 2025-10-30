import React from "react";
import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>{<BlogPreview {...blog} />}</div>
        ))}
      </div>
    </main>
  );
}

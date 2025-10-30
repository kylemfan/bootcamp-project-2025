import React from "react";
import style from "./blog.module.css";

export default function BlogPage() {
  return (
    <main>
      <h1 className={style["page-title"]}>Blog</h1>
      <div className={style.blogs} id="blog-container"></div>
      {/* <script src="src/blog.js"></script> */}
    </main>
  );
}
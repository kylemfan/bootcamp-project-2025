import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import type { Blog } from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <div className={style["blogs"]} id="blog-container">
        <div className={style["post-preview"]}>
          <h1>{props.title}</h1>
          <h3>{new Date(props.date).toLocaleDateString()}</h3>
          <Image
            className={style["post-preview-img"]}
            src={props.image}
            alt={props.image_alt}
            width="175"
            height="175"
          />
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

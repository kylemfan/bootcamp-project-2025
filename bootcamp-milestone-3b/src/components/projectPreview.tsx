import React from "react";
import style from "./projectPreview.module.css";
import Image from "next/image";
import type { Project } from "@/database/projectSchema";

export default function ProjectPreview(props: Project) {
  return (
    <div className={style.div}>
      <div className={style["blogs"]} id="blog-container">
        <div className={style["post-preview"]}>
          <h1>{props.title}</h1>
          <h3>Click to check out the repository</h3>
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

import React from "react";
import Image from "next/image";
import style from "./home.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className={style["page-title"]}>About Me!</h1>
        <div className={style.about}>
          <div className={style["about-image-wrapper"]}>
            <Image 
              src="/images/IMG_9693.jpeg"
              width="200"
              height="200"
              alt="A picture of me"
              className={style["my-image"]}
            />
          </div>
          <div className={style["about-text"]}>
            <p>
              Hi, my name is <strong>Kyle Fan</strong> and I study computer
              science at Cal Poly SLO!
            </p>
            <p>
              I&apos;m from San Francisco, CA and my interests include automotive
              racing <em>(rally to be specific)</em>, aviation, and
              programming.<br />
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import style from "@/app/blog/post.module.css";
import Image from "next/image";

export default function MyHometown() {
  return (
    <main>
      <h1 className="page-title">My Hometown</h1>
      <p>Date Posted: 10/16/25</p>
      <Image 
        className={style["post-header-img"]}
        id="ggb"
        src="/images/GoldenGateBridge_IconicBridgePhoto.jpg"
        alt="Photo of the Golden Gate Bridge"
        width={300}
        height={300}
      />
      <article className={style["post-article"]}>
        <p>
          This blog post is about my hometown, San Francisco, California!
          I&apos;m from the Sunset District, which is just south of Golden Gate Park. 
        </p>
        <Image 
          className={style["post-img"]} 
          src="/images/sunset.webp"
          alt="Photo of the Sunset District"
          width={300}
          height={300}
        />
        <p>
          It&apos;s also where my high school, Abraham Lincoln HS, is. Here&apos;s a fun 
          fact: it was the school that was used for a popular cartoon called 
          The Amazing World of Gumball.
        </p>
        <Image 
          className={style["post-img"]} 
          src="/images/alhs_gumball.jpg"
          alt="Photo of Abraham Lincoln High School"
          width={300}
          height={300}
        />
        <p>
          SF is a beautiful city that I think everybody should visit at least once in
          their life. We have good food, many tourist destinations, and even a great
          public transportation system called the Muni! I, like many others, didn&apos;t even
          start driving until near the end of high school because I always took the bus
          everywhere.
        </p>
        <Image
          className={style["post-img"]}
          src="/images/trolley.gif"
          alt="Photo of a San Francisco Trolley"
          width={300}
          height={300}
        />
        <p>
          When you visit, make sure to bring some warm clothes because it&apos;s almost
          always foggy and windy here. I, personally, enjoy SLO&apos;s perfect weather more
          than I ever did SF&apos;s.
        </p>
        <p>
          To add to that, there&apos;s a local saying that &quot;there are
          no seasons in San Francisco&quot; because the weather is the same year-round.
          Through the summer, it remains cold. In the winter, it doesn&apos;t snow. (Actually,
          there have only been a handful of times when snow was recorded, the last time
          being 1976).
        </p>
        <p>
          Unfortunately, San Francisco lies in the San Andreas Fault and has had severe
          earthquakes in the past. The next one is predicted to have a magnitude of 6.7
          or larger within the next 300 years.
        </p>
        <p>
          Despite the danger, it&apos;s still a city that I&apos;ll always be proud to be from.
          If you don&apos;t love it already, I hope that someday you will get to visit and
          see why people say it&apos;s so great!
        </p>
      </article>
    </main>
  );
}
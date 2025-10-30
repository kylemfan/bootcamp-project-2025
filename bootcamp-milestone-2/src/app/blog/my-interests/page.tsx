import style from "@/app/blog/post.module.css";
import Image from "next/image";

export default function MyInterests() {
  return (
    <main>
      <h1 className={style["page-title"]}>My Interests</h1>
      <p>Date Posted: 10/16/25</p>
      <Image
        className={style["post-header-img"]}
        id="ra"
        src="/images/rallyaviation.jpg"
        alt="A photo of a helicopter chasing a rally car"
        width={500}
        height={500}
      />
      <article className={style["post-article"]}>
        <p>
          My recent interests have been in rally racing and aviation. In my opinion,
          rally drivers are the most skilled kind of racers there are. If you&apos;ve ever
          seen rally before, then you know it takes guts to go down mountainous,
          bumpy, roads at blazing speed. These drivers go so fast that they need a
          co-driver to give well-timed callouts for upcoming twists and turns.
        </p>
        <Image
          className={style["post-img"]}
          src="/images/rally_pov.gif"
          alt="A POV of a rally driver"
          width={300}
          height={300}
        />
        <p>
          Not to mention, it&apos;s the most stylish form of racing as well.
        </p>
        <Image
          className={style["post-img"]}
          src="/images/quattro_s1.gif"
          alt="A gif of a rally driver drifting"
          width={300}
          height={300}
        />
        <p>
          It&apos;s tons of fun setting up my racing rig and taking on the same corners
          that rally drivers do in the video game, Dirt Rally 2.0.
        </p>
        <p>
          Now with aviation, it&apos;s been a lot more of a newer interest. I&apos;ve been
          into cars and racing for a while, but I&apos;ve been enjoying learning
          new things about aviation every day. The fact that humanity learned how
          to fly and conquer the skies just about a century ago is a wonder.
        </p>
        <Image
          className={style["post-img"]}
          src="/images/fa18.gif"
          alt="A gif of an F/A-18 fighter jet cruising"
          width={300}
          height={300}
        />
        <p>
          I&apos;ve recently been playing DCS, a military flight simulator game. During my free
          time, I&apos;m learning about the flight controls and tactics of operating the F/A-18 Hornet.
        </p>
        <p>
          I&apos;d like to dream that someday I can take to the skies in reality.
        </p>
        <p>
          Thanks for reading!
        </p>
      </article>
    </main>
  );
}
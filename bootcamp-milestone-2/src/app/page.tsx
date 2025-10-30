export default function Home() {
  return (
    <div>
        <main>
          <h1 className="page-title">About Me!</h1>
          <div className="about">
          <div className="about-image">
            <img src="@/public/IMG_9693.jpeg" alt="A picture of me." width="200px"/>
          </div>
          <div className="about-text">
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

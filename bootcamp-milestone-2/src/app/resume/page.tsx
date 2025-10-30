import React from "react";
import style from "./resume.module.css";

export default function ResumePage() {
  return (
    <main>
      <div className={style.resume}>
        <h1 className={style["page-title"]}>Resume</h1>
        {/* <a href="Resume - Kyle Fan.pdf" download>Download Resume</a> */}
        <section className={style.section}>
          <h2 className={style["section-title"]}>Education</h2>
          <div className={style.entry}>
            <h3 className={style["entry-title"]}>Computer Science (B.S.)</h3>
            <p className={style["entry-info"]}></p>
            <p className={style["section-text"]}>
              California Polytechnic State University, San Luis Obispo<br />
              Expected Graduation: June 2026<br />
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style["section-title"]}>Relevant Coursework</h2>
          <div className={style.entry}>
            <h3 className={style["entry-title"]}></h3>
            <p className={style["entry-info"]}></p>
            <p className={style["entry-description"]}></p>
            <p className={style["section-text"]}>
              <ul>
                <li>Systems Programming</li>
                <li>Database Systems</li>
                <li>Data Structures and Algorithms</li>
                <li>Computer Organization</li>
                <li>Object Oriented Progamming</li>
              </ul>
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style["section-title"]}>Skills</h2>
          <div className={style.entry}>
            <h3 className={style["entry-title"]}></h3>
            <p className={style["entry-info"]}></p>
            <p className={style["entry-description"]}></p>
            <p className={style["section-text"]}>
              <ul>
                <li>Programming Languages: Python, Java, C, JavaScript</li>
                <li>Web Development: HTML, CSS, React</li>
                <li>Tools: Wireshark, tcpdump, Metasploit, SQLMap, Burp Suite, Snort</li>
                <li>Database Management: PostgreSQL</li>
                <li>Version Control: Git, GitHub</li>
                <li>Operating Systems: Linux, MacOS</li>
              </ul>
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style["section-title"]}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style["entry-title"]}><strong>Paper Trading API</strong> | Python, FastAPI, bcrypt, PostgreSQL, Supabase, Render</h3>
            <p className={style["entry-info"]}></p>
            <p className={style["entry-description"]}></p>
            <p className={style["section-text"]}>
              <em>Built and secured a collaborative paper trading API project</em><br />
              <ul>
                <li>
                  Collaborated with teammates to design and document API endpoint workflows
                </li>
                <li>
                  Implemented FastAPI endpoints for placing buy/sell orders, fetching user portfolios, and tracking transaction history
                </li>
                <li>
                  Designed and normalized PostgreSQL schema modeling users, sessions, portfolios, and trades
                </li>
                <li>
                  Developed business logic for order execution, watchlist & portfolio creation, and profit/loss computation
                </li>
                <li>
                  Enhanced concurrency safety and database durability by configuring endpoint specific isolation levels
                </li>
                <li>
                  Engineered a secure authentication system by hashing user credentials with bcrypt-salted hashes and managing UUID4 session tokens through database-backed validation
                </li>
                <li>
                  Secured API from SQL injection through input sanitization with SQLAlchemy’s bound parameters
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
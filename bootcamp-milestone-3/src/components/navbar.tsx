import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className={style.navbar}>
        <h1 className={style.logo}>
          <Link href="/">Kyle Fan | Computer Science</Link>
        </h1>
        <ul className={style["nav-list"]}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blogs</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/about">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}
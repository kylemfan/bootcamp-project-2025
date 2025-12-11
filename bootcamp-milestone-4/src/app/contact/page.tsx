"use client";

import React, { useRef } from "react";
import style from "./contact.module.css";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm("service_co770k9", "template_wnnfhgd", form.current, {
        publicKey: "TKTM2VqQUyJA0cu2d",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent!");
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main>
      <h1 className={style["page-title"]}>Send a Message</h1>
      <form ref={form} className={style["contact-form"]} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="reply_to"
          placeholder="Email"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

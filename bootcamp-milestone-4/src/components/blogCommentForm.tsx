"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(`/api/blog/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          content,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.error || "Failed to post comment.");
        return;
      }

      setSuccessMsg("Comment successfully posted!");
      setUser("");
      setContent("");

      // refresh the page data so the new comment shows up
      router.refresh();
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "2rem",
        marginBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "600px",
      }}
    >
      <h2>Leave a Comment</h2>

      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />

      <textarea
        placeholder="Your comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={4}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          background: "black",
          color: "white",
          padding: "10px",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "Posting..." : "Submit Comment"}
      </button>

      {errorMsg && (
        <p style={{ color: "red", marginTop: "0.25rem" }}>{errorMsg}</p>
      )}
      {successMsg && (
        <p style={{ color: "green", marginTop: "0.25rem" }}>{successMsg}</p>
      )}
    </form>
  );
}

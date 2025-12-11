"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ProjectOption = {
  id: string;    // Mongo _id string
  label: string; // display name
};

type PortfolioCommentFormProps = {
  projects: ProjectOption[];
};

export default function CommentForm({
  projects,
}: PortfolioCommentFormProps) {
  const [selectedProjectId, setSelectedProjectId] = useState(
    projects[0]?.id ?? ""
  );
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const router = useRouter();

  if (!projects.length) {
    return <p>No projects available to comment on.</p>;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(
        `/api/portfolio/${selectedProjectId}/comment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user, content }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.error || "Failed to post comment.");
        return;
      }

      setSuccessMsg("Comment successfully posted!");
      setUser("");
      setContent("");

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
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "600px",
      }}
    >
      <h2>Leave a Comment</h2>

      {/* Project dropdown */}
      <label style={{ fontSize: "0.9rem" }}>
        Project
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          required
          style={{
            marginTop: "0.25rem",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "100%",
          }}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.label}
            </option>
          ))}
        </select>
      </label>

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

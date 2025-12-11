import React from "react";
import ProjectPreview from "@/components/projectPreview";
import Link from "next/link";
import connectDB from "@/database/db";
import projectSchema, {
  Project as ProjectType,
  IComment,
} from "@/database/projectSchema";
import PortfolioComment from "@/components/portfolioComment";
import CommentForm from "@/components/portfolioCommentForm";

type ProjectWithId = ProjectType & { _id: string };

async function getProjects(): Promise<ProjectWithId[] | null> {
  await connectDB();

  try {
    const projects = await projectSchema.find().sort({ date: -1 }).orFail();
    return JSON.parse(JSON.stringify(projects));
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  if (!projects) {
    return (
      <main>
        <p>Failed to load projects. Please try again later.</p>
      </main>
    );
  }
  if (projects.length === 0) {
    return (
      <main>
        <p>No projects found.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Portfolio</h1>
      <div>
        {projects.map((project: ProjectWithId) => (
          <Link
            key={project._id}
            href={`${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{<ProjectPreview {...project} />}</div>
          </Link>
        ))}
      </div>
      <CommentForm
        projects={projects.map((p) => ({
          id: p._id, // this is what the API expects
          label: p.title || p.link || "Untitled project",
        }))}
      />
      <h1>Comments</h1>
      <div>
        {projects.map((project: ProjectWithId) =>
          project.comments.map((comment: IComment, index: number) => (
            <PortfolioComment
              key={index}
              comment={comment}
              projectName={project.title ?? "Untitled Project"}
            />
          ))
        )}
      </div>
    </main>
  );
}

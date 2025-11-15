import React from "react";
import ProjectPreview from "@/components/projectPreview";
import Link from "next/link";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ date: -1 }).orFail();
    return JSON.parse(JSON.stringify(projects));
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function BlogPage() {
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
        {projects.map((project) => (
          <Link key={project._id} href={`${project.link}`} target="_blank" rel="noopener noreferrer">
            <div>{<ProjectPreview {...project} />}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

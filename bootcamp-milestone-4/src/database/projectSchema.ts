import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  content: string;
  time: Date;
}

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  content: { type: String, required: true },
  time: { type: Date, default: Date.now }
})

export type Project = {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
  comments: IComment[];
};

const projectSchema = new Schema<Project>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    link: { type: String, required: true },
    comments: { type: [commentSchema], default: [] },
  }
);

const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;

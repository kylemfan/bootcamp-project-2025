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

export type Blog = {
  title: string;
  slug: string;
  date: string | Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[];
};

const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: Date.now },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: [commentSchema], default: [] },
  }
);

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;

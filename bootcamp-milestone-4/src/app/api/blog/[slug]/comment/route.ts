import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blogs from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();

    const BlogSlug = await params.slug; // gets the slug from the URL
    const body = await req.json(); // actual json body of the request

    // validate the body
    if (!body.user || !body.content) {
      return NextResponse.json({ error: "Bad input" }, { status: 422 });
    }

    const commentToAdd = {
      user: body.user,
      content: body.content,
      time: new Date(),
    };

    // save comment to mongodb
    const updatedBlog = await Blogs.findOneAndUpdate(
      { slug: BlogSlug },
      { $push: { comments: commentToAdd } },
      { new: true, runValidators: true },
    )
    if (!updatedBlog) {
      return NextResponse.json({ error: "Could not find blog" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Comment succesfully posted",
        addedComment: commentToAdd,
      },
      { status: 201 }
    );
  } catch (err) {
    // log the error and give error in the response
    console.log(`Error: ${err}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

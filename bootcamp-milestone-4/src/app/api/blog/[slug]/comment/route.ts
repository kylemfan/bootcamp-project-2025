import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blogs from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;
    const body = await req.json();

    // validate the body
    if (!body.user || !body.content) {
      return NextResponse.json({ error: "Bad input" }, { status: 422 });
    }

    const commentToAdd = {
      user: body.user,
      content: body.content,
      time: new Date(),
    };

    // add comment to db
    const updatedBlog = await Blogs.findOneAndUpdate(
      { slug },
      { $push: { comments: commentToAdd } },
      { new: true, runValidators: true },
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Could not find blog" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Comment succesfully posted",
        addedComment: commentToAdd,
      },
      { status: 201 },
    );
  } catch (err) {
    console.log(`Error: ${err}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

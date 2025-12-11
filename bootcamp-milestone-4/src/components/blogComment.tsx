import { IComment } from "@/database/blogSchema";
import style from "./comment.module.css";

type CommentProps = {
  comment: IComment;
}

function parseCommentTime(time: Date): string {
  return time.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function BlogComment({ comment }: CommentProps) {
  return (
    <div className={style["comment"]}>
      <h2 className={style["user"]}>{comment.user}</h2>
      <h5 className={style["date"]}>{parseCommentTime(comment.time)}</h5>
      <p className={style["content"]}>{comment.content}</p>
    </div>
  );
}
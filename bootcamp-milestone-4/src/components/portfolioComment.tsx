import style from "./comment.module.css";

export type PortfolioCommentProps = {
  comment: {
    user: string;
    content: string;
    time: Date;
  };
  projectName: string;
};

function parseCommentTime(time: Date): string {
  return time.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function PortfolioComment({
  comment,
  projectName,
}: PortfolioCommentProps) {
  return (
    <div className={style["comment"]}>
      <p className={style["projectName"]}>Project Comment: {projectName}</p>
      <h2 className={style["user"]}>{comment.user}</h2>
      <h5 className={style["date"]}>{parseCommentTime(comment.time)}</h5>
      <p className={style["content"]}>{comment.content}</p>
    </div>
  );
}

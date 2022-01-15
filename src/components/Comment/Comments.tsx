import React from "react";
import CommentItem from "./CommentItem";

const Comments: React.FC<{ comments: any; }> = (props) => {
  return props?.comments
    .slice(0)
    .reverse()
    .map((comment : any, index : number) => (
        <CommentItem comment={comment} key={index} />
    ));
};

export default Comments;

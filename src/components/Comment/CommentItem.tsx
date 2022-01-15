import React from "react";
import { UserCardContainer } from "../../utilits/styledComponents";
import { classes } from "../../utilits/styleUtilities";

const CommentItem: React.FC<{ comment: any; }> = (props) => {
  return (
    <div className="col-md-12 mb-4">
      <UserCardContainer>
        <div className="d-flex justify-content-between">
          <h4 style={{...classes?.customLineBreak,...classes?.additionalMarginRight}}>
            <b>{props?.comment?.name}</b>
          </h4>
          <span
            style={{
              ...classes.customLink,
              ...classes.customCursor
            }}
          >
            {props?.comment?.email}
          </span>
        </div>
        <div>
          <p style={classes?.customLineBreak}>{props?.comment?.body}</p>
        </div>
      </UserCardContainer>
    </div>
  );
};

export default CommentItem;

import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { AiFillDelete, AiOutlineRight } from "react-icons/ai";
import { UserCardContainer } from "../../utilits/styledComponents";
import { classes } from "../../utilits/styleUtilities";

const PostItem: React.FC<{ post: any; removeUserPost: any }> = (
  props
) => {
  const { id }: any = useParams();
  const history = useHistory();

  const routingPostDetail = (postId: number): void => {
    history.replace(`/user/${id}/${postId}`);
  };

  return (
    <div className="col-md-12 mb-4">
      <UserCardContainer>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div onClick={() => props?.removeUserPost(props?.post?.id)}>
              <AiFillDelete size={25} color="#2f2fff" />
            </div>
            <span style={{...classes?.customMarginLeft,...classes?.customLineBreak}}>
              {props?.post?.title}
            </span>
          </div>
          <div onClick={() => routingPostDetail(props?.post?.id)}>
            <AiOutlineRight size={25} color="blue" />
          </div>
        </div>
      </UserCardContainer>
    </div>
  );
};

export default PostItem;

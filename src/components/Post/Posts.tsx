import React from "react";
import { useDispatch } from "react-redux";
import { deletePostById } from "../../redux/features/post/postAction";
import PostItem from "./PostItem";

const Posts: React.FC<{ userPosts: any; }> = (props) => {
  const dispatch = useDispatch();
  const removeUserPost = (postId: number) => {
    let updatedPosts: Object = props?.userPosts.filter(
      (i: any) => i.id !== postId
    );
    dispatch(deletePostById(postId, updatedPosts));
  };

  return props?.userPosts
    ?.slice(0)
    .reverse()
    .map((post: Object, index: number) => (
      <PostItem
        post={post}
        removeUserPost={removeUserPost}
        key={index}
      />
    ));
};

export default Posts;

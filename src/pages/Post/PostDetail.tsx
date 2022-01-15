import React, { Fragment, useLayoutEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchCommentsByPostId
} from "../../redux/features/comment/commentAction";
import { getAllComments } from "../../redux/features/comment/commentSlice";
import { fetchPostById } from "../../redux/features/post/postAction";
import { selectedPostData } from "../../redux/features/post/postSlice";
import { selectUserName } from "../../redux/features/user/userSlice";
import Loader from "../../components/Skeleton/Loader";
import Header from "../../components/Header/Header";
import Comments from "../../components/Comment/Comments";
import Toastify from "../../components/Toaster/Toastify";
import Popup from "../../components/Popup/Popup";
import { classes } from "../../utilits/styleUtilities";

const PostDetail: React.FC = () => {
  const { id, postId }: any = useParams();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Too small")
      .max(50, "Too large")
      .required("Please the enter your name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please the enter your email"),
    body: Yup.string()
      .min(10, "Too small")
      .max(300, "Too large")
      .required("Please the enter your body"),
  });

  const formik = useFormik({
    initialValues: {
      postId: postId,
      id: uuidv4(),
      name: "",
      email: "",
      body: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values formik: ", values);
    },
  });

  const dispatch = useDispatch();
  const selectedUser = useSelector(selectUserName);
  const selectedPost = useSelector(selectedPostData);
  const comments = useSelector(getAllComments);

  const [isVisibleComment, setIsVisibleComment] = useState(false);
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    try {
      setLoading(true);
      dispatch(fetchPostById(id));
      dispatch(fetchCommentsByPostId(postId));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  const togglerComment = (): void => {
    if (isVisibleComment === false) {
      setIsVisibleComment(true);
    } else {
      setIsVisibleComment(false);
    }
  };

  const handleClickAddComment = (): void => {
    formik.resetForm();
    setVisibleAddModal(true);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">

          <div className="row mt-4">
            <Header routingUrl={`/user/${id}`} selectedUser={selectedUser} />
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <h3>
                <b>{selectedPost?.title}</b>
              </h3>
              <p className="mt-4">{selectedPost?.body}</p>
            </div>
          </div>

          <div className="row mt-4 mb-4">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <span
                  style={{ ...classes?.customLink, ...classes?.customCursor }}
                  onClick={togglerComment}
                >
                  {" "}
                  {!isVisibleComment ? "Show comments" : "Hide comments"}
                </span>
                {isVisibleComment ? (
                  <span
                    style={{ ...classes?.customLink, ...classes?.customCursor }}
                    onClick={handleClickAddComment}
                  >
                    Add comment
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          {isVisibleComment ? (
            <div className="row">
              {comments?.length ? <Comments comments={comments} /> : null}
              {<Popup visibleAddModal={visibleAddModal} setVisibleAddModal={setVisibleAddModal} formik={formik} data={comments} />}
            </div>
          ) : null}

          <Toastify />

        </div>
      )}
    </Fragment>
  );
};

export default PostDetail;
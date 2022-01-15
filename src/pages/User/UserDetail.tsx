import React, { Fragment, useLayoutEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPostByUserId
} from "../../redux/features/post/postAction";
import { selectPostByUser } from "../../redux/features/post/postSlice";
import { selectUserName } from "../../redux/features/user/userSlice";
import Loader from "../../components/Skeleton/Loader";
import Header from "../../components/Header/Header";
import Posts from "../../components/Post/Posts";
import Popup from "../../components/Popup/Popup";
import Toastify from "../../components/Toaster/Toastify";

const UserDetail: React.FC = () => {
  let { id }: any = useParams();

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, "Too small")
      .max(50, "Too large")
      .required("Please the enter your title"),
    body: Yup.string()
      .min(10, "Too small")
      .max(300, "Too large")
      .required("Please the enter your body"),
  });

  const formik = useFormik({
    initialValues: {
      userId: id,
      id: uuidv4(),
      title: "",
      body: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values formik: ", values);
    },
  });

  const selectedUser = useSelector(selectUserName);
  const userPosts = useSelector(selectPostByUser);

  const dispatch = useDispatch();
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    try {
      setLoading(true);
      dispatch(fetchPostByUserId(id));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  const handleClickAddUserPost = (): void => {
    formik.resetForm();
    setVisibleAddModal(true);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <div className="row mt-4">
              <Header
                routingUrl={`/`}
                selectedUser={selectedUser}
                handleClickAddUserPost={handleClickAddUserPost}
                isExistAdd={true}
                isCenter={true}
              />
            </div>

            <div className="row mt-4">

              {userPosts?.length > 0 ? (
                <Posts userPosts={userPosts} />
              ) : null}

              {<Popup visibleAddModal={visibleAddModal} setVisibleAddModal={setVisibleAddModal} formik={formik} data={userPosts} isExistPost={true} />}
            
            </div>

          </div>

          <Toastify />

        </>
      )}
    </Fragment>
  );
};

export default UserDetail;

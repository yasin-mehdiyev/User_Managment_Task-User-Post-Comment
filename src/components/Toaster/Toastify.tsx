import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify : React.FC = () => {
  return (
    <Fragment>
      <ToastContainer autoClose={2000} position="top-right" />
    </Fragment>
  );
};

export default Toastify;

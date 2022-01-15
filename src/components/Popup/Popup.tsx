import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCommentAction } from "../../redux/features/comment/commentAction";
import { sendUserPostAction } from "../../redux/features/post/postAction";
import { Modal } from "react-bootstrap";
import {
  FormControl,
  Button as MaterialButton,
  TextField,
} from "@material-ui/core";
import { classes } from "../../utilits/styleUtilities";

const Popup: React.FC<{
  visibleAddModal: boolean;
  setVisibleAddModal: any;
  formik: any;
  data: any;
  isExistPost?: Boolean;
}> = (props) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (
      Object.entries(props?.formik.touched).length !== 0 &&
      Object.entries(props?.formik.errors).length === 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [props?.formik]);

  const handleCloseAddModal = () => {
    props?.setVisibleAddModal(false);
  };

  const handleSubmit = () => {
    let updatedDatas: Object = [...props?.data, props?.formik.values];
    if (!props?.isExistPost) {
      dispatch(postCommentAction(props?.formik.values, updatedDatas));
    } else {
      dispatch(sendUserPostAction(props?.formik.values, updatedDatas));
    }
    props?.setVisibleAddModal(false);
  };

  return (
    <Modal show={props?.visibleAddModal} onHide={handleCloseAddModal}>
      <Modal.Header closeButton>
        <Modal.Title style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            {!props?.isExistPost ? "Add comment" : "Add post"}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 15 }}>
        <FormControl style={classes.formControl}>
          <TextField
            type="text"
            size="small"
            variant="standard"
            id="standard-basic"
            label={!props?.isExistPost ? "Name*" : "Title*"}
            name={!props?.isExistPost ? "name" : "title"}
            className="mb-3"
            value={!props?.isExistPost ? props?.formik.values?.name : props?.formik.values?.title}
            onBlur={props?.formik.handleBlur}
            onChange={props?.formik.handleChange}
            error = {
              !props?.isExistPost ? 
              (props?.formik.touched?.name && Boolean(props?.formik.errors?.name)) :
              (props?.formik.touched?.title && Boolean(props?.formik.errors?.title))
            }
            helperText = { 
              !props?.isExistPost ?
              (props?.formik.touched?.name && props?.formik.errors?.name) :
              (props?.formik.touched?.title && props?.formik.errors?.title)
            }
            fullWidth
          />

          {!props?.isExistPost ? (
            <TextField
              type="email"
              size="small"
              variant="standard"
              id="standard-basic"
              label="Email*"
              name="email"
              className="mb-3"
              value={props?.formik.values?.email}
              onBlur={props?.formik.handleBlur}
              onChange={props?.formik.handleChange}
              error={
                props?.formik.touched?.email &&
                Boolean(props?.formik.errors?.email)
              }
              helperText={
                props?.formik.touched?.email && props?.formik.errors?.email
              }
              fullWidth
            />
          ) : null}

          <TextField
            type="text"
            size="small"
            variant="outlined"
            id="outlined-basic"
            label="Body*"
            name="body"
            multiline
            rows={6}
            className="mb-3"
            value={props?.formik.values?.body}
            onBlur={props?.formik.handleBlur}
            onChange={props?.formik.handleChange}
            error={
              props?.formik.touched?.body && Boolean(props?.formik.errors?.body)
            }
            helperText={props?.formik.touched?.body && props?.formik.errors?.body}
            fullWidth
          />
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <MaterialButton
          variant="contained"
          style={classes?.customMarginRight}
          onClick={handleCloseAddModal}
        >
          Cancel
        </MaterialButton>
        <MaterialButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Add
        </MaterialButton>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;

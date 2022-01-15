import * as commentService from "../../../services/CommentService";
import { setComments } from "./commentSlice";
import { toast } from "react-toastify";

export const fetchCommentsByPostId = (postId:number) => async (dispatch: any) => {
    try {
        const resp = await commentService.getCommentByPostId(postId);
        dispatch(setComments(resp));
    } catch (error) {
        console.log("error",error);
    }
};

export const postCommentAction = (comment:Object, updateComments: Object) => async (dispatch: any) => {
    try {
        const { status } : any = await commentService.postCommentData(comment);
        if (status === 200 || status === 201) {
            dispatch(setComments(updateComments));
            toast.success('New item was added with successfully');  
        } else {
            toast.error('It happened any error'); 
        }
    } catch (error) {
        console.log("error",error);
    }
};
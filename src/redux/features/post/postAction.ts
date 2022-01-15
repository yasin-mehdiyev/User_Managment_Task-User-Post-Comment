import * as userService from "../../../services/UserService";
import * as postService from "../../../services/PostService";
import { setPost, setPosts } from "./postSlice";
import { toast } from "react-toastify";
import swal from 'sweetalert';

export const fetchPostByUserId = (userId:number) => async (dispatch: any) => {
    try {
        const resp = await userService.getPostsByUserId(userId);
        dispatch(setPosts(resp));
    } catch (error) {
        console.log("error",error);
    }
};

export const fetchPostById = (postId:number) => async (dispatch: any) => {
    try {
        const resp = await postService.getPostById(postId);
        dispatch(setPost(resp));
    } catch (error) {
        console.log("error",error);
    }
};

export const deletePostById = (postId:number,updatePost:Object) => async (dispatch: any) => {
    try {
        const { status } : any = await postService.deletePost(postId);

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary data!",
            icon: "warning",
            buttons: ["Cancel", "Ok"]
          })
          .then((willDelete) => {
            if (willDelete) {
                if (status === 200 || status === 201) {
                    dispatch(setPosts(updatePost));    
                    toast.success('Successfully deleted');  
                }
                else{
                    toast.error('It happened any error');  
                }
            }
          });
    } catch (error) {
        console.log("error",error);
    }
};

export const sendUserPostAction = (post:Object, updatePosts: Object) => async (dispatch: any) => {
    try {
        const { status } : any = await postService.sendUserPostData(post);
        if (status === 200 || status === 201) {
            dispatch(setPosts(updatePosts));
            toast.success('New item was added with successfully');  
        } else {
            toast.error('It happened any error');  
        }
    } catch (error) {
        console.log("error",error);
    }
};
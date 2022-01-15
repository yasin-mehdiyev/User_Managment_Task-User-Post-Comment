import axios from "../utilits/setupAxios";

export async function getCommentByPostId(postId:number) : Promise<object> {
    return (await axios.get(`/comments?postId=${postId}`)).data;
};

export async function postCommentData(comments:Object) : Promise<object> {
    return (await axios.post(`/comments`,comments));
};
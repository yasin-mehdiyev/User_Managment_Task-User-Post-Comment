import axios from "../utilits/setupAxios";

export async function getPostById(postId:number) : Promise<object> {
    return (await axios.get(`/posts/${postId}`)).data;
};

export async function deletePost(postId:number) : Promise<object> {
    return (await axios.delete(`/posts/${postId}`));
};

export async function sendUserPostData(post:Object) : Promise<object> {
    return (await axios.post(`/posts`, post));
};
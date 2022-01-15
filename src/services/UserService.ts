import axios from "../utilits/setupAxios";

export async function getAllUsers() : Promise<object> {
    return (await axios.get(`/users`)).data;
};

export async function getPostsByUserId(userId:number) : Promise<object> {
    return (await axios.get(`/posts?userId=${userId}`)).data;
};
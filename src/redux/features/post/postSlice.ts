import { createSlice } from '@reduxjs/toolkit';
import UserPost from '../../../models/Post';
import { RootState } from '../../root/store';

const initialState: UserPost = {
    posts: [],
    post: {
      title: "",
      body: ""
    }
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      setPosts: (state, action) => {
        state.posts = action.payload;
      },
      setPost: (state, action) => {
        state.post = action.payload;
      }
    }
  })
  
  export const { setPosts, setPost } = postSlice.actions;

  export const selectPostByUser = (state: RootState) => state.posts.posts;
  export const selectedPostData = (state: RootState) => state.posts.post;
  
  export default postSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import PostComments from '../../../models/Comment';
import { RootState } from '../../root/store';

const initialState: PostComments = {
    comments: [],
};

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      setComments: (state, action) => {
        state.comments = action.payload;
      },
    }
  })
  
  export const { setComments } = commentSlice.actions;

  export const getAllComments = (state: RootState) => state.comments.comments;
  
  export default commentSlice.reducer;
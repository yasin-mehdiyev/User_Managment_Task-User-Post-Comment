import { createSlice } from '@reduxjs/toolkit';
import UserList from '../../../models/User';
import { RootState } from '../../root/store';

const initialState: UserList = {
    users: [],
    userName: "",
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      setUsers: (state, action) => {
        state.users = action.payload;
      },
      setSelectedUser: (state, action) => {
        state.userName = action.payload;
      }
    }
  })
  
  export const { setUsers, setSelectedUser } = userSlice.actions;

  export const selectUsers = (state: RootState) => state.users.users;
  export const selectUserName = (state: RootState) => state.users.userName;
  
  export default userSlice.reducer;
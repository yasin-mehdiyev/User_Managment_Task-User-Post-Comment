import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

// Slices
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';
import commentReducer from '../features/comment/commentSlice';

const persistConfig : any = {
    key: 'root',
    storage,
    whitelist: ['users', 'posts', 'comments']
}

export const rootReducer : any = combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
});

export const persistedReducer : any = persistReducer(persistConfig, rootReducer);

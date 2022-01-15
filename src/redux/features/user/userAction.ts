import * as userService from "../../../services/UserService";
import { setUsers } from "./userSlice";

export const fetchUsersData = () => async (dispatch: any) => {
    try {
        const resp = await userService.getAllUsers();
        dispatch(setUsers(resp));
    } catch (error) {
        console.log("error",error);
    }
};
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers: {

        //create
        createUser: (state, action) => {
            console.log(action)
            state.push(action.payload) 
        },

        // delete
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload)
        }
    }
})
export const { deleteUser, createUser } = userSlice.actions
export default userSlice.reducer ;
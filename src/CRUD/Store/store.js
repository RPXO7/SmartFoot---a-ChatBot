import { configureStore }  from  "@reduxjs/toolkit";
import  userSlice  from "../Redux/userReducer";

const store = configureStore({
    reducer: {
        user: userSlice
    }

})

export default store;
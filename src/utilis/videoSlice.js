import { createSlice } from "@reduxjs/toolkit";



const videoSlice = createSlice({
    name:"video",
    initialState:{
     items:[]
    },
    reducers:{

        recVideo:(state,action)=>{
state.items = action.payload
        }



    }
})
 
export const {recVideo} = videoSlice.actions;
export default videoSlice.reducer;




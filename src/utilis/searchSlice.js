import {createSlice} from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name:"sarch",
    initialState:{

    },
    reducers:{
    cacheResults:(state,action)=>{
    state =   Object.assign(state,action.payload)
    }

    
    }

})


export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer









/*


Cache:

time complexity to search an array = 0(n)
time complexity to search an obj = 0(1)



*/

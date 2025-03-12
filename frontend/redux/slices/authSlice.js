import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:'auth',
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        setLoading:(state,action)=>{
            console.log("Setting loading:", action.payload);
            state.loading = action.payload
        },
        setUser:(state,action)=>{
            console.log("Setting user:", action.payload);
            state.user = action.payload
        }
    }
})
export const {setLoading,setUser} = authSlice.actions
export default authSlice.reducer;
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchUserById=createAsyncThunk(
    'users/fetchById',
    async(userId ,{rejectWithValue})=>{
        try{
            const response=await axios.get(`https://reqres.in/api/users/${userId}`,{
                headers:{'x-api-key':'reqres-free-v1'}
            })
            return response.data.data;
        }
        catch(err){
        return rejectWithValue(err.response.data)
    }
    
    }
    
)

const userSlice=createSlice({
    name:'user',
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUserById.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })

        .addCase(fetchUserById.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })

        .addCase(fetchUserById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})

export default userSlice.reducer;
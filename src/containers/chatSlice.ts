import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { ResponseInner } from "../types";

interface taskState {
    value: ResponseInner[];
}

const initialState: taskState = {
    value: [],
};


export const fetchTask = createAsyncThunk(
    'task/fetch',
    async () => {
        const response = await axiosApi.get('/task.json');
        return response.data ?? []
    })


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            const setPosts = Object.keys(action.payload).map(key => {
                const post = action.payload[key];
                post.id = key;
            
                return post;
            });

            state.value = setPosts
        })
    }
});

export const taskRedusers = taskSlice.reducer;
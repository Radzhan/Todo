import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { Response, ResponseInner } from "../types";

interface taskState {
    value: ResponseInner[];
};

const initialState: taskState = {
    value: [],
};


export const fetchTask = createAsyncThunk(
    'task/fetch',
    async () => {
        const response = await axiosApi.get('/task.json');

        return response.data ?? [];
    });

export const deleteTask = createAsyncThunk<void, string>(
    'task/delete',
    async (id) => {
        await axiosApi.delete('/task/' + id + '.json');
    }
);

export const postTask = createAsyncThunk('task/post', async (task: Response) => {
    await axiosApi.post('/task.json', task);
});

export const changestatus = createAsyncThunk('task/change', async (id: string) => {
    const response = await axiosApi.get<Response>('/task/' + id + '.json');
    response.data.status = !response.data.status;
    await axiosApi.put('/task/' + id + '.json', response.data);
});


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            const setPosts = Object.keys(action.payload).map(key => {
                if (action.payload === null) {
                    return [];
                } else {
                    const post = action.payload[key];
                    post.id = key;

                    return post;
                }
            });

            state.value = setPosts;
        });
    }
});

export const taskRedusers = taskSlice.reducer;
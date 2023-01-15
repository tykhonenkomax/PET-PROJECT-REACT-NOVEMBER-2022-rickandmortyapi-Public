import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {locationServices as episodeServices} from "../../services";

let initialState = {
    episodes: [],
    error: null,
    loading: false
};
const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await episodeServices.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)
const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
});
const {reducer: episodeReducer} = episodeSlice;

const episodeAction = {
    getAll
}

export {
    episodeAction,
    episodeReducer
}


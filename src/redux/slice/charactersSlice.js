import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersServices} from "../../services/characters.services";

let initialState = {
    characters: [],
    error: null,
    loading: false
};
const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async ({rejectedWithValue}) => {
        try {
            const {data} = await charactersServices.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

let charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
});

const {reducer: charactersReducer} = charactersSlice

const characterActions = {
    getAll,
}
export {
    charactersReducer,
    characterActions
}
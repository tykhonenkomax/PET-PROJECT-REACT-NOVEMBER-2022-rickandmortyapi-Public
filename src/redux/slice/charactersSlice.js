import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterServices} from "../../services";

let initialState = {
    characters: [],
    error: null,
    loading: false
};


const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await characterServices.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)
const searchCharacter = createAsyncThunk(
    'characterSlice/searchCharacter',
    async (name, {rejectedWithValue}) => {
        try {
            const {data} = await characterServices.searchCharactersByName(name);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

let characterSlice = createSlice({

    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                console.log('charactersSTATE',state.characters = action.payload?.results);
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            //_____________________________________________________________________/
            .addCase(searchCharacter.fulfilled, (state, action) => {
                state.characters = action.payload?.results
                state.loading = false
            })
            .addCase(searchCharacter.pending, (state) => {
                state.loading = true
            })
});

const {reducer: characterReducer} = characterSlice;

const characterActions = {
    getAll,
    searchCharacter
}
export {
    characterActions,
    characterReducer
}
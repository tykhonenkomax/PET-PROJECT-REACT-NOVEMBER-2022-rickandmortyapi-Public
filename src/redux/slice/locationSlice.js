import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {locationServices} from "../../services";
import {logger} from "axios-service/lib/utils";

let initialState = {
    locations: [],
    locationById:[],
    error: null,
    loading: false,
};

const getAll = createAsyncThunk(
    'locationSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await locationServices.getAll();
            return data

        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);
const getById = createAsyncThunk(
    'locationSlice/getById',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await locationServices.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const locationSlice = createSlice({

    name: 'locationSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.locations = action.payload?.results
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.locationById = action.payload
            })
});

const {reducer: locationReducer} = locationSlice;

const locationAction = {
    getAll,
    getById
}

export {
    locationAction,
    locationReducer
}
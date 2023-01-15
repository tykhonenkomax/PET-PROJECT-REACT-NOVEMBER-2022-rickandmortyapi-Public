import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {locationServices} from "../../services";
import {logger} from "axios-service/lib/utils";

let initialState = {
    locations: [],
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
});

const {reducer: locationReducer} = locationSlice;

const locationAction = {
    getAll
}

export {
    locationAction,
    locationReducer
}
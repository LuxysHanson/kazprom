import {createSlice} from "@reduxjs/toolkit";

export const recordSlice = createSlice({
    name: 'records',
    initialState: {
        records: [],
    },
    reducers: {
        addRecord: (state, action) => {
            return {...state, records: [...state.records, action.payload]};
        },
        removeRecord: (state, action) => {
            return {...state, records: state.records.filter((item) => item.id !== action.payload)};
        }
    },
})

export const { addRecord, removeRecord } = recordSlice.actions

export default recordSlice.reducer
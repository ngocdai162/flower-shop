import { createSlice } from "@reduxjs/toolkit";
const tempSlice =  createSlice ({
    name: 'temp',
    initialState: {
        status: false
    },
    reducers: {
        setStatus : (state, action) => {
            state.status = action.payload.status
        }
    }
})
export const {setStatus} = tempSlice.actions;
export default tempSlice.reducer;
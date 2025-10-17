import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    destinations: [
        { id: 1, name: "Athens" },
        { id: 2, name: "Budapest" },
    ],
};

const destinationSlice = createSlice({
    name: "destinationSlice",
    initialState,
    reducers: {
        addDestination: (state, action) => {
            const newDestination = {
                id: state.destinations[state.destinations.length - 1] + 1,
                name: action.payload,
            };
            state.destinations.push(newDestination);
        },
        removeDestination: (state, action) => {
            state.destinations = state.destinations.filter(
                (destination) => destination.id !== action.payload
            );
        },
    },
});

export const { addDestination, removeDestination } = destinationSlice.actions;
export default destinationSlice.reducer;
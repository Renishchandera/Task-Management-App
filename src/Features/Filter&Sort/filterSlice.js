import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: 'sort',
    subType: 'First'
}

export const filterSlice = createSlice(
    {
        name: 'sort & filter',
        initialState,
        reducers: {
            sortReducer: (state, action) => {
                state.type = action.payload.type;
                state.subType = action.payload.subType;
            }
        }
    }
)


export const {sortReducer} = filterSlice.actions;

export default  filterSlice.reducer; 
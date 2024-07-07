import { configureStore } from '@reduxjs/toolkit';
import taskReducers from '../Features/taskCRUD/taskCRUDSlice';
import filterReducers from '../Features/Filter&Sort/filterSlice';


const store = configureStore(
    {
        reducer: {
                   taskCRUD: taskReducers,
                    filter: filterReducers,
                 }
    }
);



export default store;
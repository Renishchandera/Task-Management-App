import { configureStore } from '@reduxjs/toolkit';
import taskReducers from '../Features/taskCRUD/taskCRUDSlice';


const store = configureStore(
    {
        reducer: taskReducers,
    }
);



export default store;
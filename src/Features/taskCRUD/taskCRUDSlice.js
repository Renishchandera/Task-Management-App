import { createSlice } from '@reduxjs/toolkit';

const initialTasks = (JSON.parse(localStorage.getItem('allData')) || [] );
const initialNumber = (JSON.parse(localStorage.getItem('numberOfTasks')) || 0);
console.log(initialTasks);
const initialState = {
    tasks: initialTasks,
    n: initialNumber,
    formState: false,
    editFormState: {status: false, id: -1},
    popUp: {status: false, text: 'Default PoP Up MEssage'},
};

const displayPopUpMessage = (state, popUp) => 
{
    state.popUp.text = popUp.text;
    state.popUp.status = popUp.status;
}

const resetAll = (state, bool) => 
{
    if(bool)
    {
        state.tasks = [];
        state.n = 0;
        localStorage.setItem('allData', JSON.stringify(state.tasks));
        localStorage.setItem('numberOfTasks', JSON.stringify(state.n));
    }
}

const addNewTask = (state, x) => {
    console.log("new Task seted");
    state.tasks.push(x);
    state.n = state.n + 1;
     localStorage.setItem('allData', JSON.stringify(state.tasks));
     localStorage.setItem('numberOfTasks', JSON.stringify(state.n));
}



const deleteTask = (state, id)=>
{
    const indexToRemove = state.tasks.findIndex((obj) => obj.id === id);
    console.log(id);
    if(indexToRemove !== -1)
    {
      state.tasks.splice(indexToRemove, 1);
      state.n = state.n - 1;
      console.log("task deleted");
    }else
    {
      alert("This Task Do Not Exists");
    }
    localStorage.setItem('allData', JSON.stringify(state.tasks));
    localStorage.setItem('numberOfTasks', JSON.stringify(state.n));
   
}


const updateTask = (state, x) =>
{
  console.log("update Tasks calledd");
  console.log(`This is new Task`);
  console.log("Addiing spread operator");
  
  const indextToUpdate = state.tasks.findIndex((obj) => obj.id === x.id);
  if(indextToUpdate !== -1)
  {
    state.tasks.splice(indextToUpdate, 1, x);
    console.log("task Updates");
    localStorage.setItem('allData', JSON.stringify(state.tasks));
  }else
  {
    alert("This Task Does Not Exist");
  }

}

export const taskCRUDSlice = createSlice(
    {
        name: 'taskCRUD',
        initialState,
        reducers: 
        {
            addTaskReducer: (state, action) => {
                addNewTask(state, action.payload);
            },
            deleteTaskReducer: (state, action) => {
                deleteTask(state, action.payload);
            },
            updateTaskReducer: (state, action) => {
                updateTask(state, action.payload)
            },
            changeFormState: (state, action) => {
                state.formState = action.payload;
            },
            changeEditFormState: (state, action) => {
                state.editFormState.status = action.payload.status;
                state.editFormState.id = action.payload.id;
            },
            resetReducer: (state, action) => {
                resetAll(state, action.payload);
            },
            displayPopUpReducer: (state, action) => {
                displayPopUpMessage(state,action.payload);
            }
        }
    }
)


export const { addTaskReducer, deleteTaskReducer, updateTaskReducer, changeFormState, changeEditFormState , resetReducer, displayPopUpReducer} = taskCRUDSlice.actions;
export default taskCRUDSlice.reducer;
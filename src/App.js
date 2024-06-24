import {memo, useCallback, useEffect, useRef, useState} from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import TaskNavTabs from './components/TaskNavTabs';
import BottomPanel from './components/BottomPanel';
import './App.css';
import TasksContainer from './components/TasksContainer';
import HiddenEditForm from './components/HiddenEditForm';

function App() {


  console.log((localStorage.getItem('numberOfTasks')));

  const [editFormStatusAndId, setEditFormStatusAndId] = useState({status: false, id: -1});
  const [type, setType] = useState(false);
  const [numberOfTasks, setNumberOfTasks] = useState(JSON.parse(localStorage.getItem('numberOfTasks'))===null?0:JSON.parse(localStorage.getItem('numberOfTasks')));
  console.log(numberOfTasks);
  const [allTasks, setTasks] = useState(JSON.parse(localStorage.getItem('allData'))===null?[]:(JSON.parse(localStorage.getItem('allData'))));
  const [filter, setFilter] = useState({type: 'Sort', subType: 'RecentlyAdded'});



  const updateTasks = useCallback((x)=>
  {
    console.log("update Tasks calledd");
    console.log(`This is new Task`);
    console.log(x);
    console.log("this is all tasks before adding new task");
    console.log(allTasks);
    console.log("Addiing spread operator");
    console.log([...allTasks, x]);
    const newAllTasks = [...allTasks, x];
    setTasks(newAllTasks);
    console.log("this is all tasks AFTER adding new task");
    console.log(allTasks);
    localStorage.setItem('allData', JSON.stringify([...allTasks, x]));
    localStorage.setItem('numberOfTasks', JSON.stringify(numberOfTasks));
    console.log(localStorage.getItem('allData'));
    console.log(localStorage.getItem('numberOfTasks'));
  }, [allTasks]);

  const updateType = useCallback((t) =>
  {
    setType(t);
  }, [type]);

  const addNewTask = useCallback((x)=>
  {   console.log("new Task seted");
      setNumberOfTasks(x.id);
      updateTasks(x);
      console.log(numberOfTasks);
      console.log(allTasks);
  }, [allTasks, numberOfTasks]);

  const editTask = useCallback((id)=>
  {
      console.log("edit task APP>JS");
      setEditFormStatusAndId({status: true, id: id});
  }, [editFormStatusAndId]);

  const deleteTask = useCallback((id)=>
  {
      const indexToRemove = allTasks.findIndex((obj) => obj.id === id);
      if(indexToRemove !== -1)
      {
        allTasks.splice(indexToRemove, 1);
        console.log("task deleted");
      }else
      {
        alert("This Task Do Not Exists");
      }
      localStorage.setItem('allData', JSON.stringify(allTasks));
      localStorage.setItem('numberOfTasks', JSON.stringify(numberOfTasks));
     
  }, [allTasks, numberOfTasks]);

  return (
    <>
      <Header />
      {/* <FilterPanel setFilter={setFilter}/> */}
      <TaskNavTabs setType={updateType}/>
      <TasksContainer type={type}  allTasks={allTasks} setDeleteId={deleteTask} setEditId={editTask} filter={filter}/>
      <BottomPanel addTask={addNewTask} numberOfTasks={numberOfTasks} />
      {editFormStatusAndId.status   &&  <HiddenEditForm statusAndId={editFormStatusAndId} setEditFormStatusAndId={setEditFormStatusAndId}/>}
    </>
  );
}

export default (App);

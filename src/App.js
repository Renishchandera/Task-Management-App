import {memo, useCallback, useEffect, useRef, useState} from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import TaskNavTabs from './components/TaskNavTabs';
import BottomPanel from './components/BottomPanel';
import './App.css';
import TasksContainer from './components/TasksContainer';

function App() {
  let storedTasks;

  const [type, setType] = useState(false);
  const numberOfTasks = useRef(0);
  const [newTask, setNewTask] = useState({});

  const [allTasks, setTasks] = useState([]);


  useEffect(()=>
  {
    storedTasks = JSON.parse(localStorage.getItem('allTasks'));
    if(storedTasks !== null)
    {
      setTasks(storedTasks);
    }
  }, [allTasks]);

  const updateTasks = useCallback((x)=>
  {
    console.log("update Tasks calledd");
    console.log(`This is new Task`);
    console.log(x);
    setTasks([...allTasks, x]);
    localStorage.setItem('allData', JSON.stringify(allTasks));
  }, [newTask]);

  const updateType = useCallback((t) =>
  {
    setType(t);
  }, [type]);

  const addNewTask = useCallback((x)=>
  {   console.log("new Task seted");
      setNewTask(x);
      updateTasks(x);
      numberOfTasks.current = numberOfTasks.current + 1;
      console.log(numberOfTasks);
      console.log(allTasks);
  }, [newTask]);

  // const updateTask = useCallback((new)=>
  // {
  //     console.log("Task Edited");
  // }, []);

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

      localStorage.setItem(JSON.stringify(allTasks));
     
  }, [numberOfTasks, allTasks]);

  return (
    <>
      <Header />
      <FilterPanel/>
      <TaskNavTabs setType={updateType}/>
      <TasksContainer type={type}  allTasks={allTasks} setDeleteId={deleteTask}/>
      <BottomPanel addTask={addNewTask} numberOfTasks={numberOfTasks} />
    </>
  );
}

export default memo(App);

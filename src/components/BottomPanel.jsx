import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HiddenForm from './HiddenForm';
import '../css/BottomPanel.css';
import { memo, useState,  useCallback } from 'react';

function BottomPanel({addTask, numberOfTasks})
{

  const [formStatus, setFormStatus] = useState(false);
  const handleClick = useCallback(()=>{
      console.log("Task ADDED");
      setFormStatus(true);
  }, [])

  console.log(numberOfTasks);
  const setNewTask = useCallback((newTask)=>
  {
    console.log("FUCK YOU REACT");
    console.log(numberOfTasks);
    addTask({
      status: false,
      des: newTask.des,
      title: newTask.title,
      category: newTask.category,
      id: numberOfTasks + 1,
      DT: newTask.dateNTime,
    });

  }, [numberOfTasks, addTask]);


  const updateFormStatus = useCallback((x)=>
  {
        setFormStatus(x);
  }, []);

    return (
        <>
        {console.log("Bottom panel rendered")}
      
            <div className={"bottomPanel"}>
          <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={handleClick}>Add 
            <Fab color="secondary" aria-label="add">
           <AddIcon /> 
            </Fab>
            </Box>
            <span className={"text bottomPanelText"}> New Task</span>
            <HiddenForm status={formStatus} updateFormStatus={updateFormStatus} setNewTask={setNewTask}/>
          </div>
          
        </>
    );
}

export default memo(BottomPanel);
import AddIcon from '@mui/icons-material/Add';
import ResetIcon from '@mui/icons-material/DeleteForeverRounded';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HiddenForm from './HiddenForm';
import '../css/BottomPanel.css';
import { memo, useState, useCallback } from 'react';

function BottomPanel({ addTask, numberOfTasks }) {

  const handleResetClick = useCallback(() => {
    let x = prompt("Want to Delete All Tasks (Pending and Completed) ? (yes/no)");
    if (x === "yes") {
      localStorage.clear();
      alert("All Cleared !!");
    }
  }, []);
  const [formStatus, setFormStatus] = useState(false);
  const handleClick = useCallback(() => {
    console.log("Task ADDED");
    setFormStatus(true);
  }, [])

  console.log(numberOfTasks);
  const setNewTask = useCallback((newTask) => {
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


  const updateFormStatus = useCallback((x) => {
    setFormStatus(x);
  }, []);

  return (
    <>
      {console.log("Bottom panel rendered")}

      <div className={"bottomPanel"}>
        <div className={"addTaskContainer"} onClick={handleClick} >
          
            <Box sx={{ '& > :not(style)': { m: 1 } }} className={"bottomFab"}>
              <Fab aria-label="add" size='small' color='primary'>
                <AddIcon />
              </Fab>
            </Box>
            <span className={"text bottomPanelText"}>Add New Task</span>
          <br />
        </div>
        <div className={"resetContainer"} onClick={handleResetClick}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}  className={"bottomFab"}>
              <Fab aria-label="add" size='small' color='secondary' >
                <ResetIcon />
              </Fab>
            </Box>
          <span className={"text bottomPanelText"}>Delete ALL</span>
        </div>
        <HiddenForm status={formStatus} updateFormStatus={updateFormStatus} setNewTask={setNewTask} />
      </div>

    </>
  );
}

export default memo(BottomPanel);
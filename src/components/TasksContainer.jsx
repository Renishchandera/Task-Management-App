import { memo, useCallback, useState } from "react";
import Task from "./Task";
import EmptyIcon from '@mui/icons-material/ErrorTwoTone';
import '../css/TasksContainer.css';

function TasksContainer({ type , setDeleteId, setEditId}) {
    console.log("Task container red=ndered");

    let allTasks = JSON.parse(localStorage.getItem('allData'));
    if(allTasks === null)
    {
        allTasks = [];
    }
    // const updateTask = useCallback((new) =>
    // {
    //     editTask(new)
    // }, []);

    const updateTaskStatus = useCallback((newStatus, id) =>
    {
        let taskToUpdate;
        if(allTasks !== null)
        {
            taskToUpdate = allTasks.find(task => task.id === id);
        } 
          taskToUpdate.status = newStatus;
          localStorage.setItem('allData', JSON.stringify(allTasks));
    }, [setEditId,setDeleteId, allTasks]);

    if((allTasks.length !== 0))
    {
        return (
            <>
                <div className={"tasksContainer"}>
                
                    {
                        allTasks.map((task) => {
                            console.log("element 1 rendered");
                            return <div>
                               { task.status===type && <Task task={task} updateTaskStatus={updateTaskStatus} setDeleteId={setDeleteId} setEditId={setEditId}/> }
                            </div>

                        })
                    }
                        
                </div>
    
            </>
        );
    }else
    {
       return (
       <div className={"emptyTasksMessageContainer"}>
         <aside>  No Tasks, Add Tasks.... from below button </aside>
            <br/>
            <EmptyIcon sx={{fontSize: "3rem"}} />
        </div> 
       );
    }

   
}


export default memo(TasksContainer);
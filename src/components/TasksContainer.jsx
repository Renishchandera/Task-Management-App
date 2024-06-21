import { memo, useCallback, useState } from "react";
import Task from "./Task";
import EmptyIcon from '@mui/icons-material/ErrorTwoTone';
import '../css/TasksContainer.css';
import HiddenForm from "./HiddenForm";

function TasksContainer({ type ,  allTasks, setDeleteId}) {
    console.log("Task container red=ndered");

    // const updateTask = useCallback((new) =>
    // {
    //     editTask(new)
    // }, []);

    if(allTasks.length !== 0)
    {
        return (
            <>
                <div className={"tasksContainer"}>
                
                    {
                        allTasks.map((task) => {
                            console.log("element 1 rendered");
                            return <div>
                               { task.status===type && <Task task={task} setDeleteId={setDeleteId}/> }
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
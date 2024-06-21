import { memo, useState, useContext } from 'react';
import '../css/TaskActions.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useCallback } from 'react';

function TaskActions({task, causeRender, setDeleteId})
{   
     const handleMarkClick = useCallback((e)=>{
                
                    console.log(`Marked as ${!task.status?"In":""} Completed`)
                    task.status = !task.status;
                
                causeRender("qdwev");
     })
    //  const handleEditClick = useCallback(()=>
    //  {
    //         updateTask(task);
    //  });

    const handleDeleteClick = useCallback(()=>
    {
        setDeleteId(task.id);   
        task.id = -1;
        causeRender("cdcds");
    }, []);

     { console.log("task Action Rendered");}
    return (

        <div className={`taskActionsContainer ${task.id===-1?"deleted":task.status?"completed":"pending"}`}>
            {(!task.status)&& <span className={"actionContainer"}
              
            ><EditIcon className={"actionIcon editIcon"}/>&nbsp;Edit</span>}
            <br/>
            <span className={"actionContainer"}
                onClick={handleDeleteClick}
            ><DeleteIcon className={"actionIcon deleteIcon"}/>&nbsp;Delete</span>
            <br/>
           { 
            <span className={"actionContainer"}
            onClick={handleMarkClick}
             ><CheckCircleOutlineIcon className={"actionIcon markCompletedIcon"}/> {task.id===-1?"Deleted":(task.status ?"Mark As Pending":"Mark As Completed")}</span>
           }
        </div>
    );
}

export default memo(TaskActions);
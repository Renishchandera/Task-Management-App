import { memo, useState, useContext } from 'react';
import '../css/TaskActions.css';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useCallback } from 'react';
import { changeEditFormState, deleteTaskReducer, displayPopUpReducer, updateTaskReducer } from '../Features/taskCRUD/taskCRUDSlice';

function TaskActions({task, causeRender})
{   
    const dispatch = useDispatch();

     const handleMarkClick = useCallback((e)=>{
                
                    console.log(`Marked as ${!task.status?"In":""} Completed`)
                dispatch(updateTaskReducer({...task, status: !task.status}))
                dispatch(displayPopUpReducer({status: true, text: `Task Marked as ${task.status?"Pending":"Completed"} -> ${task.title}`}));
                causeRender(`math${Math.random()*2}`);
     }, [causeRender, task.status]);
   

    const handleDeleteClick = useCallback(()=>
    {
      //  let conf = prompt(`Are You Sure to Delete the ${task.status?'COMPLETED':'PENDING'} Task : ${task.title}`);
      dispatch(deleteTaskReducer(task.id));
      dispatch(displayPopUpReducer({status:true, text:`Task Deleted !! -> ${task.title}`}));
        causeRender(`math${Math.random()*2}`);
    }, []);


    const handleEditClick = useCallback(()=>
    {
        dispatch(changeEditFormState({status: true, id: task.id}));
    }, [task.id]);

     { console.log("task Action Rendered");}
    return (

        <div className={`taskActionsContainer ${task.id===-1?"deleted":task.status?"completed":"pending"}`}>
            {(!task.status)&& <span className={"actionContainer editAction"}
                onClick={handleEditClick}
            ><EditIcon className={"actionIcon editIcon"}/>&nbsp;Edit</span>}
            <br/>
            <span className={"actionContainer deleteAction"}
                onClick={handleDeleteClick}
            ><DeleteIcon className={"actionIcon deleteIcon"}/>&nbsp;Delete</span>
            <br/>
           { 
            <span className={`actionContainer markAction ${task.status?'pendingMarkAction': 'completedMarkAction'}`}
            onClick={handleMarkClick}
             ><CheckCircleOutlineIcon className={"actionIcon markCompletedIcon"}/> {task.id===-1?"Deleted":(task.status ?"Mark As Pending":"Mark As Completed")}</span>
           }
        </div>
    );
}

export default memo(TaskActions);
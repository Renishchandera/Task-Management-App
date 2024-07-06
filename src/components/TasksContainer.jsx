import { memo, useCallback, useEffect, useState } from "react";
import Task from "./Task";
import {useSelector, useDispatch} from 'react-redux';
import EmptyIcon from '@mui/icons-material/ErrorTwoTone';
import '../css/TasksContainer.css';

function TasksContainer({ type, filter }) {
    console.log("Task container red=ndered");
    const allTasks = useSelector((state) => state.tasks);
    const n = useSelector((state) => state.n);

    console.log(n);


    if ((allTasks.length !== 0)) {
        return (
            <>
                <div className={"tasksContainer"}>
                    {console.log(allTasks)}
                    {   
                        allTasks.map((task) => {
                            console.log("element 1 rendered");
                            return <div>
                                {task.status === type && <Task key={task.id} task={task} />}
                            </div>
                        })
                    }

                </div>

            </>
        );
    } else {
        return (
            <div className={"emptyTasksMessageContainer"}>
                <aside>  No Tasks, Add Tasks.... from below button </aside>
                <br />
                <EmptyIcon sx={{ fontSize: "3rem" }} />
            </div>
        );
    }


}


export default memo(TasksContainer);
import { memo, useCallback, useEffect, useState } from "react";
import Task from "./Task";
import {useSelector, useDispatch} from 'react-redux';
import EmptyIcon from '@mui/icons-material/ErrorTwoTone';
import '../css/TasksContainer.css';

function TasksContainer({ type }) {
    console.log("Task container red=ndered");
    const allTasks = (useSelector((state) => state.taskCRUD.tasks));
    const sortedTasks = [...allTasks];
    const n = useSelector((state) => state.taskCRUD.n);
    console.log(n);

    const filterType = useSelector(state => state.filter.type);
    const filterSubType = useSelector(state => state.filter.subType);

    if(filterType === 'sort' && filterSubType === 'First')
    {   console.log("SORTING BY LAST")
        sortedTasks.sort((a,b) => b.id - a.id);
    }

    if ((sortedTasks.length !== 0)) {
        return (
            <>
                <div className={"tasksContainer"}>
                    {   
                            sortedTasks.map((task) => {
                            console.log("element 1 rendered");
                            return <div key={task.id}>
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
import { memo, useCallback, useEffect, useState } from "react";
import Task from "./Task";
import EmptyIcon from '@mui/icons-material/ErrorTwoTone';
import '../css/TasksContainer.css';

function TasksContainer({ type, setDeleteId, setEditId, filter }) {
    console.log("Task container red=ndered");
    let allTasks;

    allTasks = JSON.parse(localStorage.getItem('allData'));
    if (allTasks === null) {
        allTasks = [];
    }

    if (filter.type === 'Sort' && filter.subType === 'RecentlyAdded') {
        allTasks = allTasks.sort((a, b) => a.id <= b.id);
    } else if (filter.type === 'Sort' && filter.subType === 'FirstAdded') {
        allTasks = allTasks.sort((a, b) => a.id > b.id);
    }

    // const updateTask = useCallback((new) =>
    // {
    //     editTask(new)
    // }, []);

    const updateTaskStatus = useCallback((newStatus, id) => {
        let taskToUpdate;
        console.log("Updaetin g task status");
        if (allTasks !== null) {
            taskToUpdate = allTasks.find(task => task.id === id);
        }
        taskToUpdate.status = newStatus;
        localStorage.setItem('allData', JSON.stringify(allTasks));
        console.log("Task Status Updated In Local Also BC :{");
    }, [setEditId, setDeleteId, allTasks]);

    if ((allTasks.length !== 0)) {
        return (
            <>
                <div className={"tasksContainer"}>

                    {
                        allTasks.map((task) => {
                            console.log("element 1 rendered");
                            return <div>
                                {task.status === type && <Task key={task.id} task={task} updateTaskStatus={updateTaskStatus} 
                                setDeleteId={setDeleteId} setEditId={setEditId} />}
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
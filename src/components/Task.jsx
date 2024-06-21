import { memo, useCallback, useState } from 'react';
import TaskText from './TaskText';
import TaskActions from './TaskActions';
import '../css/Task.css';
import '../css/TaskText.css';
import '../css/TaskActions.css';

function Task({task, updateTask, setDeleteId})
{
    const [rerender, causeRender] = useState("");

    const makeRender = useCallback(()=>
    {
        causeRender("hervkj");
    }, [rerender]);

    return (
        <div className={`task`}>
            <TaskText task={task} causeRender={makeRender}/>
            <TaskActions task={task} causeRender={makeRender} updateTask={updateTask} setDeleteId={setDeleteId}/>
        </div>
    );
}


export default memo(Task);
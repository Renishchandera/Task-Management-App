import { memo, useCallback, useState } from 'react';
import TaskText from './TaskText';
import TaskActions from './TaskActions';
import '../css/Task.css';
import '../css/TaskText.css';
import '../css/TaskActions.css';

function Task({task})
{
    const [rerender, causeRender] = useState("");

    const makeRender = (x)=>
    {
        causeRender(x);
    }

    return (
        <div className={`task`}>
            <TaskText task={task}/>
            <TaskActions task={task} causeRender={makeRender} />
        </div>
    );
}


export default memo(Task);
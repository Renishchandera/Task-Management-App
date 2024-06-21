import { memo , useState } from 'react';
import '../css/TaskText.css';

function TaskText({task})
{

    return (
       <div className={"taskTextContainer"}>
            <div>
            <span>Added :  {task.DT.year}/{task.DT.month}/{task.DT.date}, {task.DT.hours}:{task.DT.minutes}, {task.DT.day}</span>
            <br/>
            <span>{task.title}</span>
            <br/>
            <span>{task.des}</span>
            <br/>
            <span>{task.category}</span>
            </div>
            <div>
                {task.id===-1?"DELETED SUCCESSFULLY":(task.status ? "COMPLETED" : "PENDING")}
                {task.id}
            </div>
       </div>
    );
}

export default memo(TaskText);
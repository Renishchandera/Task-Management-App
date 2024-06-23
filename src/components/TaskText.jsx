import { memo , useState } from 'react';
import '../css/TaskText.css';

function TaskText({task})
{

    return (
       <div className={"taskTextContainer"}>
            <div className={"taskTextLeft"}>
            <br/>
            <span><span className={"titleTitle"}>Title : </span><span>{task.title}</span></span>
            <br/>
            <span><span className={"descriptionTitle"}>Description : </span><span>{task.des}</span></span>
            <br/>
            </div>
            <div className={"taskTextRight"}>
            <span className={"category"}><span className={"categoryTitle"}>CATEGORY</span><span>{task.category}</span></span>
            <span className={"addedAt"}>{task.DT.date}/{task.DT.month}/{task.DT.year}</span>
                <span className={`taskStatus ${task.status?'completedText':'pendingText'}`}>
                {task.id===-1?"DELETED SUCCESSFULLY":(task.status ? "COMPLETED" : "PENDING")}
                </span>
            </div>
       </div>
    );
}

export default memo(TaskText);
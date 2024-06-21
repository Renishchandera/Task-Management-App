import { memo, useCallback, useState } from 'react';
import PendingIcon from '@mui/icons-material/PendingActionsTwoTone';
import CompletedIcon from '@mui/icons-material/TaskTwoTone';
import '../css/TaskNavTabs.css';

function TaskNavTabs({setType})
{ 
    const [activePanel, setActivePanel] = useState("pending");
    
    const handleClick1 = useCallback(()=>
    {
        setActivePanel("pending");
        setType(false);
    }, [setType]);

    const handleClick2 = useCallback(()=>
    {
        setActivePanel("completed");
        setType(true);
    }, [setType]);

    return (
        <>
            <div className={"tabsContainer"}>
                <div className={`tab pendingTab ${activePanel==="pending"?"active":""}`} onClick={handleClick1}><span><PendingIcon color="secondary" fontSize="medium"/></span><span>Pending Tasks</span></div>
                <div className={`tab completedTab ${activePanel==="completed"?"active":""}`} onClick={handleClick2}><span><CompletedIcon color="success"  fontSize='medium'/>  </span><span>Completed Tasks</span></div>
            </div>
        </>
    );
}

export default (TaskNavTabs);
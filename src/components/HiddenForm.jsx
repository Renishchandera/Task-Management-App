import { memo,useState, useMemo, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/CloseSharp';
import AddIcon from '@mui/icons-material/AddCircleRounded';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import '../css/HiddenForm.css';

function HiddenForm({ status, updateFormStatus, setNewTask }) {

    console.log("Hidden Form Rendered");
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [inputs, setInputs] = useState({});    
    const handleChange = useCallback((e)=>
    {
        const name = e.target.name;
        console.log("handle change");
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value, [name]: value, [name]: value}));
    }, []);

    const handleCloseClick = useCallback( () =>
    {
        updateFormStatus(false);
    }, []);

    const handleSubmit = useCallback((e)=>
    {
        const now = new Date;
        e.preventDefault();
        inputs.dateNTime = {       
                minutes: String(now.getMinutes()).padStart(2, '0'),
                hours: String(now.getHours()).padStart(2, '0'),
                day: String(weekDays[(now.getDay())]),
                date: String(now.getDate()).padStart(2, '0'),
                year: String(now.getFullYear()).padStart(2, '0'),
                month: String(now.getMonth()+1).padStart(2, '0'),     
        };

        setNewTask(inputs);
        console.log("Hnalde submit");
        console.log("Submited inputsw now closing");
        handleCloseClick();
    }, [status,inputs]);

   


    if (status) {
        return (
            <form className={"taskAddForm"} onSubmit={handleSubmit} id={"form"}>
                <div className={"formContainer"}>
            
                        <Box className={"closeBtn"} onClick={handleCloseClick}>Close
                            <Fab color="error" aria-label="add" size={"small"}>
                                <CloseIcon />
                            </Fab>
                        </Box>

                    <div>
                        <label htmlFor={"taskTitleId"}>Task Title</label>
                        <input type='text' placeholder={"Enter Task Title"} className={"taskTitle"} id={"taskTitleId"} name={"title"} onChange={handleChange} required></input>
                    </div>
                    <div>
                        <label htmlFor={"taskCategoryId"}>Task Category</label>
                        <input type={"text"} placeholder={"Enter Task Category"} className={"taskCategory"} id={"taskCategoryId"} name={"category"} onChange={handleChange}  required></input>
                    </div>
                    <div>
                        <label htmlFor={"taskDescriptionId"}>Task Description</label>
                        <input type={"text"} placeholder={"Enter Task Description"} className={"taskDescription"} id={"taskDescriptionId"} name={"des"} onChange={handleChange} required></input>
                    </div>
                    <div>
                       <Box className={""} onClick={handleSubmit}>Add Task
                            <Fab color="success" aria-label="add" size={"small"}>
                                <label htmlFor={"submit"} style={{margin: "0", padding: "0", position: "absolute", top: "25%", bottom: "50%"}}> <AddIcon/></label>
                            </Fab>                      
                        </Box>
                        <input type={"submit"} id={"submit"} style={{display: "none"}}></input> 
                    </div>
                </div>
            </form>
        );
    }
}


export default memo(HiddenForm);
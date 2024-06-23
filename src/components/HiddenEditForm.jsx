import '../css/HiddenForm.css';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import EditIcon from '@mui/icons-material/ChangeCircle';
import CloseIcon from '@mui/icons-material/CloseRounded'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { useCallback } from 'react';

function HiddenEditForm({ statusAndId, setEditFormStatusAndId }) {

    let taskToEdit = useRef({});
    let allData = useRef([]);

    console.log("Hidden Edit From Rendered");

    const [inputs, setInputs] = useState({});
    useEffect(() => {
        console.log("USE EFFTECT");
        allData.current = JSON.parse(localStorage.getItem('allData'));
        taskToEdit.current = allData.current.find((task) => task.id === statusAndId.id);
        setInputs({ title: taskToEdit.current.title, des: taskToEdit.current.des, category: taskToEdit.current.category });
    }, []);

    const handleChange = (e) => {
        console.log("handle change");
        const name = e.target.name
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);

    }


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(taskToEdit.current);
        console.log(inputs);
        taskToEdit.current.des = inputs.des;
        taskToEdit.current.title = inputs.title;
        taskToEdit.current.category = inputs.category;
        console.log(taskToEdit.current);
        localStorage.setItem('allData', JSON.stringify(allData.current));
        console.log("Task EDITED SUCCESSFULLUU");
        console.log("Handle Submit");
        handleCloseClick();
    }, [inputs]);

    const handleCloseClick = useCallback(() => {
        setEditFormStatusAndId({ status: false, id: -1 });
    }, []);

    if (statusAndId.status) {
        return (
            <>
                <form className={"taskAddForm"} onSubmit={handleSubmit} id={"form"}>
                    <div className={"formContainer"}>

                        <Box className={"closeBtn"} onClick={handleCloseClick}>Close
                            <Fab color="error" aria-label="add" size={"small"}>
                                <CloseIcon />
                            </Fab>
                        </Box>
                        <div>
                            <label htmlFor={"taskTitleId"}>Task Title</label>
                            <input type='text' placeholder={"Enter Task Title"} value={
                                inputs.title
                            } className={"taskTitle"} id={"taskTitleId"} name={"title"} onChange={handleChange} required></input>
                        </div>

                        <div>
                            <label htmlFor={"taskCategoryId"}>Task Category</label>
                            <input type={"text"} placeholder={"Enter Task Category"} value={
                                inputs.category
                            } className={"taskCategory"} id={"taskCategoryId"} name={"category"} onChange={handleChange} required></input>
                        </div>
                        <div>
                            <label htmlFor={"taskDescriptionId"}>Task Description</label>
                            <input type={"text"} placeholder={"Enter Task Description"} value={
                                inputs.des
                            } className={"taskDescription"} id={"taskDescriptionId"} name={"des"} onChange={handleChange} required></input>
                        </div>
                        <div>
                            <Box className={""} onClick={handleSubmit}>Edit Task
                                <Fab color="success" aria-label="add" size={"small"}>
                                    <label htmlFor={"submit"} style={{ margin: "0", padding: "0", position: "absolute", top: "25%", bottom: "50%" }}> <EditIcon /></label>
                                </Fab>
                            </Box>
                            <input type={"submit"} id={"submit"} style={{ display: "none" }}></input>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}


export default memo(HiddenEditForm);
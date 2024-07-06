import '../css/HiddenForm.css';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import EditIcon from '@mui/icons-material/ChangeCircle';
import CloseIcon from '@mui/icons-material/CloseRounded'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {useSelector , useDispatch} from 'react-redux';
import { useCallback } from 'react';
import { changeEditFormState, displayPopUpReducer, updateTaskReducer } from '../Features/taskCRUD/taskCRUDSlice';

function HiddenEditForm() {

    const dispatch = useDispatch();

    let taskId = useSelector(state => state.editFormState.id);
    console.log(taskId)
    let allData = useSelector(state => state.tasks);
    console.log(allData);
    let taskToEdit =  (allData.length === 0 ? {} : allData.find((task) => task.id === taskId));
    console.log("Hidden Edit From Rendered");

    const [inputs, setInputs] = useState({});


        useEffect(() => {
            console.log("USE EFFTECT");
            if(taskId !== -1)
                setInputs({ title: taskToEdit.title, des: taskToEdit.des, category: taskToEdit.category });
        }, [taskId]);
    

    const handleChange = (e) => {
        console.log("handle change");
        const name = e.target.name
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);

    }


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(taskToEdit);
        console.log(inputs);
        const newTask = Object.assign({}, taskToEdit);
        newTask.des = inputs.des;
        newTask.title = inputs.title;
        newTask.category = inputs.category;
        console.log(newTask);
        dispatch(updateTaskReducer(newTask));
        dispatch(displayPopUpReducer({status: true, text:  `Task Edited -> ${newTask.title}`}))
        setInputs({});
        console.log("Task EDITED SUCCESSFULLUU");
        console.log("Handle Submit");
        handleCloseClick();
    }, [inputs]);

    const handleCloseClick = useCallback(() => {
        console.log("ClOSED")
        dispatch(changeEditFormState({ status: false, id: -1 }));
    }, []);


    const formStatusAndId = useSelector(state => state.editFormState);

    if (formStatusAndId.status && formStatusAndId.id != -1) {
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
                                inputs.title ?? ''
                            } className={"taskTitle"} id={"taskTitleId"} name={"title"} onChange={handleChange} required></input>
                        </div>

                        <div>
                            <label htmlFor={"taskCategoryId"}>Task Category</label>
                            <input type={"text"} placeholder={"Enter Task Category"} value={
                                inputs.category ?? ''
                            } className={"taskCategory"} id={"taskCategoryId"} name={"category"} onChange={handleChange} required></input>
                        </div>
                        <div>
                            <label htmlFor={"taskDescriptionId"}>Task Description</label>
                            <input type={"text"} placeholder={"Enter Task Description"} value={
                                inputs.des ?? ''
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
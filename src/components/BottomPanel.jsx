import AddIcon from '@mui/icons-material/Add';
import ResetIcon from '@mui/icons-material/DeleteForeverRounded';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HiddenForm from './HiddenForm';
import {useDispatch, useSelector} from 'react-redux';
import '../css/BottomPanel.css';
import { memo, useCallback } from 'react';
import { addTaskReducer, changeFormState , displayPopUpReducer, resetReducer} from '../Features/taskCRUD/taskCRUDSlice';


const PopUpMessage = memo( () =>
{
  const popUpMessage = useSelector(state => state.taskCRUD.popUp.text);
  return (
    <>
      <small className='popUpMessage'>{popUpMessage}</small>
    </>
  )
})


function BottomPanel() {

  const dispatch = useDispatch();
  const popUpStatus = useSelector(state => state.taskCRUD.popUp.status);
  const setPopUp = setTimeout(() =>
  {
    console.log("Inside Time Out");
    dispatch(displayPopUpReducer({status: false, text: 'Default PopUp'}))
    clearInterval(setPopUp);
  }, 2000);



  const handleResetClick = useCallback(() => {
    let x = prompt("Want to Delete All Tasks (Pending and Completed) ? (yes/no)");
    if (x === "yes") {
      dispatch(resetReducer(true));
      dispatch(displayPopUpReducer({status: true, text: "All Storage Cleared !! Add New Tasks."}))
    }
  }, []);

  const handleClick = useCallback(() => {
    dispatch(changeFormState(true));
  }, [])

  


  return (
    <>
      {console.log("Bottom panel rendered")}

      <div className={"bottomPanel"}>
        <div className={"addTaskContainer"} onClick={handleClick} >
          
            <Box sx={{ '& > :not(style)': { m: 1 } }} className={"bottomFab"}>
              <Fab aria-label="add" size='small' color='primary'>
                <AddIcon />
              </Fab>
            </Box>
            <span className={"text bottomPanelText"}>Add New Task</span>
          <br />
        </div>
        <div className={"resetContainer"} onClick={handleResetClick}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}  className={"bottomFab"}>
              <Fab aria-label="add" size='small' color='secondary' >
                <ResetIcon />
              </Fab>
            </Box>
          <span className={"text bottomPanelText"}>Delete ALL</span>
        </div>
        { popUpStatus === true && <PopUpMessage/> }
        <HiddenForm  />
      </div>

    </>
  );
}

export default memo(BottomPanel);
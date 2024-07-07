import {useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { resetReducer } from '../Features/taskCRUD/taskCRUDSlice';
import { hover } from '@testing-library/user-event/dist/hover';

function AlignUpdates({setStatus})
{
    const dispatch = useDispatch();

    const allTasks = useSelector(state => state.taskCRUD.tasks);
    const n = useSelector(state => state.taskCRUD.n);

    const handleAlignUpdates = useCallback( () => {
        dispatch(resetReducer());
        localStorage.setItem('allData', JSON.stringify(allTasks));
        localStorage.setItem('numberOfTasks', JSON.stringify(n));
        alert("Updates Aligned SuccessFully You can Continue using app normally");
        localStorage.setItem('version', JSON.stringify('4'));
        setStatus('4');
    }, [allTasks, n, dispatch, setStatus]);

    return (
        <>
            <div style={
                {
                    backgroundColor:  'var(--background-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: '0',
                    zIndex: '10000',
                }
            }>
                <p style={{
                    color: 'var(--text-color)',

                }}>.
                Hey, Sorry For Disturbance, But we have updated our app, so it will need to align old storage with new update
                for seamless experience.
                <br/>
                <h5>What's New : </h5>
                <br/>
                 <ul>
                        <li>You can Now sort the tasks based on Recent and First Added for better task control.</li>
                        <li>Dark & Light Theme feature for your comfort.</li>
                        <li>Enhanced UI for Sleek Experience.</li>
                        <li>Pop Up message for different actions.</li>
                    </ul> 
                <br/>
                </p>
                <b style={{textAlign: 'center', color: 'var(--primary)'}}>CLICK BELOW</b>
                <button onClick={handleAlignUpdates} 
                    style={
                        {
                            backgroundColor:   'var(--background-color)',
                            border: '2px solid var(--primary)',
                            color: 'var(--text-color)',
                            fontSize: 'large',
                            fontWeight: '900',
                            margin: '1rem',
                            padding: '1rem',
                        }
                    }
                >Okay, Align Updates</button>
            </div>
        </>
    )
}

export default memo(AlignUpdates);
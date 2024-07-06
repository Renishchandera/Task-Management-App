import {useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';

function AlignUpdates({setStatus})
{
    const dispatch = useDispatch();

    const allTasks = useSelector(state => state.tasks);
    const n = useSelector(state => state.n);

    const handleAlignUpdates = useCallback( () => {
        localStorage.clear();
        localStorage.setItem('allData', JSON.stringify(allTasks));
        localStorage.setItem('numberOfTasks', JSON.stringify(n));
        alert("Updates Aligned SuccessFully You can Continue using app normally");
        localStorage.setItem('version', JSON.stringify('2'));
        setStatus('2');
    }, []);

    return (
        <>
            <div style={
                {
                    backgroundColor:  '#8cd6fba9',
                    color: '#05161A',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: '0',
                    zIndex: '10000',

                }
            }>
                <p>
                Hey, Sorry For Disturbance, But we have updated our app, so it will need to align old storage with new update
                for seamless experience. Not Take more than 5 sec.
                </p>
                <button onClick={handleAlignUpdates} 
                    style={
                        {
                            backgroundColor:   '#05161A',
                            color: '#8cd6fb',
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
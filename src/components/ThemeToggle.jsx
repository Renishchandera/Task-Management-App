import LightThemeIcon from '@mui/icons-material/LightMode';
import DarkThemeIcon from '@mui/icons-material/DarkMode';
import {useDispatch} from 'react-redux';
import '../css/ThemeToggle.css';
import { useCallback, useEffect, useState } from 'react';
import { displayPopUpReducer } from '../Features/taskCRUD/taskCRUDSlice';

const ThemeToggle = () => {
    const [theme, setTheme] = useState((localStorage.getItem("theme")) || "light");
    const dispatch = useDispatch();
    const handleClick = useCallback((e) => {
            setTheme(theme==='light'?'dark':'light');
            document.documentElement.setAttribute('data-theme', theme);
            console.log(`Theme Changed To ${theme} Successfully`);
            localStorage.setItem('theme', theme);
            dispatch(displayPopUpReducer({status: true, text:  `Theme Changed to ${theme}`}));
            console.log(localStorage.getItem('theme'));
    }, [theme]);

    return (
        <>
            <span onClick={handleClick} className={'themeToggleBtn'}>
                {
                    theme==='light' ? <LightThemeIcon fontSize={'medium'}/> :<DarkThemeIcon fontSize={'medium'}/> 
                }
            </span>
        </>
    );
}

export default ThemeToggle;
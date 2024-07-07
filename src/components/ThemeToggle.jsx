import LightThemeIcon from '@mui/icons-material/LightModeTwoTone';
import DarkThemeIcon from '@mui/icons-material/DarkModeTwoTone';
import { useDispatch } from 'react-redux';
import '../css/ThemeToggle.css';
import { useCallback, useEffect, useState } from 'react';
import { displayPopUpReducer } from '../Features/taskCRUD/taskCRUDSlice';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        dispatch(displayPopUpReducer({ status: true, text: `Theme Changed to ${newTheme}` }));
        console.log(`Theme Changed To ${newTheme} Successfully`);
    }, [theme, dispatch]);

    return (
        <span onClick={handleClick} className='themeToggleBtn'>
            {theme !== 'light' ? <LightThemeIcon fontSize='medium' /> : <DarkThemeIcon fontSize='medium' />}
        </span>
    );
}

export default ThemeToggle;

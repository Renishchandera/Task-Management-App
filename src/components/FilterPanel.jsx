import { memo, useCallback } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import FilterIcon from '@mui/icons-material/FilterAlt';
import ThemeToggle from './ThemeToggle';
import { useDispatch } from 'react-redux';
import '../css/FilterPanel.css';
import { sortReducer } from '../Features/Filter&Sort/filterSlice';
function FilterPanel( ) {
    const dispatch = useDispatch();
    const filterChange = useCallback((e) => {
            dispatch(sortReducer({type: 'sort', subType: e.target.value}))
            console.log('Filter Changed')
    }, [dispatch]);


    return (
        <>
            <div className={"filterButtonContainer"}>
               <div>
                <SortIcon fontSize={"large"}/>
                    <select className={"sortMenu"} onChange={filterChange} defaultValue={'Sort By'}>
                        <option value={'Sort'} disabled >Sort By</option>
                        <option value={"First"}  >Recently Added</option>
                        <option value={"Last"} >First Added</option>
                    </select>
               </div>
                <div>
                <ThemeToggle/>
                </div>
            </div>

            </>
            );
}

export default memo(FilterPanel);
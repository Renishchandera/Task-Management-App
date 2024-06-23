import { memo } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import FilterIcon from '@mui/icons-material/FilterAlt';
import '../css/FilterPanel.css';
function FilterPanel()
{
    return (
        <>
            <div className={"filterPanelContainer"}>
               <span className={"filterIcon"}>
                  <SortIcon fontSize={"large"}/>  Sort</span>
                <span className={"filterIcon"}>
                   <FilterIcon fontSize={"large"}/> Filter</span>
            </div>
        </>
    );
}


export default memo(FilterPanel);
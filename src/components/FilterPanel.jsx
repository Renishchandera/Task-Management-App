import { memo, useCallback } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import FilterIcon from '@mui/icons-material/FilterAlt';
import '../css/FilterPanel.css';
function FilterPanel({ setFilter }) {

    const filterChange = useCallback((e) => {
        const subType = e.target.value;
        setFilter({ type: 'Sort', subType: subType});
        console.log("Filter changed");
    }, []);
    return (
        <>
            <div className={"filterButtonContainer"}>
                <select className={"sortMenu"} onChange={filterChange}>
                    <option value={"RecentlyAdded"} selected >Recently Added</option>
                    <option value={"FirstAdded"}>First Added</option>
                </select>
                <div>
                    {/* <span className={"filterIcon"}>
                        <FilterIcon fontSize={"large"} /> Filter</span> */}
                </div>
                </div>

            </>
            );
}


            export default memo(FilterPanel);
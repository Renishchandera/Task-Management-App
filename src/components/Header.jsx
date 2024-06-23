import { memo } from 'react';
import AboutUsIcon from '@mui/icons-material/InfoTwoTone';
import '../css/Header.css';

 function Header()
 {
    return (
        <>
        <div className={"headerContainer"}>
           <div className={"headerText"}>
           <h2>Task Manager</h2> 
           <h4>All Your Tasks In One Place</h4>
           </div>
           <section className={"aboutUsBtn"}>About Us <AboutUsIcon /> </section>
        </div>

        </>
    );
 }

 export default memo(Header);
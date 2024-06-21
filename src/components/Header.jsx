import { memo } from 'react';
import '../css/Header.css';

 function Header()
 {
    return (
        <>
        <div className={"headerContainer"}>
           <div>
           <h2>Task Manager</h2> 
           <h4>All Your Tasks In One Place</h4>
           </div>
           <section className={"aboutUsBtn"}>About Us</section>
        </div>
        <hr />

        </>
    );
 }

 export default memo(Header);
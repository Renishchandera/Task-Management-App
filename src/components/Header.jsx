import { memo,useState, useCallback } from 'react';
import AboutUs from './AboutUs';
import AboutUsIcon from '@mui/icons-material/InfoTwoTone';
import '../css/Header.css';
import ThemeToggle from './ThemeToggle';

 function Header()
 {

      console.log("Header Rendered");

      const [AboutUsStatus, setAboutUsStatus] = useState(false);

   const handleClick = useCallback(()=>
   {
      setAboutUsStatus(true);
   }, []);
    return (
        <>
        <div className={"headerContainer"}>
           <div className={"headerText"}>
           <h2>Task Manager</h2> 
           <h4>All Your Tasks In One Place</h4>
           </div>
           <section className={"aboutUsBtn"} onClick={handleClick}>About Us <AboutUsIcon /></section>
           <AboutUs status={AboutUsStatus} setStatus={setAboutUsStatus}/>
        </div>

        </>
    );
 }

 export default memo(Header);
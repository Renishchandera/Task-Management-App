import { memo } from 'react';
import CloseIcon from '@mui/icons-material/CloseRounded';
import InstaIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/AboutUs.css';

function AboutUs({status, setStatus})
{
   if(status)
   {
        return (
            <>
               <section className={'aboutUsOverlay'}>
                 <CloseIcon className={'closeAboutIcon'} onClick={()=> {setStatus(false)}} />
                 <section className={'aboutUsMain'}>
                        <div className={'aboutApp'}>
                                <h4>About This App</h4>
                                <p>This Is A Simple Task Management App made using The React. 
                                    This App uses the browser localStorage API to store task, there not any backend 
                                    server integration for now. This is the Project to showcase and practice the front-end technologies
                                    like HTML5, CSS3, javaScript, React, Material UI.
                                </p>
                        </div>
                        <br/>
                        <br/>
                        <div className={"aboutDeveloper"}>
                                <h4>About Developer</h4>
                                <p>
                                        I Am Renish Chandera, I Made this Task Management app using my react and javascript skills. I am full stack developer
                                        with the skills in HTML,CSS, JS, React, Redux, Next, SQL, MongoDB, Node, Express, C, C++, PHP. 
                                </p>
                                <p>
                                    If you have any queries or want to personally discuss anything with me or for collaboration you can Contact me from below.
                                </p>
                                <nav className={'aboutNav'}>
                                    <a href={"https://www.Linkedin.in/Renish Chandera"} target={'_blank'}><LinkedInIcon /></a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href={"https://www.instagram.com/renish_chandera_"} target={'_blank'}><InstaIcon /></a>
                                </nav>

                        </div>
                 </section>
                        
               </section>
             </>
        );
   }
}

export default memo(AboutUs);
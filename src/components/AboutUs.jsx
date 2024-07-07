import { memo } from 'react';
import CloseIcon from '@mui/icons-material/CloseRounded';
import InstaIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/AboutUs.css';

function AboutUs({ status, setStatus }) {
    if (status) {
        return (
            <>
                <section className={'aboutUsOverlay'}>
                    <CloseIcon className={'closeAboutIcon'} onClick={() => { setStatus(false) }} />
                    <section className={'aboutUsMain'}>
                        <div className={'aboutApp'}>
                            <h4>About This App</h4>
                            <p>This simple task management app is built with React and uses the browser's localStorage API to store tasks. It showcases front-end technologies like HTML5, CSS3, JavaScript, React, Material UI, and Redux Toolkit.
                                 </p>
                        </div>
                        <br />
                        <br />
                        <div className={"aboutDeveloper"}>
                            <h4>About Developer</h4>
                            <p>

                                Hello! I'm Renish Chandera, the developer behind this task management app. With a strong foundation in React and JavaScript, I have crafted this app to highlight my skills and passion for web development. As a full-stack developer, I bring expertise in a wide range of technologies
                                including HTML, CSS, JavaScript, React, Redux, Next.js, SQL, MongoDB, Node.js, Express, C, C++, and PHP.
                            </p>
                            <br/><br/><br/>
                            <p>
                                For queries or collaboration, contact me through the links below.
                                 </p>

                            <nav className={'aboutNav'}>
                                <a href={"https://www.linkedin.com/in/renish-chandera-119b4a27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target={'_blank'}><LinkedInIcon /></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href={"https://instagram.com/renish_chandera_?igshid=MzMyNGUyNmU2YQ=="} target={'_blank'}><InstaIcon /></a>
                            </nav>

                        </div>
                    </section>

                </section>
            </>
        );
    }
}

export default memo(AboutUs);
import { useTranslation } from 'react-i18next';

import './Projects.scss'

export default function Projects() {
    const {t} = useTranslation()
    
    return(
        <>
            <div className="projects-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="project-info" >

                    <div className="project-info_description">
                        {t('gesys_paragraph')}
                    </div>
                </div>              
                <div className="project-url">
                    <a href="http://www.gesys.uz" target="_blank" rel="noopener noreferrer">
                        Gesys.uz
                    </a>
                </div>
            </div>

            <div className="projects-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="project-info" >
                    <div className="project-info_description">
                        {t('puremilky_paragraph')}
                    </div>
                </div>              
                <div className="project-url">
                    <a href="http://www.puremilky.uz" target="_blank" rel="noopener noreferrer">
                        PureMilky.uz
                    </a>
                </div>
            </div>

            <div className="projects-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="project-info" >
                    <div className="project-info_description">
                        {t('first_site_paragraph')}
                    </div>
                </div>              
                <div className="project-url">
                    <a href="http://www.Abdurasul.dev/version1" target="_blank" rel="noopener noreferrer">
                        Abdurasul.dev
                    </a>
                </div>
            </div>

        </>
    )
};

import './Projects.scss'

export default function Projects() {
    return(
        <>
            <div className="projects-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="project-info" >

                    <div className="project-info_description">
                        Landing page of gesys.uz where I worked at, made
                        using HTML,CSS, Bootstrap 4 and JavaScript.
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
                        Landing page , made
                        using HTML,CSS and JavaScript.
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
                        First version of my portfolio site, made
                        using HTML,CSS, Sass and JavaScript.
                    </div>
                </div>              
                <div className="project-url">
                    <a href="http://www.gesys.uz" target="_blank" rel="noopener noreferrer">
                        Abdurasul.dev
                    </a>
                </div>
            </div>

        </>
    )
};

import './Education.scss'

export default function Education(){
    return(
        <>  
            <div className="education-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="education-info" >
                    <div className="education-info_name">
                        TASHKENT STATE TECHNICAL UNIVERSITY NAMED AFTER ISLAM KARIMOV
                    </div>
                    <div className="education-info_degree">
                            Bachelor degree
                    </div>
                </div>              
                <div className="education-years">
                    2020-Present
                </div>
            </div>

            
            <div className="education-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>
                <div className="education-info" >
                    <div className="education-info_name">
                        Muhammad al-Khwarizmi TUIT Academic Lyceum
                    </div>
                    <div className="education-info_degree">
                        Basic education
                    </div>
                </div>  
                <div className="education-years">
                    2017-2019
                </div>
            </div>

        </>
    )
}
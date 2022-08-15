import { useTranslation } from 'react-i18next';

import './Education.scss'

export default function Education(){
    const {t} = useTranslation()
    return(
        <>  
            <div className="education-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="education-info" >
                    <div className="education-info_name">
                        {t('tashkent_tec_university')}
                    </div>
                    <div className="education-info_degree">
                        {t('bachelor_degree')}
                    </div>
                </div>              
                <div className="education-years">
                    2020-{t('present')}
                </div>
            </div>

            
            <div className="education-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>
                <div className="education-info" >
                    <div className="education-info_name">
                        {t('tuit_liceum')}
                    </div>
                    <div className="education-info_degree">
                        {t('basic_education')}
                    </div>
                </div>  
                <div className="education-years">
                    2017-2019
                </div>
            </div>

        </>
    )
}
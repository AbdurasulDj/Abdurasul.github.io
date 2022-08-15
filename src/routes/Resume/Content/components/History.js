import { useTranslation } from 'react-i18next';

import './History.scss'

export default function History() {
    const {t} = useTranslation()
    
    return(
        <>
            <div className="history-container">
                <div className="dot-container">
                    <div className="dot"></div>
                </div>              
                <div className="history-info" >
                    <div className="history-info_name">
                        GeSys.uz 
                    </div>
                    <div className="history-info_position">
                        {t('frontend_developer')}
                    </div>
                </div>              
                <div className="history-years">
                    09/2020 - 01/2021
                </div>
            </div>
        </>
    )
};

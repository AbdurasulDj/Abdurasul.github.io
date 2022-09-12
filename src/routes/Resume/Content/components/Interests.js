import { useTranslation } from 'react-i18next';

import './Interests.scss'


// traveling video-games programming
export default function Interests() {
    const {t} = useTranslation()
    
    return(
        <div className="interests-container">
            <div className="interests-block">
                       
                <div className="interest-info" >
                    <div className="interest-info_name">
                        {t('traveling')}
                    </div>
                    <div className="interest-info_description">
                        {t('traveling_paragraph')}
                    </div>
                </div>              

            </div>

            <div className="interests-block">
                           
                <div className="interest-info" >
                    <div className="interest-info_name">
                        {t('video_games')}
                    </div>
                    <div className="interest-info_description">
                        {t('video_games_paragraph')}
                    </div>
                </div>              

            </div>

            <div className="interests-block">
                         
                <div className="interest-info" >
                    <div className="interest-info_name">
                        {t('programming')}
                    </div>
                    <div className="interest-info_description">
                        {t('programming_paragraph')}
                    </div>
                </div>              

            </div>

        </div>
    )
};

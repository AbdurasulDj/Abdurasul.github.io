import { useTranslation } from 'react-i18next';

import '../ContactMe.scss'

export default function Modal({sent, error}) {
    const {t} = useTranslation()
    return(
        <div className={`modal-container + ${sent || error ? 'modal-shown' : ''}`}>
            {sent && <span className="success-color">
                {t('sent_text')}
            </span>}

            {error && <span className=" error-color">
                 {t('error_text')}
            </span>}
        </div>
    )
};

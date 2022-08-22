import { useTranslation } from 'react-i18next';

import '../ContactMe.scss'

export default function Button({buttonDisabled, sent}) {
    const { t } = useTranslation();

    // styles of send button
    const displaedCheck = {
        display: 'inline',
        width: '100%',
        transition: 'width 1s'
    }

    const hiddenCheck = {
        display: 'none',
        width: '0%'
    }

    return(
        <button 
            id='submit' 
            disabled={buttonDisabled}
            className={buttonDisabled ? 'disabledButton' : ''}
        >
            {t('send')}
            <span style={sent ? displaedCheck : hiddenCheck}>
                &nbsp;
                <ion-icon name="checkmark-outline"></ion-icon>
            </span>
        </button>
    )
};

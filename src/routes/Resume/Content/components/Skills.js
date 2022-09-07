import React from 'react'
import { useTranslation } from 'react-i18next';
import ProgressBar from './assets/ProgressBar'

import './Skills.scss'

export default function Skills(props) {
    const {t} = useTranslation()

    const [ skillsState, setSkillsState] = React.useState([
        {
            name: 'HTML',
            value: 80
        },
        {
            name: 'CSS',
            value: 70
        },
        {
            name: 'Sass',
            value: 60
        },
        {
            name: 'React',
            value: 55
        },
        {
            name: 'Git + Linux + Figma',
            value: 50
        },
        {
            name: 'Communication',
            value: 80
        },
    ])


    // activate on skills click

    const [isActive, setIsActive] = React.useState( false)

    React.useEffect( ()=> {
        if (props.skillsClicked === true) {
            setIsActive( true)
            
        } else {
            setIsActive( false)
        }

    }, [props.skillsClicked])
    

    const elem = skillsState.map( el => {
        return(
            <div className="skill-container" key={el.name} >
                <h3>{el.name}</h3>
                <ProgressBar 
                    elId={el.name}
                    finalValue = {el.value}
                    isActive = {isActive}
                />
            </div>
        )
    })
    return (
        <div className="skills-container">
            {elem}
        </div>
    )
};

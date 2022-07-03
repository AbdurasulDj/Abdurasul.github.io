import './Skills.scss'
import ProgressBar from './assets/ProgressBar'

// html-70 
// css-65 
// sass-60 
// react-55 
// git-50 
// linux + figma- 35 

export default function Skills() {
    return (
        <div className="skills-container">
            <div className="skill-container" >
                <h3>HTML</h3>
                <ProgressBar 
                    elId='html'
                    finalValue = '80'
                    isActive = {true}
                />
            </div>
            <div className="skill-container" >
                <h3>HTML</h3>
                <ProgressBar 
                    elId='css'
                    finalValue = '70'
                    isActive = {true}
                />
            </div>
            <div className="skill-container" >
                <h3>HTML</h3>
                <ProgressBar 
                    elId='react'
                    finalValue = '50'
                    isActive = {true}
                />
            </div>

            <div className="skill-container">
                <h3>HTML</h3>
                <ProgressBar 
                    finalValue = '80'
                    isActive = {true}
                />
            </div><div className="skill-container">
                <h3>HTML</h3>
                <ProgressBar 
                    finalValue = '80'
                    isActive = {true}
                />
            </div><div className="skill-container">
                <h3>HTML</h3>
                <ProgressBar 
                    finalValue = '80'
                    isActive = {true}
                />
            </div>
        </div>
    )
};

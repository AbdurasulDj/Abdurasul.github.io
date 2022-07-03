import './ProgressBar.scss'
import React from 'react'

export default function ProgressBar({ elId ,finalValue, isActive}) {
    React.useEffect(()=> {
        let i = 0;

        if (i === 0) {
            i = 1;
            let el = document.getElementById(elId);
            let width = 10;
            let id = setInterval( frame, 10)
            function frame(){
                if( width >= finalValue) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    el.style.width = width + '%';
                    el.innerHTML = width + '%'
                }
            }
        }
    },[isActive])
    return (
        <div className='progressBar-container'>
            <div className="progressBar" id={elId}>
                10%
            </div>
        </div>
    )
};

import React, { useState } from 'react'
import ImgComp from './ImgComp'
import './Slider.scss'

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function RecentMatch() {

    let sliderArr = [<ImgComp src="https://i.esdrop.com/d/AQLsEZuIlB.JPG"/>,<ImgComp src="https://i.esdrop.com/d/RFpbHdpPY8.JPG"/>, 
                    <ImgComp src="https://i.esdrop.com/d/ooJFjLe9Q2.JPG"/>, <ImgComp src="https://i.esdrop.com/d/lNWXWFEk0N.JPG"/>];
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x + 100);
    };
    
    const goRight = () => {
        x === -100 * (sliderArr.length-1) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return(
                        <div key={index} className="slide" style={{ transform:`translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                <ArrowLeftIcon style={{ color: 'white' }} />
            </button>
            <button id="goRight" onClick={goRight}>
                <ArrowRightIcon style={{ color: 'white' }} />
            </button>
        </div>
    );
}

export default RecentMatch
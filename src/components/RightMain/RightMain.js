import React, { useState } from 'react'
import './RightMain.css'

function RightMain() {

    const [InHover, setInHover] = useState(false)

    const hoverImgEnter = { opacity: "0.75" }
    const hoverImgLeave = { opacity: "1" }

    return (
        <div class="wrapper" style={InHover? hoverImgEnter:hoverImgLeave}
                 onMouseEnter = {() => setInHover(true)}
                onMouseLeave = {() => setInHover(false)}>
            <div class="divimage">
            </div>
            <div class="divtext">
                Bayern Munich wins
                <br></br>
                6th Champions League title
            </div>
        </div>

        // <div>         
        //     <img src="https://i.esdrop.com/d/NeXHnnqhIj.jpg"
        //         width="100%" style={InHover ? hoverImgEnter : hoverImgLeave} 
        //         onMouseEnter = {() => setInHover(true)}
        //         onMouseLeave = {() => setInHover(false)}
        //     />
        // </div>
    )
}

export default RightMain

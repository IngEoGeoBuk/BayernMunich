import React from 'react'
import styled from 'styled-components'

function Banner() {
    const PcVer = styled.div`
        @media screen and (max-width: 600px) {
            display: none;
        }
    `
    const MobileVer = styled.div`
        display: none;
        @media screen and (max-width: 600px) {
            display: flex;
        }
    `

    return (
        <div>
            <PcVer>
            <div style = {{ backgroundColor: "#F8F8FF" , textAlign: "center", padding: "10px"}}>
                <a href="/BayernMunich">
                    <img src="https://i.esdrop.com/d/OzMCzhaSQb.png" width="100%"/>
                </a>
            </div>
            </PcVer>
            <MobileVer>
                <div style = {{ backgroundColor: "#F8F8FF" , textAlign: "center", padding: "5px", verticalAlign:"center"}}>
                    <a href="/BayernMunich">
                        <img src="https://i.esdrop.com/d/h4hZguUTpf.png" width="100%"/>
                    </a>
                </div>
            </MobileVer>
        </div>

    )
}

export default Banner

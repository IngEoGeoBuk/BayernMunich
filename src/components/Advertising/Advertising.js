import React from 'react'
import { Grid, Box } from "@material-ui/core"
import styled from 'styled-components'

function Advertising() {
    const PcVer = styled.div`
        @media screen and (max-width: 600px) {
            display: none;
        }
    `
    const MobileVer = styled.div`
        display: none;
        @media screen and (max-width: 600px) {
            display: grid;
        }
    `

    const AdvertisingImg = {
        padding: "20px 20px",
        margin: "0px"
    }
    
    return (
            <div style = {{ backgroundColor: "#F8F8FF", padding:"0 10vh", width : "100%"}}>
                <PcVer>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}>
                            <Box p={0} style={AdvertisingImg}>
                                <a href="/BayernMunich">
                                    <img src="https://i.esdrop.com/d/Y12SkSvZKO.gif" width="100%" />
                                </a>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box p={0} style={AdvertisingImg}>
                                <a href="/BayernMunich">
                                    <img src="https://i.esdrop.com/d/vjaxXBp2lZ.jpg" width="100%" />
                                </a>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box p={0} style={AdvertisingImg}>
                                <a href="/BayernMunich">
                                    <img src="https://i.esdrop.com/d/IeipP46AYG.jpg" width="100%"/>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </PcVer>
                    <MobileVer>
                        <div>
                            <img src="https://i.esdrop.com/d/Y12SkSvZKO.gif" width="100%" />
                        </div>
                        <div>
                            <img src="https://i.esdrop.com/d/vjaxXBp2lZ.jpg" width="100%" />
                        </div>
                        <div>
                            <img src="https://i.esdrop.com/d/IeipP46AYG.jpg" width="100%"/>
                        </div>
                        
                    </MobileVer>
            </div>
    )
}

export default Advertising

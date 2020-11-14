import React from 'react'
import './Footer.css'
import { Typography } from "@material-ui/core"
import { Box, Grid } from "@material-ui/core"
import styled from 'styled-components'

function Footer() {
     const PcVer = styled.div`
        @media screen and (max-width: 600px) {
            display: none;
        }
    `

    const MobileVer = styled.div`
        display: none;
        text-align: center;
        justify-content: center;
        @media screen and (max-width: 600px) {
            display: flex;
        }
    `

    const FooterImgPcVer = {
        padding: "30px"
    }

    const FooterImgMobileVer = {
        padding: "10px 20px"
    }

    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
            <div class="LogoHalf">
                <PcVer>
                    <img src = "https://i.esdrop.com/d/8gqkv7Kpzr.png" width="10%"/>
                </PcVer>
                <MobileVer>
                    <img src = "https://i.esdrop.com/d/8gqkv7Kpzr.png" width="30%"/>
                </MobileVer>
            </div>
            <div style = {{ backgroundColor: 'rgba(220, 5, 44)', color: "white"}}>
                <br></br><br></br>
                <Typography variant="h6">  
                    PARTNER
                    <br></br><br></br>
                </Typography>

                <PcVer>
                    <Box display="flex" flexDirection="row" justifyContent= "center" p={0} m={0}>
                        <Box p={0}>
                            <div style={FooterImgPcVer}>
                                <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/B5Qe3xFsyM.png" width="100px"/></a>
                            </div>
                        </Box>
                        <Box p={0}>
                            <div style={FooterImgPcVer}>
                                <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/6yxZfr65jA.png" width="100px"/></a>
                            </div>
                        </Box>
                        <Box p={0}>
                            <div style={FooterImgPcVer}> 
                                <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/1W02FKOiHp.png" width="100px"/></a>
                            </div>
                        </Box>
                        <Box p={0}>
                            <div style={FooterImgPcVer}>
                                <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/hg6NTUaDW7.png" width="100px"
                                    style={{paddingTop:"20px"}}
                                /></a>
                            </div>
                        </Box>
                    </Box>
                </PcVer>

                <MobileVer>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">
                                <div style={FooterImgMobileVer}>
                                    <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/B5Qe3xFsyM.png" width="100px"/></a>
                                </div>
                                <div style={FooterImgMobileVer}>
                                    <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/6yxZfr65jA.png" width="100px"/></a>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">
                                <div style={FooterImgMobileVer}> 
                                    <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/1W02FKOiHp.png" width="100px"/></a>
                                </div>
                                <div style={FooterImgMobileVer}>
                                    <a href="/BayernMunich"><img src = "https://i.esdrop.com/d/hg6NTUaDW7.png" width="100px"
                                        style={{paddingTop:"20px"}}
                                    /></a>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </MobileVer>
            </div>
        </div>
    )
}

export default Footer

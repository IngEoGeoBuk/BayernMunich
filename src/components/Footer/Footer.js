import React from 'react'
import './Footer.css'
import { Typography } from "@material-ui/core"
import { Box } from "@material-ui/core"

function Footer() {

    const FooterImg = {
        padding: "30px"
    }

    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
            <div class="LogoHalf">
                <img src = "https://i.esdrop.com/d/8gqkv7Kpzr.png" width="10%"/>
            </div>
            <div style = {{ backgroundColor: 'rgba(220, 5, 44)', color: "white"}}>
                <br></br><br></br>
                <Typography variant="h6">  
                    PARTNER
                </Typography>
                <br></br><br></br>
                <Box display="flex" flexDirection="row" justifyContent= "center" p={0} m={0}
                >
                    <Box p={0}>
                        <div style={FooterImg}>
                            <a href="/"><img src = "https://i.esdrop.com/d/B5Qe3xFsyM.png" width="100px"/></a>
                        </div>
                    </Box>
                    <Box p={0}>
                        <div style={FooterImg}>
                            <a href="/"><img src = "https://i.esdrop.com/d/6yxZfr65jA.png" width="100px"/></a>
                        </div>
                    </Box>
                    <Box p={0}>
                        <div style={FooterImg}> 
                            <a href="/"><img src = "https://i.esdrop.com/d/1W02FKOiHp.png" width="100px"/></a>
                        </div>
                    </Box>
                    <Box p={0}>
                        <div style={FooterImg}>
                            <a href="/"><img src = "https://i.esdrop.com/d/hg6NTUaDW7.png" width="100px"
                                style={{paddingTop:"20px"}}
                            /></a>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Footer

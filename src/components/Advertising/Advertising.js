import React from 'react'
import { Grid, Box } from "@material-ui/core"

function Advertising() {

    const AdvertisingImg = {
        padding: "20px 20px",
        margin: "0px"
    }
    
    return (
        <div
            style = {{ backgroundColor: "#F8F8FF", padding:"0 20vh", width : "100%"}}
        >

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
                            <img src="https://i.esdrop.com/d/IeipP46AYG.jpg" width="100%" />
                        </a>
                    </Box>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Advertising

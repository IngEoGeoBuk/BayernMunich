import React from 'react';
import { Typography, Box, Divider, Grid } from "@material-ui/core";
import { PcVer, MobileVer } from "./HonoursElements";

function Honours() {

    const line = {
        width: "100%",
        color: "rgb(162, 47, 73)",
        borderBottom: "solid 2px rgb(162, 47, 73)",
    }

    const honoursNumberColor = {
        color : "rgb(162, 47, 73)",
        textAlign: "center"
    }

    const honoursColor = {
        color : "rgb(30, 71, 125)",
        textAlign: "center"
    }

    const BoxPadding = {
        padding: "0 5px"
    }


    return (
        <div style = {{width : "100%"}}>
            <Box display="flex" flexDirection="row" p={0} m={0}>
                <div style={{ color : "rgb(162, 47, 73)", paddingLeft:"20px" }}>
                    <Typography variant="h4">
                        NEW
                    </Typography>
                </div>
                <div style={{ color : "rgb(162, 47, 73)", paddingLeft:"10px"}}>
                    <Typography variant="h4">
                        PRODUCTS
                    </Typography>
                </div>

                <div style={line}>
                    
                </div>     
            </Box>
            <br></br>
            <div style={{ color : "rgb(30, 71, 125)", paddingTop: "20px", paddingLeft:"40px"}}>
                <Typography variant="h4">
                    Honours
                </Typography>
            </div>
            <br/>

            <PcVer>
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={6}>
                        <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/UDeElYTfJK.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>30</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>German Championship</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/55WybIj1oS.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>20</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>DFB German Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/r2mmYcN3k6.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>9</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>German Supercup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/LAu00m3TQL.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>6</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>League Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/ibKToOFmvy.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>6</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>Champions League</Typography>
                            </div>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} lg={6}>
                        <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/duCrwqsqzW.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>1</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>UEFA Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/fTfapT9nvm.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>1</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>UEFA Cup Winners' Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/FWQVR0zBXv.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>2</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>Intercontinental Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/DY5qJvYdbi.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>1</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>FIFA Club World Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/2J0ncCdL9D.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>2</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>UEFA Supercup</Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <br></br><br></br>
            </PcVer>

            <MobileVer>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/UDeElYTfJK.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>30</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>German Championship</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/55WybIj1oS.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>20</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>DFB German Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/r2mmYcN3k6.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>9</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>German Supercup</Typography>
                            </div>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">             
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/LAu00m3TQL.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>6</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>League Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/ibKToOFmvy.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>6</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>Champions League</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/duCrwqsqzW.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>1</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>UEFA Cup</Typography>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box display="flex" flexDirection="row" p={0} m="auto" justifyContent= "center">
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/FWQVR0zBXv.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>2</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>Intercontinental Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/DY5qJvYdbi.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>1</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>FIFA Club World Cup</Typography>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style = {BoxPadding}>
                                <img src="https://i.esdrop.com/d/2J0ncCdL9D.webp" width="100%"/>
                                <Typography variant="h4" style={honoursNumberColor}>2</Typography>
                                <Typography variant="subtitle2" style={honoursColor}>UEFA Supercup</Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </MobileVer>

        </div>
            
    )
}

export default Honours

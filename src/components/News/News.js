import React, { useState } from 'react'
import { Grid, Box } from "@material-ui/core"
import { Typography } from "@material-ui/core"

function News() {
    const [InHover1, setInHover1] = useState(false)
    const [InHover2, setInHover2] = useState(false)
    const [InHover3, setInHover3] = useState(false)

    const line = {
        width: "100%",
        color: "rgb(162, 47, 73)",
        borderBottom: "solid 2px rgb(162, 47, 73)",
    }

    const newsColor1 = {
        color : "rgb(162, 47, 73)"
    }

    const newsColor2 = {
        color : "rgb(30, 71, 125)"
    }


    const hoverImgEnter = { opacity: "0.75" }
    const hoverImgLeave = { opacity: "1" }
    
    return (
        <div style = {{width : "100%"}}>
            <br></br>
            <br></br>
            <Box display="flex" flexDirection="row" p={0} m={0}>
                <div style={{ color : "rgb(162, 47, 73)", paddingLeft:"20px", paddingTop: "10px" }}>
                    <Typography variant="h4">
                        NEWS
                    </Typography>
                </div>
                <div style={line}>
                    
                </div>     
            </Box>


            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                    <Box p={0} style={{ padding: "20px" }}>
                        <a href="/">
                            <img src="https://i.esdrop.com/d/Kr9WK5Ceao.webp" width="100%" style={InHover1 ? hoverImgEnter : hoverImgLeave} 
                                onMouseEnter = {() => setInHover1(true)}
                                onMouseLeave = {() => setInHover1(false)}
                            />

                        </a>
                        <div style={newsColor1}>
                            <Typography variant="subtitle1">WATCH AGAIN</Typography>
                        </div>
                        <div style={InHover1 ? newsColor1 : newsColor2} onMouseEnter = {() => setInHover3(true)} onMouseLeave = {() => setInHover3(false)}>
                            <Typography variant="subtitle2">Hansi Flick's press conference before the Bundesliga game at Borussia Dortmund</Typography>
                        </div>
                        <div style={{ color : "gray" }}>
                            <Typography variant="subtitle2">
                                On Friday, Hansi Flick held his pre-match press conference ahead of Saturday's Bundesliga Klassiker away at Borussia Dortmund.
                            </Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box p={0} style={{ padding: "20px" }}>
                        <a href="/">
                            <img src="https://i.esdrop.com/d/RQH1miIgI4.webp" width="100%" style={InHover2 ? hoverImgEnter : hoverImgLeave}
                                onMouseEnter = {() => setInHover2(true)}
                                onMouseLeave = {() => setInHover2(false)}
                            />
                        </a>
                        <div style={newsColor1}>
                            <Typography variant="subtitle1">FACTS AND FIGURES</Typography>
                        </div>
                        <div style={InHover2 ? newsColor1 : newsColor2} onMouseEnter = {() => setInHover2(true)} onMouseLeave = {() => setInHover2(false)}>
                            <Typography variant="subtitle2">7 facts on the top-of-the-table clash at Dortmund</Typography>
                        </div>
                        <div style={{ color : "gray" }}>
                            <Typography variant="subtitle2">
                            Brush up on the fact and stats ahead of the Bundesliga Klassiker between Borussia Dortmund and FC Bayern.
                            </Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box p={0} style={{ padding: "20px" }}>
                        <a href="/">
                            <img src="https://i.esdrop.com/d/oGTtZ8l4kP.webp" width="100%" style={InHover3 ? hoverImgEnter : hoverImgLeave}
                                onMouseEnter = {() => setInHover3(true)}
                                onMouseLeave = {() => setInHover3(false)}
                            />
                        </a>
                        <div style={newsColor1}>
                            <Typography variant="subtitle1">DOUBLE MATCH-WINNER</Typography>
                        </div>
                        <div style={InHover3 ? newsColor1 : newsColor2} onMouseEnter = {() => setInHover3(true)} onMouseLeave = {() => setInHover3(false)}>
                            <Typography variant="subtitle2">'Mentality monster' Kimmich in top form for next Klassiker</Typography>
                        </div>
                        <div style={{ color : "gray" }}>
                            <Typography variant="subtitle2">
                            Joshua Kimmich has scored the winning goal in the last two meetings with Borussia Dortmund, and arrives in top form once again.
                            </Typography>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default News

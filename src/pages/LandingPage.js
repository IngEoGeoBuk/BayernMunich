import React from 'react'
import { Grid, Box } from "@material-ui/core"

import Banner from '../components/Banner/Banner'
import Advertising from '../components/Advertising/Advertising'
import News from '../components/News/News'
import Honours from '../components/Honours/Honours'
import RecentMatch from '../components/RecentMatch/RecentMatch'
import LeftMain from '../components/LeftMain/LeftMain'
import RightMain from '../components/RightMain/RightMain'
import Footer from '../components/Footer/Footer'

function LandingPage() {

    return (
        <div>
            <Grid container spacing={1}>

                {/* Banner */}
                <Grid item xs={12}>
                    <div>
                        <Banner/>
                    </div>
                    <br></br>
                </Grid>

                {/* Main */}
                <Grid item xs={12} md={6}>
                    <Box>
                        <LeftMain/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <RightMain/>
                    </Box>
                </Grid>

                {/* RecentMatch */}
                <Grid item xs={12}>
                    <br></br>
                    <div p={0}>
                        <RecentMatch/>
                    </div>
                    <br></br>
                </Grid>

                {/* Advertising */}
                <Advertising/>

                {/* News */}
                <News/>

                {/* Honours */}
                <Honours/>
                
                {/* Footer */}
                <Grid item xs={12}>
                    <div p={48}>
                        <Footer/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage

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
            <Grid container spacing={0}>
            {/* spacing={1} 하면 공백생김...  */}
                {/* Banner */}
                <Grid item xs={12}>
                    <div>
                        <Banner/>
                    </div>
                    <br></br>
                </Grid>

                {/* Main */}
                <Grid item xs={12} md={6}>
                    <div>
                        <LeftMain/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <RightMain/>
                    </div>
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

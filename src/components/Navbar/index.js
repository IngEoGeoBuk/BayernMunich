import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavTop, Bars2, PcVer, MobileVer } from './NavbarElements';
import { Typography, Divider } from "@material-ui/core"
import FullScreenDialog from './Dialog'
import MenuListComposition from '../Navbar/Menu'

function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to = "/BayernMunich" style={{ paddingLeft:"10px", paddingRight:"40px"}}>
                    <img src = "https://i.esdrop.com/d/8gqkv7Kpzr.png" width="80em" height="80em" />
                    <PcVer>
                        <div style={{ color: "white", paddingLeft:"20px"}}>
                            <Typography variant="subtitle2">
                                OFFICIAL WEBSITE OF
                            </Typography>
                            <Typography variant="h6">
                                FC BAYERN MUNICH
                            </Typography>
                        </div>
                    </PcVer>

                    <MobileVer>
                        <div style={{ color: "white", paddingLeft:"10px"}}>
                            <Typography variant="h6">
                                FC BAYERN
                            </Typography>
                        </div>
                    </MobileVer>
                </NavLink>

                <Bars>
                    <FullScreenDialog/>
                </Bars>

                <PcVer>
                    <Bars2>
                        <div style={{ padding:"0px 10px", marginTop:"20px" }}>
                                presented by 
                            </div>
                        <div style={{ paddingTop:"10px" }}>
                            <img src = "https://i.esdrop.com/d/m2gOCQT7EE.svg" width="40px" height="40px"/>
                        </div>
                    </Bars2>
                </PcVer>
                
                <NavMenu>
                    <NavTop>
                        <div style={{ padding:"13px 10px", color:"lightgray" }}>
                            presented by 
                        </div>
                        <div>
                            <img src = "https://i.esdrop.com/d/m2gOCQT7EE.svg" width="50px" height="50px"/>
                        </div>
                    </NavTop>

                    <div style={{ display:"flex" }}>
                        <NavLink to ="/news" activeStyle>
                            <Typography variant="subtitle1">
                                News
                            </Typography>
                        </NavLink>
                        <NavLink to ="/tv" activeStyle>
                            <Typography variant="subtitle1">
                                FC Bayern.tv
                            </Typography>
                        </NavLink>
                        <NavLink to ="/teams" activeStyle>
                            <Typography variant="subtitle1">
                                Teams
                            </Typography>
                        </NavLink>
                        <NavLink to ="/matches" activeStyle>
                            <Typography variant="subtitle1">
                                Matches
                            </Typography>
                        </NavLink>
                        <NavLink to ="/club" activeStyle>
                            <Typography variant="subtitle1">
                                Club
                            </Typography>
                        </NavLink>
                        <NavLink to ="/fans" activeStyle>
                            <Typography variant="subtitle1">
                                Fans
                            </Typography>
                        </NavLink>

                        <div style={{marginLeft: "5vw"}}>
                            <MenuListComposition/>
                        </div>
                        <Divider orientation="vertical" flexItem  style={{ backgroundColor:"white" }} />
                        <NavBtnLink to ='/login'>
                            <Typography variant="subtitle1">
                                Log in
                            </Typography>
                        </NavBtnLink>
                    </div>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar

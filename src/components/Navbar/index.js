import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavTop, Bars2 } from './NavbarElements';
import { Typography, Divider } from "@material-ui/core"
import FullScreenDialog from './Dialog'
import MenuListComposition from '../Navbar/Menu'

function Navbar() {

    return (
        <div>

            <Nav>
                <NavLink to = "/"
                    style={{ paddingLeft:"10px", paddingRight:"40px"}}
                >
                    <img src = "https://i.esdrop.com/d/8gqkv7Kpzr.png" width="80px" height="80px"/>
                    <div style={{ color: "white", paddingLeft:"20px"}}>
                        <Typography variant="subtitle2">
                            OFFICIAL WEBSITE OF
                        </Typography>
                        <Typography variant="h6">
                            FC BAYERN MUNICH
                        </Typography>
                    </div>
                </NavLink>

                <Bars>
                    <FullScreenDialog/>
                </Bars>

                <Bars2>
                <div style={{ padding:"0px 10px", marginTop:"5px" }}>
                            presented by 
                        </div>
                        <div>
                            <img src = "https://i.esdrop.com/d/m2gOCQT7EE.svg" width="40px" height="40px"/>
                        </div>
                </Bars2>
                
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

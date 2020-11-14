import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: rgba(220, 5, 44);
  height: 100px;
  display: flex;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  padding: 5px
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: lightGray;
  }
`


export const Bars = styled.div`
  display: none;

  @media screen and (max-width: 1070px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-30%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const Bars2 = styled.div`
  display: none;

  @media screen and (max-width: 1070px) {
    display: flex;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(-10%, 40%);
    font-size: 1rem;
    cursor: pointer;
    color: lightgray
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: left;

  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (max-width: 1070px) {
    display: none;
  }
`

export const NavTop = styled.div`
  display: flex;
  align-items: left;
  // flex-wrap: wrap;
  flex-direction: row;
  color: lightgray;
  font-size: 13px;

  @media screen and (max-width: 1070px) {
    display: none;
  }
`


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5px;

  @media screen and (max-width: 1070px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: rgba(220, 5, 44);
  padding: 5px 15px;
  color: white;
  border: none;
  outline: none;
  corsor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  // 2nd Nav
  // margin-left: 5vw;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: lightgray;
  }
`

export const PcVer = styled.div`
    @media screen and (max-width: 600px) {
        display: none;
    }
  `
export const MobileVer = styled.div`
    display: none;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
        display: flex;
    }
  `

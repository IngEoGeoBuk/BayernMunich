import styled from 'styled-components'

export const PcVer = styled.div`
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const MobileVer = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: flex;
    }

`
import { device, size } from 'assets/queries';
import { COLORS } from 'assets/styles/styles';
import React from 'react';
import styled, { StyledFunction } from 'styled-components';


interface DrawerProps {
    open: boolean;
}

interface StyledProps {
    menuOpen: boolean;
}

const DrawerDiv = styled.div<StyledProps>`
    @media (max-width: ${size.tablet}) {
        background-color: ${COLORS.midBlue};
        position: fixed;
        top: 0px;
        right: 0px;
        width: min(75vw, 400px);
        height: 100vh;
        box-shadow: -10px 0px 30px -15px rgb(0,0,0, 0.2);
        transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
        visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
        transition: all 0.5s cubic-bezier(0.645,0.045,0.355,1);
    }
    @media ${device.tablet} {
        display: none;
    }
`;

export const Drawer: React.FC<DrawerProps> = ({ open, children }) => {
    return (
        <DrawerDiv menuOpen={open} >
            { children }
        </DrawerDiv>
    )
}

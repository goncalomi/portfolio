import React from 'react';
import { device } from 'assets/queries';
import { COLORS } from 'assets/styles/styles';
import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: none;

    @media ${device.laptop} {
        display: block;
        width: 40px;
        position: fixed;
        bottom: 0px;
        z-index: 10;
        color: ${COLORS.pale};
    }
`;
interface DivProps {
    orientation: 'left' | 'right';
}

export const SideDiv: React.FC<DivProps> = ({ orientation, children }) => {
    return (
        <StyledDiv
            style={
                orientation === 'left'
                ? {left: '40px'}
                : {right: '40px'}
            }
        >
            {children}
        </StyledDiv>
    )
}

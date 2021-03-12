import { device } from 'assets/queries';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import styled from 'styled-components';

export const MainDiv = styled.div`
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0px auto;
`;

export const Span = styled.span`
    color: ${COLORS.pale};
    font-size: clamp(26px,5vw, ${FONTSIZE.md2});
    font-weight: bold;
`;

export const Img = styled.img`
    @media ${device.mobile} {
        width: 70px;
    }
    @media ${device.tablet} {
        width: 120px;
    }
`;

export const Grid = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
    margin: 60px 0px;
    row-gap: 50px;
    
`;


import { device } from 'assets/queries';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import styled from 'styled-components';

export const MainDiv = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    @media ${device.mobile} {
        padding: 40px 0px;
    }
    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 400px;
    }
    @media ${device.laptop} {
        min-height: 0px;
        padding: 50px 0px;
    }
`;

export const ImageContainer = styled.div`
    
    @media ${device.mobile} {
        position: absolute;
        width: 100%;
        height: auto;
    }
    @media ${device.laptop} {
        position: relative;
        width: 60%;
        box-shadow: 0 20px 30px -15px rgb(0,0,0,0.2);
    }
`;

export const Img = styled.img`
    width: 100%;
    opacity: .7;
    border-radius: 5px;
    @media ${device.mobile} {
        opacity: .2;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 98.5%;
    background-color: rgb(245,161,91);
    border-radius: 5px;
    opacity: .3;
    &:hover {
        background-color: transparent;
    }
`;

export const ContentDiv = styled.div`

    @media ${device.mobile} {
        position: relative;
        z-index: 1;
        margin-top: 30px;
    }
    @media ${device.tablet} {
        margin-top: 0px;

    }
    @media ${device.laptop} {
        position: absolute;
        height: 85%;
        top: 50px;
        margin-right: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
`;

export const UL = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    padding: 0;
    
    font-family: Roboto Mono, monospace;
    font-size: ${FONTSIZE.xxs};
    @media ${device.mobile} {
        color: ${COLORS.pale};
    }
    @media ${device.laptop} {
        color: ${COLORS.lightBlue};
    }
`;

export const LI = styled.li`
    
`;

export const A = styled.a`
    text-decoration: none;
    color: ${COLORS.orange};
`;

export const Span = styled.span`
    color: ${COLORS.orange};
    font-size: ${FONTSIZE.xxs};
    font-family: Roboto Mono, monospace;
`;

export const H3 = styled.h3`
    margin: 0;
    color: ${COLORS.pale};
    font-size: clamp(24px, 5vw, 28px);
    font-weight: 900;
`;

export const P = styled.p`
    font-size: ${FONTSIZE.s};
    
    @media ${device.mobile} {
        color: ${COLORS.pale};
    }

    @media ${device.tablet} {
        margin-bottom: 30px;
        color: ${COLORS.pale};
    }
    @media ${device.laptop} {
        margin: 20px 0px;
        color: ${COLORS.lightBlue};
    }
`;

export const PContainer = styled.div`
    
    @media ${device.mobile} {
        width: 80%;
        margin-top: 10px;
    }
    @media ${device.laptop} {
        width: 60%;
        background-color: ${COLORS.midBlue};
        padding-right: 30px;
        padding-left: 30px;
        border-radius: 5px;
        box-shadow: 0 20px 30px -15px rgb(0,0,0,0.2);
        margin: 20px 0px;
    }
    @media ${device.desktop} {
        margin: 30px 0px;

    }

`;
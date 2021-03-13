import { device } from 'assets/queries';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import styled from 'styled-components';


export const Span = styled.span`
    color: ${COLORS.pale};
    font-size: clamp(26px,5vw, ${FONTSIZE.md2});
    position: relative;
    margin-bottom: 30px;
    font-weight: 900;
    :after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        height: 1px;
        left: 100%;
        margin-left: 20px;
        background-color: ${COLORS.midBlue};
        @media ${device.mobile} {
            width: 130px;
        }
        @media ${device.mobilelg} {
            width: 190px;
        }
        @media ${device.tablet} {
            width: 400px;
        }
        @media ${device.laptop} {
            width: 240px;
        }
        @media ${device.desktop} {
            width: 380px;
        }
    }
`;

export const P = styled.p`
    color: ${COLORS.lightBlue};
    font-size: ${FONTSIZE.sm};
    text-align: justify;
`;

export const UL = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
`;

export const Li = styled.li`
    padding: 5px 0;
    font-family: Roboto Mono, monospace;
    color: ${COLORS.lightBlue};
    font-size: ${FONTSIZE.xxs};
    :before {
        content: '＞';
        color: ${COLORS.orange};
        margin-right: 5px;
    }
`;


export const Img = styled.img`
    max-height: 100%;    
    border-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
`;

export const ImgWrapper = styled.div`
    height: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgb(255,164,91,0.35);
    opacity: 1;
    transition: opacity .5s ease;
    z-index: 2;    
    @media ${device.mobile} {
        width: 160px;
    }
    @media ${device.tablet} {
        width: 240px;
    }

`;

export const ImgBorder = styled.div`
    border-radius: 5px;
    border: 2px solid ${COLORS.orange};
    position: absolute;
    width: 100%;
    height: 98%;
    transition: all .3s ease-in-out;
    @media ${device.mobile} {
        width: 160px;
        top: 15px;
        left: 15px;
    }
    @media ${device.tablet} {
        width: 240px;
    }


`;

export const ImgContainer = styled.div`
    position: relative;
    transition: all .3s ease-in-out;
    @media ${device.mobile} {
        height: 200px;
        width: 160px;
    }
    @media ${device.tablet} {
        width: 240px;
        height: 300px;
    }
    

    ${ImgWrapper}:hover {
        opacity: 0;
    }

`;

export const AboutDiv = styled.div`
    display: flex;
    margin: 0px auto;
    max-width: 900px;
    align-items: center;
    @media ${device.mobile} {
        flex-direction: column;
        padding: 50px 0px;
    }
    @media ${device.tablet} {
        padding: 50px 50px;
    }
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-around;
        padding: 100px 30px;
    }
    ${ImgContainer}:hover {
        margin-bottom: 15px;
        margin-right: 10px;
    }
`;

export const ContentContainer = styled.div`
    text-align: left;
    @media ${device.mobile} {
        width: 100%;
    }
    @media ${device.laptop} {
        width: 60%;
    }
`;

export const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.mobile} {
        width: 100%;
        min-height: 300px;
        justify-content: center;
        align-items: center;
    }
    @media ${device.tablet} {
        width: 100%;
        min-height: 400px;
    }
    @media ${device.laptop} {
        width: 40%;
        align-items: flex-end;
    }
    @media ${device.desktop} {
        width: 40%;
        align-items: center;
    }

`;




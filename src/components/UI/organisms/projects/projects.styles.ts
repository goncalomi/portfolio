import { device } from 'assets/queries';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    margin: 0px auto;
    max-width: 1000px;
    text-align: left;
    @media ${device.mobile} {
        padding: 50px 0px;
    }
    @media ${device.tablet} {
        padding: 50px 50px;
    }
    @media ${device.laptop} {
        padding: 100px 0px;
    }
`;

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
            width: 150px;
        }
        @media ${device.mobilelg} {
            width: 210px;
        }        
        @media ${device.tablet} {
            width: 400px;
        }
        @media ${device.laptop} {
            width: 500px;
        }
        @media ${device.desktop} {
            width: 600px;
        }

    }
`;

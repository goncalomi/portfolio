import { device } from 'assets/queries';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import styled from 'styled-components';

export const ContactContainer = styled.div`
    padding: 100px 0px;
    max-width: 500px;
    margin: 0px auto;
    @media ${device.tablet} {
    }
    @media ${device.desktop} {
    }
`;

export const H2 = styled.h2`
    font-size: clamp(40px, 5vw, 60px);
    color: ${COLORS.pale};
    margin: 0;
`;

export const P = styled.p`
    font-size: ${FONTSIZE.sm};
    color: ${COLORS.lightBlue};
    margin: 30px 0;
`;
import styled from 'styled-components';
import { COLORS } from 'assets/styles/styles';
import { device } from 'assets/queries';

export const MainDiv = styled.div`
    background-color: ${COLORS.darkBlue};
    min-height: 100vh;
    max-width: 100v;
`;

export const Container = styled.main`
    @media ${device.mobile} {
        padding: 0px 25px;
    }
    @media ${device.tablet} {
        padding: 0px 50px;
    }
    @media ${device.laptop} {
        padding: 0px 150px;
    }
`;
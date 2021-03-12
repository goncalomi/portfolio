import styled from 'styled-components';
import { COLORS } from 'assets/styles/styles';
import { device } from 'assets/queries';
export const NavContainer = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 11;
    height: 100px;
    background-color: ${COLORS.darkBlue};
    backdrop-filter: blur(10px);
    transition: all .3s ease-in;
    @media ${device.mobile} {
        display: none;
        padding: 0px 25px;
    }
    @media ${device.tablet} {
        display: block;
        padding: 0px 40px;

    }
    @media ${device.laptop} {
        padding: 0 50px;

    }
`;
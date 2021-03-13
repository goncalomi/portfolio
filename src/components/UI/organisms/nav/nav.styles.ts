import styled from 'styled-components';
import { COLORS } from 'assets/styles/styles';
import { size, device } from 'assets/queries';
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
    backdrop-filter: blur(10px);
    transition: all .3s ease-in;
    @media ${device.mobile} {
        padding: 0px 25px;
    }
    @media ${device.tablet} {
        display: flex;
        padding: 0px 40px;
        background-color: ${COLORS.darkBlue};

    }
    @media ${device.laptop} {
        display: flex;
        padding: 0 50px;
        background-color: ${COLORS.darkBlue};

    }
`;

export const LinkContainer = styled.div`
    @media (max-width: ${size.tablet}) {
        display: none;
    }
`;

export const MobileLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
`;
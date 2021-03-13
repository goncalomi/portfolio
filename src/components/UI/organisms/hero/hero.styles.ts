import { COLORS } from 'assets/styles/styles';
import styled from 'styled-components';

export const HeroDiv = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 78vh;
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
`;

export const Span = styled.span`
    color: ${COLORS.pale};
    transition: all .1s ease;
    display: inline-block;
    &:hover {
        color: ${COLORS.orange};
        transform: translateY(-10px);
    }
`;
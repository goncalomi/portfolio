import styled from 'styled-components';
import { COLORS } from 'assets/styles/styles'

export const StyledButton = styled.a`
    background: none;
    border: 1px solid ${COLORS.orange};
    border-radius: 5px;
    outline: none;
    color: ${COLORS.orange};
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: rgb(255,164,91,0.15);
    }
`;
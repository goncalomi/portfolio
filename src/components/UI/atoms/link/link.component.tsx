import { COLORS } from 'assets/styles/styles';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { size } from 'assets/queries';
interface ItemProps {
    label: string;
    color: string;
    fontSize: string;
    handleClick?: () => void;
}


export const MenuLink: React.FC<ItemProps> = ({ label, color, fontSize, handleClick }) => {
    const link = label[0].toLocaleLowerCase() + label.slice(1);

    const Button = styled(Link)`
        text-decoration: none;
        color: ${color};
        font-size: ${fontSize};
        padding: 10px;
        margin: 0px 5px;
        cursor: pointer;
        &:hover {
            color: ${COLORS.orange};
        }
        @media (max-width: ${size.tablet}) {
            margin: 15px 0px;
        }
    `;


    return (
        <Button 
            to={link} 
            smooth={true}
            spy={true}
            onClick={handleClick}
        >
            { label } 
        </Button>
    )
}

import { COLORS } from 'assets/styles/styles';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
interface ItemProps {
    label: string;
    color: string;
    fontSize: string;
    
}


export const MenuLink: React.FC<ItemProps> = ({ label, color, fontSize }) => {
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
    `;


    return (
        <Button 
            to={link} 
            smooth={true}
            spy={true}
        >
            { label } 
        </Button>
    )
}

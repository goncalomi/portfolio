import React from 'react';
import { StyledButton } from './button.styles';
import { FONTSIZE } from 'assets/styles/styles';

interface ButtonProps {
    label: string;
    size: 'lg' | 'sm';
    style?: React.CSSProperties;
    mail?: boolean;
    link: string;
}

export const Button: React.FC<ButtonProps> = ({ label, size, style, link, mail }) => {

    return (
        <StyledButton
            style={{
                padding: size === 'lg' ? '1.25rem 1.75rem' : '0.75rem 1rem',
                fontSize:  size === 'lg' ? FONTSIZE.xxs : '11px',
                ...style
            }}
            href={
                mail ? `mailto:${link}` : link 
            }
            target={!mail ? '_blank' : undefined}
        >
            { label }
        </StyledButton>
    )
}

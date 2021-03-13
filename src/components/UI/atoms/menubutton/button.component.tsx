import { device, size } from 'assets/queries';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


interface ButtonProps {
    handleOpen: () => void;
    open: boolean;
}

const Button = styled.button`
    position: relative;
    background: none;
    outline: none;
    border: none;
    @media (max-width ${size.tablet}) {
        display: block;
    } @media ${device.tablet} {
        display: none;
    }
    z-index: 12;
`;

const StripeTop = styled.div`
    background: orange;
    border-radius: 2px;
    width: 35px;
    height: 2px;
    margin: 5px 0;
    border-collapse: collapse;
    transition: width .2s ease, transform .2s ease, margin .2s ease;
`;

const StripeBot = styled.div`
    background: orange;
    border-radius: 2px;
    width: 15px;
    height: 2px;    
    margin: 5px 0;
    float: right;
    transition: width .2s ease, transform .2s ease, margin .2s ease;
`;

export const MenuButton: React.FC<ButtonProps> = ({ handleOpen, open }) => {
    const topRef = useRef<HTMLDivElement>(null);
    const botRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ( !open ) {
            topRef.current!.style.transform = 'rotate(0deg)';
            botRef.current!.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                botRef.current!.style.position = 'static';
                botRef.current!.style.margin = '5px 0px';
                topRef.current!.style.margin = '5px 0px';    
                botRef.current!.style.width = '15px';

            }, 300);
        } else {
            botRef.current!.style.width = '35px';
            setTimeout(() => {
                botRef.current!.style.margin = '0px';
                topRef.current!.style.margin = '0px';
                botRef.current!.style.position = 'absolute';
                botRef.current!.style.top = '1px';
                botRef.current!.style.left = '6px';
                topRef.current!.style.transform = 'rotate(45deg)';
                botRef.current!.style.transform = 'rotate(-45deg)';
            }, 300);
        }
    }, [open])
    return (
        <Button onClick={handleOpen} >
            <StripeTop ref={topRef} />
            <StripeBot  ref={botRef} />
        </Button>
    )
}

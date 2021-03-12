import React from 'react';
import { NavContainer } from './nav.styles';
import logo from 'assets/img/logo.svg';
import { Link } from 'react-scroll';
import { MenuLink } from 'components';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import { Button } from 'components/UI/atoms';
import pdf from 'assets/cv.pdf';

export const Nav = React.forwardRef<HTMLElement>((props, ref) => {
    
    return (
        <NavContainer
            ref={ref}
        >
            <div>
                <Link to="hero" spy smooth style={{cursor: 'pointer'}} >
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div>
                <MenuLink label="About" color={COLORS.pale} fontSize='11px' />
                <MenuLink label="Projects" color={COLORS.pale} fontSize='11px' />
                <MenuLink label="Skills" color={COLORS.pale} fontSize='11px' />
                <MenuLink label="Contact" color={COLORS.pale} fontSize='11px' />
                <Button label="Resume" size="sm"  style={{margin: '0 5px'}} link={pdf} />
            </div>
        </NavContainer>
    )
})

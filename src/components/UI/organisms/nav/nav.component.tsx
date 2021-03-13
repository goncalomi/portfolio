import React, { useState } from 'react';
import { NavContainer, LinkContainer, MobileLinkContainer } from './nav.styles';
import logo from 'assets/img/logo.svg';
import { Link } from 'react-scroll';
import { MenuLink } from 'components';
import { COLORS, FONTSIZE } from 'assets/styles/styles';
import { Button, MenuButton, Drawer } from 'components';
import pdf from 'assets/cv.pdf';

export const Nav = React.forwardRef<HTMLElement>((props, ref) => {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
    } 

    return (
        <NavContainer
            ref={ref}
        >
            <div>
                <Link to="hero" spy smooth style={{cursor: 'pointer'}} >
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <LinkContainer>
                <MenuLink label="About" color={COLORS.pale} fontSize='11px' />
                <MenuLink label="Projects" color={COLORS.pale} fontSize='11px' />
                <MenuLink label="Skills" color={COLORS.pale} fontSize='11px' />
                <MenuLink label="Contact" color={COLORS.pale} fontSize='11px' />
                <Button label="Resume" size="sm"  style={{margin: '0 5px'}} link={pdf} />
            </LinkContainer>
            <MenuButton handleOpen={handleOpen} open={open} />
            <Drawer open={open} >
                <MobileLinkContainer>
                    <MenuLink handleClick={handleOpen} label="About" color={COLORS.pale} fontSize='20px' />
                    <MenuLink handleClick={handleOpen} label="Projects" color={COLORS.pale} fontSize='20px' />
                    <MenuLink handleClick={handleOpen} label="Skills" color={COLORS.pale} fontSize='20px' />
                    <MenuLink handleClick={handleOpen} label="Contact" color={COLORS.pale} fontSize='20px' />
                    <Button label="Resume" size="lg"  style={{margin: '30px 0px', width: '80px'}} link={pdf} />
                </MobileLinkContainer>
            </Drawer>
        </NavContainer>
    )
})

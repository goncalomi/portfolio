import React, { useEffect } from 'react';
import { About, Contact, Email, Footer, Hero, Nav, Projects, Skills, Social } from 'components/UI';
import { Container, MainDiv } from './home.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
    const nav = React.useRef<HTMLElement>(null);

    const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
        const wheelDown = 100;
        if ( e.deltaY === wheelDown ) {
            nav.current!.style.top = '-100px';
        } else {
            if ( window.scrollY < 250 ) {
                nav.current!.style.top = '0px';
                nav.current!.style.boxShadow = 'none';
            } else {
                nav.current!.style.backgroundColor = 'rgb(8,45,64,0.1)';
                nav.current!.style.top = '0px';
                nav.current!.style.boxShadow = '0 10px 30px -10px rgb(0,0,0,0.2)';
            }
        }

    }

    const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        // const wheelDown = 100;
        // const touchObj = e.changedTouches[0];
        // if ( true ) {
        //     nav.current!.style.top = '-100px';
        // } else {
        //     if ( window.scrollY < 250 ) {
        //         nav.current!.style.top = '0px';
        //         nav.current!.style.boxShadow = 'none';
        //     } else {
        //         nav.current!.style.backgroundColor = 'rgb(8,45,64,0.1)';
        //         nav.current!.style.top = '0px';
        //         nav.current!.style.boxShadow = '0 10px 30px -10px rgb(0,0,0,0.2)';
        //     }
        // }

    }

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    
    return (
        <MainDiv
            onWheel={(e) => handleScroll(e)}
            onTouchMove={(e) => handleTouch(e)}
        >
            <Nav ref={nav} />
            <Social />
            <Email />
            <Container>
                <Hero  />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </Container>
            
        </MainDiv>
    )
}

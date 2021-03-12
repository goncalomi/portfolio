import React from 'react';
import { AboutDiv, Span, P, UL, Li, Img, ImgContainer, ImgWrapper, ImgBorder, ContentContainer, PictureContainer } from './about.styles';
import Image from 'assets/img/self.jpg';


export const About = () => {
    const border = React.useRef<HTMLDivElement>(null);

    const handleScaleUp = () => {
        border.current!.style.top = '30px';
        border.current!.style.left = '25px';
    }
    const handleScaleDown = () => {
        border.current!.style.top = '10px';
        border.current!.style.left = '10px';
    }

    return (
        <AboutDiv 
            data-aos="fade-left" 
            data-aos-easing="ease-out-back"
            data-aos-duration="800"
            id="about" 
        >
            <ContentContainer>
                <Span>About Me</Span>
                <div>
                    <P>
                        Hello! I'm Gonçalo, a self-taught Programmer based in Porto, Portugal.
                    </P>
                    <P>
                        I’m passionate about programming, creating sollutions and devolping websites.
                    </P>
                    <P>
                        My journey started when I was trying to figure out a sollution for the company I was working for. Knowing that the problem could be easily fixed with technology, I began to learn programming and quickly felt in love by it!
                        Since then I dedicated almost all of my days to my new passion, learning new tecnhologies.
                    </P>
                    <P>
                        Here are a few technologies I've been working with recently:
                    </P>
                </div>
                <UL>
                    <Li>JavaScript</Li>
                    <Li>TypeScript</Li>
                    <Li>React</Li>
                    <Li>HMTL & CSS</Li>
                    <Li>Material UI</Li>
                    <Li>Firebase</Li>
                </UL>
            </ContentContainer>
            <PictureContainer>
                <ImgContainer  
                    onMouseEnter={handleScaleUp}
                    onMouseLeave={handleScaleDown}
                >
                    <ImgWrapper/>
                    <Img src={Image} alt="" />
                    <ImgBorder ref={border} />
                </ImgContainer>
            </PictureContainer>
        </AboutDiv>
    )
}

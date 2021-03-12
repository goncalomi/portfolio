import React from 'react';
import { Img, MainDiv, Span, Grid } from './skills.styles';
import Bootstrap from 'assets/img/skills/bootstrap.svg';
import Javascript from 'assets/img/skills/javascript.svg';
import TypeScript from 'assets/img/skills/typescript.svg';
import Reactsvg from 'assets/img/skills/react.svg';
import Firebase from 'assets/img/skills/firebase.svg';
import Python from 'assets/img/skills/python.svg';
import Django from 'assets/img/skills/django.svg';
import HTML from 'assets/img/skills/html.svg';
import CSS from 'assets/img/skills/css.svg';
import Material from 'assets/img/skills/material.svg';
import Git from 'assets/img/skills/git.svg';
import Figma from 'assets/img/skills/figma.svg';


export const Skills = () => {
    return (
        <MainDiv id="skills" >
            <Span>Skills</Span>
            <Grid>
                <Img data-aos="fade-right" data-aos-delay="500" src={Bootstrap} alt=""/>
                <Img data-aos="fade-up" data-aos-delay="500" src={Javascript} alt=""/>
                <Img data-aos="fade-left" data-aos-delay="500" src={TypeScript} alt=""/>
                <Img data-aos="fade-right" data-aos-delay="600" src={Reactsvg} alt=""/>
                <Img data-aos="fade-up" data-aos-delay="600" src={Firebase} alt=""/>
                <Img data-aos="fade-left" data-aos-delay="600" src={Python} alt=""/>
                <Img data-aos="fade-right" data-aos-delay="700" src={Django} alt=""/>
                <Img data-aos="fade-up" data-aos-delay="700" src={HTML} alt=""/>
                <Img data-aos="fade-left" data-aos-delay="700" src={CSS} alt=""/>
                <Img data-aos="fade-right" data-aos-delay="800" src={Material} alt=""/>
                <Img data-aos="fade-up" data-aos-delay="800" src={Git} alt=""/>
                <Img data-aos="fade-left" data-aos-delay="800" id="figma" src={Figma} alt=""/>
            </Grid>
        </MainDiv>
    )
}

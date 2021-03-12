import { A, ContentDiv, H3, ImageContainer, ImageWrapper, Img, LI, MainDiv, Span, UL, P, PContainer } from './project.styles';
import React from 'react';


interface ProjectProps {
    orientation: "left" | "right";
    title: string;
    description: string;
    skills: string[];
    image: string;
    link: string;
}

export const Project: React.FC<ProjectProps> = ({ orientation, title, description, skills, image, link }) => {
    const fade = orientation === 'right' ? 'fade-left' : 'fade-right';

    return (
        <MainDiv
            style={{
                alignItems: orientation === 'right' ? 'flex-start' : 'flex-end',
            }}
            data-aos={fade}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-delay="500"
        >
            <ImageContainer>
                <ImageWrapper />
                <Img src={image} alt="" width="100%" />
            </ImageContainer>
            <ContentDiv
                style={{
                    textAlign: orientation,
                    right: orientation === 'right' ? '0px' : undefined,
                    left: orientation === 'left' ? '0px' : undefined,
                    alignItems: orientation === 'right' ? 'flex-end' : 'start',
                    marginRight: orientation === 'right' ? '20px' : undefined,
                    marginLeft: orientation === 'left' ? '20px' : undefined,
                }}
            >
                <Span>Freelance Project</Span>
                <H3>{title}</H3>
                <PContainer
                    style={{
                        float: orientation
                    }}
                >
                    <P>
                        {description}
                    </P>
                </PContainer>
                <UL
                    style={{
                        justifyContent: orientation === 'right' ? 'flex-end' : 'flex-start'
                    }}
                >
                    {
                        skills.map((skill, index) => (
                            <LI 
                                key={index} 
                                style={
                                    orientation === 'right'
                                    ? {marginLeft: '20px'}
                                    : {marginRight: '20px'}
                                }
                            >
                                { skill }
                            </LI>
                        ))
                    }
                </UL>
                <A href={link}>Visit Page</A>
            </ContentDiv>
        </MainDiv>
    )
}

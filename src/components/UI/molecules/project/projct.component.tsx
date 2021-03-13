import { A, ContentDiv, H3, ImageContainer, ImageWrapper, Img, LI, MainDiv, Span, UL, P, PContainer } from './project.styles';
import React from 'react';
import { COLORS } from 'assets/styles/styles';


interface ProjectProps {
    orientation: "left" | "right";
    title: string;
    description: string;
    skills: string[];
    image: string;
    link: string;
}

export const Project: React.FC<ProjectProps> = ({ orientation, title, description, skills, image, link }) => {
    return (
        <MainDiv
            style={{
                alignItems: orientation === 'right' ? 'flex-start' : 'flex-end',
            }}
            data-aos="fade-up"
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
                    <p
                        style={{
                            color: COLORS.lightBlue
                        }}
                    >
                        Demo User: <span style={{color: COLORS.pale}} >testuser@gmail.com</span>
                    </p>
                    <p
                        style={{
                            color: COLORS.lightBlue
                        }}
                    >
                        Password: <span style={{color: COLORS.pale}} >testuser</span>

                    </p>
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
                <A target="_blank" href={link}>Visit Demo Page</A>
            </ContentDiv>
        </MainDiv>
    )
}

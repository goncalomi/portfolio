import { Project } from 'components/UI/molecules';
import React from 'react';
import { ProjectsContainer, Span } from './projects.styles';
import image1 from 'assets/img/web.png';
interface ProjectList {
    title: string;
    description: string;
    skills: string[];
    image: string;
    link: string;
}

const ProjectsList: ProjectList[] = [
    {
        title: 'Furia Booking',
        description: 'A custom real time Booking System for a local Wakepark. The Users can book runs and manage reservations.',
        skills: ['React', 'TypeScript', 'Firebase'],
        image: image1,
        link: "#"
    },
    {
        title: 'Furia Booking',
        description: 'A custom real time Booking System for a local Wakepark. The Users can book runs and manage reservations.',
        skills: ['React', 'TypeScript', 'Firebase'],
        image: image1,
        link: "#"
    },
]

export const Projects = () => {
    return (
        <ProjectsContainer 
            id="projects" 
            data-aos="fade-up"
        >
            <Span>
                Projects
            </Span>
            {
                ProjectsList.map((proj, index) => (
                    <Project 
                        orientation={index % 2 === 0 ? 'right' : 'left'}
                        key={index}
                        title={proj.title}
                        description={proj.description}
                        skills={proj.skills}
                        image={proj.image}
                        link={proj.link}
                    />
                ))
            }
        </ProjectsContainer>
    )
}

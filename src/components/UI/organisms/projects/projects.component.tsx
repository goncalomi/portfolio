import { Project } from 'components/UI/molecules';
import React from 'react';
import { ProjectsContainer, Span } from './projects.styles';
import image1 from 'assets/img/web.gif';
import image2 from 'assets/img/admin.gif';
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
        link: "https://furiaptapp.web.app/"
    },
    {
        title: 'Furia BackOffice',
        description: 'A custom Backoffice with integrated Content Manager and Point of Sale. Allows the company to manage and keep track of all the reservations, manage products and check sales and affluence statistics.',
        skills: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
        image: image2,
        link: "https://furiaptapp.web.app/furia-admin/dashboard"
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

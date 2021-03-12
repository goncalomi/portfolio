import { Button } from 'components/UI/atoms';
import React from 'react';
import { ContactContainer, H2, P } from './contact.styles';

export const Contact = () => {
    return (
        <ContactContainer id="contact" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000" >
            <H2>Contact</H2>
            <P>I would love to hear from you. Wether you're need more information, have a new project or a job opportunity or even if you just want to say Hi!! Feel free to contact me.
            </P>
            <div
                style={{
                    margin: '60px'
                }}
            >
                <Button label="Contact Me" size="lg" mail link="goncalombferreira@outlook.com" />
            </div>
        </ContactContainer>
    )
}

import { Button } from 'components/UI/atoms';
import React from 'react';
import { ContactContainer, H2, P } from './contact.styles';

export const Contact = () => {
    return (
        <ContactContainer id="contact" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000" >
            <H2>Contact</H2>
            <P>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
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

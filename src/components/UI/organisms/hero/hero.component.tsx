import { COLORS, FONTSIZE } from 'assets/styles/styles';
import { Button } from 'components/UI/atoms';
import React from 'react';
import { HeroDiv, Span } from './hero.styles';
// @ts-ignore
import Typical from 'react-typical';

export const Hero = () => {
    return (
        <HeroDiv id="hero" >
            <div
                style={{
                    marginBottom: '20px'
                }}
            >
                <span 
                    style={{ 
                        color: COLORS.orange,
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: FONTSIZE.xs,
                        margin: '0px 3px',
                    }}
                >
                    Hello! My name is
                </span>
            </div>
            <div
                style={{
                    textAlign: 'left'
                }}
            >
                <h2 
                    style={{ 
                        fontSize:'clamp(40px, 8vw, 80px)',
                        fontWeight: 'bold',
                        margin: '0px'
                    }}
                >
                    <Span>G</Span>
                    <Span>o</Span>
                    <Span>n</Span>
                    <Span>ç</Span>
                    <Span>a</Span>
                    <Span>l</Span>
                    <Span>o</Span>
                    {' '}
                    <Span>F</Span>
                    <Span>e</Span>
                    <Span>r</Span>
                    <Span>r</Span>
                    <Span>e</Span>
                    <Span>i</Span>
                    <Span>r</Span>
                    <Span>a</Span>
                    <Span>.</Span>
                </h2>
            </div>
            <div
                style={{
                    textAlign: 'left'
                }}
            >
                <span 
                    style={{ 
                        color: COLORS.lightBlue,
                        fontSize:'clamp(40px, 8vw, 80px)',
                        
                    }}
                >
                    
                    <Typical
                        wrapper="span"
                        steps={[
                            1000,
                            'I...',
                            2000,
                            'I create sollutions...',
                            1000,
                            'I develop things...',
                            1000,
                            'I build interactive websites.',
                        ]}
                    />
                </span>
            </div>
            <div
                style={{
                    maxWidth: '500px',
                    textAlign: 'left',
                    fontWeight: 'lighter',
                    marginTop: '20px'
                }}
            >
                <span 
                    style={{ 
                        color: COLORS.lightBlue,
                        fontSize: FONTSIZE.s,
                    }}
                >
                    Self-taught Programmer based in Porto, Portugal,  passionate about programming and creating sollutions.
                </span>
            </div>
            <Button label="Get In Touch" size="lg" style={{ marginTop: '50px' }} mail link="goncalombferreia@outlook.com" />
        </HeroDiv>
    )
}

import { COLORS } from 'assets/styles/styles';
import React from 'react';

export const Footer = () => {
    return (
        <div
            style={{
                fontSize: '10px',
                fontFamily: 'Roboto Mono, monospace',
                color: COLORS.lightBlue,
                padding: '30px 0px'
            }}
        >
            Designed by {' '}
                <a
                    href="//brittanychiang.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: COLORS.pale
                    }}
                >
                    Brittany Chiang
                </a>
            , Built by me.
        </div>
    )
}

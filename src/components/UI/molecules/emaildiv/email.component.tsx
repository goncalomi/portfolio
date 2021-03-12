import { COLORS, FONTSIZE } from 'assets/styles/styles';
import { SideDiv } from 'components/UI/atoms';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const A = styled.a`
    margin: 20px auto;
    padding: 10px;
    writing-mode: vertical-rl;
    text-decoration: none;
    color: ${COLORS.pale};
    font-size: 10px;
    transition: all .2s;
`;

const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    :after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: ${COLORS.pale};
    }
    ${A}:hover {
        color: ${COLORS.orange};
        margin-bottom: 23px;
    }
    `;

export const Email = () => {
    return (
        <SideDiv orientation="right" >
            <EmailDiv>
                <A 
                    href={`mailto:goncalombferreira@outlook.com`} 
                >
                    goncalombferreira@outlook.com
                </A>
            </EmailDiv>
        </SideDiv>
    )
}
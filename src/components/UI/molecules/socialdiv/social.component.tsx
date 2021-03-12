import { COLORS } from 'assets/styles/styles';
import { SideDiv } from 'components/UI/atoms';
import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const A = styled.a`
    padding: 10px;
`;

const GitHub = styled(GitHubIcon)`
    color: ${COLORS.pale};

`;

const LinkedIn = styled(LinkedInIcon)`
    color: ${COLORS.pale};
`;

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        margin-top: 12px;
        background-color: ${COLORS.pale};
    }
    ${GitHub}:hover, ${LinkedIn}:hover {
        color: orange;
        transition: all .2s;
        transform: scale(1.1);
        
    }
`;

export const Social = () => {
    return (
        <SideDiv orientation="left" >
            <SocialList>
                <A target="_blank" rel="noreferrer" href="//github.com/goncalomi">
                    <GitHub />
                </A>
                <A target="_blank" rel="noreferrer" href="//linkedin.com/in/goncalomi" >
                    <LinkedIn />
                </A>
                
            </SocialList>
        </SideDiv>
    )
}

import React from 'react'
import styled from 'styled-components'


function Login() {    
    
    return (
        <Container>
            <ContentAction>
                <CTLogo1 src="/images/cta-logo-one.svg" />
                <SignUp>GET STARTED</SignUp>
                <Description>
                    Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited.
                </Description>
                <CTLogo2 src="/images/cta-logo-two.png" />
            </ContentAction>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items:top;
    justify-content: center;
    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-Image: url("images/login-background.jpg");
        background-size:cover;
        background-position: top;
        background-repeat: no-repeat;
        content: "";
        z-index: -1;
        opacity: 0.6;
    }
`
const ContentAction = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display:flex;
    flex-direction:column;
    margin-top: 100px;
    align-items: center;
    
`

const CTLogo1 = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5 ;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9 ;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;

    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.2px;
    text-align: center;
    line-height: 1.5;
`

const CTLogo2 = styled.img`
    width: 90%;
`
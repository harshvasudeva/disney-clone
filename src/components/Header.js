import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/")
            }
        })
    }, [])
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/")
            })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut())
                navigate("/login")
            })
    }
    /*  */
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                !userName ? (
                    <LoginContain>
                        <Login onClick={signIn}>Login </Login>
                    </LoginContain>) :
                    <>
                        <NavMenu>
                            <a>
                                <img src="/images/home-icon.svg" />
                                <span>Home</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg" />
                                <span>Search</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg" />
                                <span>Watchlist</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg" />
                                <span>Originals</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.svg" />
                                <span>Movies</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.svg" />
                                <span>Series</span>
                            </a>
                        </NavMenu>
                        <UserImg onClick={signOut} src="https://c.tenor.com/OXua4v7_uSkAAAAC/profile-picture.gif" />
                    </>
            }



        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background: #131a28;
    display: flex;
    align-items: center;
    padding: 0 30px;
    overflow-x:hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items:center;

    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        
        img{
            height: 20px;
        }
        
        span{
            font-size: 13px;
            letter-spacing: 1.4px;
            position: relative;
            /* &:after adds a div like thing */
            &:after {
                content: "";
                height: 2px;
                background:white;
                position: absolute;
                left:0;
                right:0;
                bottom: -6px;
                opacity:0;
                transform: scaleX(0);
                transform-origin:left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
//position absolute works with a relative object hence position:relative


const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        border-color: #000;
        border-color: transparent;
    }
`

const LoginContain = styled.div`
    flex:1;
    display:flex;
    justify-content: flex-end;
`
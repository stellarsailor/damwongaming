import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components'
var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;

const NavigationPane = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MobileTab = styled.div`
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MobileOpenedPane = styled.div`
    width: 100%;
    background-color: rgba(10, 10, 10, 1);
    position: fixed;
    top: 60px;
    z-index: 10;
`

const MobileTabLine = styled.div`
    width: 100%;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(60, 60, 60, 1);
`

const MobileSides = styled.div`
    width: 50px;
    height: 50px;
    margin: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EachButton = styled.div`
    width: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`

export default function NavBar(props) {

    const [ viewMobilePane, setViewMobilePane ] = useState(false)

    return (
        <Row nogutter>
            <Visible xs sm>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <MobileTab>
                        <MobileSides></MobileSides>
                        <Link to="/" style={{ textDecoration: 'none' }}> 
                            <img src="/images/dwgLogoWhite.png" style={{width: 80}} onClick={() => setViewMobilePane(false)} />
                        </Link>
                        <MobileSides onClick={() => setViewMobilePane(!viewMobilePane)}>
                            <img src="/images/icon_hamburger.png" style={{width: 20, height: 20}} />
                        </MobileSides>
                    </MobileTab>
                    {
                        viewMobilePane && 
                        <MobileOpenedPane>
                            <Link to="/message" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    To. DWG
                                </MobileTabLine>
                            </Link>
                            <Link to="/fanart" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Fan Arts
                                </MobileTabLine>
                            </Link>
                            <Link to="/dadjoke" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Dad Joke
                                </MobileTabLine>
                            </Link>
                            <Link to="/article" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Articles
                                </MobileTabLine>
                            </Link>
                            <Link to="/highlight" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Worlds Highlights
                                </MobileTabLine>
                            </Link>
                        </MobileOpenedPane>
                    }
                </div>
            </Visible>
            <Visible md lg xl xxl>
                <NavigationPane>
                    <Link to="/" style={{ textDecoration: 'none' }}> <EachButton>Main</EachButton> </Link>
                    <Link to="/message" style={{ textDecoration: 'none' }}><EachButton >To. DWG</EachButton></Link>
                    <Link to="/fanart" style={{ textDecoration: 'none' }}><EachButton >Fan Arts</EachButton></Link>
                    <Link to="/dadjoke" style={{ textDecoration: 'none' }}><EachButton >Dad Joke</EachButton></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><EachButton >Articles</EachButton></Link>
                    <Link to="/highlight" style={{ textDecoration: 'none' }}><EachButton >Worlds Highlights</EachButton></Link>
                </NavigationPane>
            </Visible>
        </Row>
    )
}
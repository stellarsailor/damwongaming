import React from 'react'
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

export default function NavBar() {

    const handleScroll = ( scrollId ) => {
        scroller.scrollTo( scrollId, {
            duration: 1200,
            delay: 100,
            smooth: true,
            offset: -50, 
        })
    }

    return (
        <Row nogutter>
            <NavigationPane>
                <Visible xs sm>
                    mobile
                </Visible>
                <Visible md lg xl xxl>
                    <Link to="/" style={{ textDecoration: 'none' }}> <EachButton>Main</EachButton> </Link>
                    <EachButton onClick={() => handleScroll("s1")}>To. DWG</EachButton>
                    <EachButton onClick={() => handleScroll("s2")}>Fan Arts</EachButton>
                    <EachButton onClick={() => handleScroll("s3")}>Dad Joke</EachButton>
                    <EachButton onClick={() => handleScroll("s4")}>Articles</EachButton>
                    <EachButton onClick={() => handleScroll("s5")}>Worlds Highlights</EachButton>
                </Visible>
            </NavigationPane>
        </Row>
    )
}
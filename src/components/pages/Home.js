import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import TextBoxes from '../TextBoxes.js';
import FanArts from '../FanArts';
import Articles from '../Articles';
import Highlights from '../Highlights';
import MainTextBoxes from '../MainTextBoxes';
import DadJokeBoxes from '../DadJokeBoxes.js';
var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

const TabTitle = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: #42baea;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const TabViewMore = styled.span`
    font-size: 1.4rem;
    font-weight: 100;
    margin-left: 1rem;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const DownArrow = styled.div`
    position: fixed;
    bottom: 20px;
    z-index: 10;
    &:hover {
        cursor: pointer;
    }
`

export default function Home() {

    const [ scrollTargetNumber, setScrollTargetNumber ] = useState(0)

    useState(() => {
        window.scrollTo(0, 0)
    },[])

    const handleScroll = useCallback(() => {
        let arr = ['sc1', 'sc2', 'sc3', 'sc4', 'sc5']
        scroller.scrollTo( arr[scrollTargetNumber], {
            duration: 1200,
            delay: 100,
            smooth: true,
            offset: -50, 
        })
        setScrollTargetNumber(scrollTargetNumber + 1)
    },[scrollTargetNumber])
 
    return(
        <Row nogutter justify="center" style={{marginTop: 60}}>
            <DownArrow onClick={() => handleScroll()}>
                <img src="/images/icon_down.png" style={{width: 50, height: 50}} />
            </DownArrow>
            <Col sm={12} >
                <Fade bottom distance="100px">
                    <div style={{width: '100%', minHeight: window.innerWidth * 9/16 }}>
                        <img src="/images/maskedMain.jpg" style={{width: '100%', height: '100%', alignSelf: 'start'}} />
                    </div>
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc1" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        To. DWG <Link to="/message" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <MainTextBoxes />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc2" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Fan Art <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <FanArts />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc3" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Dad Jokes <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <DadJokeBoxes />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc4" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Articles <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <Articles />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc5" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Worlds Highlights <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <Highlights />
                </Fade>
            </Col>
        </Row>
    )
}
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import TextBoxes from '../components/TextBox.js';
import FanArts from '../components/FanArts';
import Articles from '../components/Articles';
import Highlights from '../components/Highlights';
import MainTextBoxes from '../components/MainTextBox';
import DadJokeBoxes from '../components/DadJokes.js';
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
    color: white;
    font-size: 1.2rem;
    font-weight: 100;
    margin-left: 6px;
    @media (max-width: 768px) {
        font-size: 1.1rem;
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
        let arr = ['sc1', 'sc2', 'sc3', 'sc4', 'sc5', 'sc0']
        scroller.scrollTo( arr[scrollTargetNumber], {
            duration: 1200,
            delay: 100,
            smooth: true,
            offset: -50, 
        })
        if(scrollTargetNumber === 5) setScrollTargetNumber(0)
        else setScrollTargetNumber(scrollTargetNumber + 1)
    },[scrollTargetNumber])
 
    return(
        <Row nogutter justify="center" style={{marginTop: 60}}>
            <Element name="sc0" />
            <DownArrow onClick={() => handleScroll()}>
                <img src="/images/icon_down.png" style={{width: 50, height: 50}} />
            </DownArrow>
            <Col sm={12} >
                <Fade bottom distance="100px">
                    <div style={{width: '100%', minHeight: window.innerWidth * 9/16 }}>
                        <img src="/images/maskedMain.png" style={{width: '100%', height: '100%', alignSelf: 'start'}} />
                    </div>
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc1" />
                <Fade bottom distance="100px">
                    <Link to="/message" style={{ textDecoration: 'none' }}>
                        <TabTitle>
                            To. DWG <TabViewMore>더 보기</TabViewMore>
                        </TabTitle>
                    </Link>
                    <MainTextBoxes />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc2" />
                <Fade bottom distance="100px">
                    <Link to="/fanart" style={{ textDecoration: 'none' }}>
                        <TabTitle>
                            <TabTitle>
                                Fan Art <TabViewMore>더 보기</TabViewMore>
                            </TabTitle>
                        </TabTitle>
                    </Link>
                    <FanArts />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc3" />
                <Fade bottom distance="100px">
                    <Link to="/dadjoke" style={{ textDecoration: 'none' }}>
                        <TabTitle>
                            Dad Joke <TabViewMore>더 보기</TabViewMore>
                        </TabTitle>
                    </Link>
                    <DadJokeBoxes forMain />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc4" />
                <Fade bottom distance="100px">
                    <Link to="/article" style={{ textDecoration: 'none' }}>
                        <TabTitle>
                            Article <TabViewMore>더 보기</TabViewMore>
                        </TabTitle>
                    </Link>
                    <Articles forMain />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="sc5" />
                <Fade bottom distance="100px">
                    <Link to="/highlight" style={{ textDecoration: 'none' }}>
                        <TabTitle>
                            Worlds Highlights  <TabViewMore>더 보기</TabViewMore>
                        </TabTitle>
                    </Link>
                    <Highlights forMain />
                </Fade>
            </Col>
        </Row>
    )
}
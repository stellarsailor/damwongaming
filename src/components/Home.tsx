import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import TextBoxes from './TextBoxes';
import FanArts from './FanArts';
import Articles from './Articles';
import Highlights from './Highlights';
var Scroll   = require('react-scroll');
var Element  = Scroll.Element;

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
        font-size: 0.8rem;
    }
`

export default function Home() {
    return(
        <Row nogutter justify="center">
            <Col sm={12} >
            <Fade bottom distance="100px">
                <div style={{width: '100%', minHeight: 1200}}>
                    <img src="/images/maskedMain.jpg" style={{width: '100%', height: '100%', alignSelf: 'start'}} />
                </div>
            </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="s1" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        To. DWG <Link to="/message" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <TextBoxes />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="s2" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Fan Art <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <FanArts />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="s3" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Dad Jokes <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <TextBoxes />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="s4" />
                <Fade bottom distance="100px">
                    <TabTitle>
                        Articles <Link to="/" style={{ textDecoration: 'none' }}><TabViewMore>전체보기</TabViewMore></Link>
                    </TabTitle>
                    <Articles />
                </Fade>
            </Col>
            <Col sm={12} md={8} >
                <Element name="s5" />
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
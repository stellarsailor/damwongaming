import React, { useEffect } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import FanArts from '../components/FanArts.js';
import styled from 'styled-components'
import { fanArtImages } from '../datas/fanArtImages';
import Fade from 'react-reveal/Fade';

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

const NumberingText = styled.span`
    color: white;
    font-size: 16px;
`

export default function DadJoke(props) {

    const { championCode } = props 

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return(
        <Row nogutter justify="center" style={{marginTop: 60,}}>
            <Col sm={12} md={8}>
                <TabTitle>
                    Fan Arts <NumberingText>(총 {fanArtImages.length}개의 팬아트 
                    { championCode === 1 ? <a href="https://imgur.com/6hKc5wK" target="_blank" style={{color: 'dodgerblue'}}> + 비공개 1개</a> : ''})</NumberingText>
                </TabTitle>
                <div style={{zIndex: 20}}>
                    <FanArts championCode={championCode} />
                </div>
            </Col>
        </Row>
    )
}
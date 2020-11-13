import React, { useEffect } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import DadJokeBoxes from '../components/DadJokes.js';
import styled from 'styled-components'
import { dadJokes } from '../datas/dadJokes';
import Fade from 'react-reveal/Fade';
import Highlights from '../components/Highlights.js';

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

export default function Highlight() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return(
        <Row nogutter justify="center" style={{marginTop: 60}}>
            <Col sm={12} md={8} >
                <TabTitle>
                    Worlds Highlight
                </TabTitle>
                <Highlights />
            </Col>
        </Row>
    )
}
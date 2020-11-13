import React, { useEffect } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import TextBoxes from '../components/TextBox.js';
import styled from 'styled-components'
import { messages, secretMessages } from '../datas/messages';
import Fade from 'react-reveal/Fade';
import BackTop from '../components/BackTop.js';

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

export default function Message(props) {

    const { championCode } = props 

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return(
        <Row nogutter justify="center" style={{marginTop: 60}}>
            <Col sm={12} md={8} >
                <TabTitle>
                    To. DWG <span style={{color: 'white', fontSize: 16}}>(총 {messages.length} {championCode === 1 ? `+ ${secretMessages.length}` : '' }개의 메세지)</span>
                </TabTitle>
                <TextBoxes arrayToRender={messages} />
                { championCode === 1 && <TextBoxes arrayToRender={secretMessages} secret />}
            </Col>
        </Row>
    )
}
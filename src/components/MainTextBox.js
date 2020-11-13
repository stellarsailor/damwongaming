import React, { useEffect, useState } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { messages } from '../datas/messages'
import styled from 'styled-components'
import shuffleArray from '../logics/shuffleArray';
import pickRandomElements from '../logics/pickRandomElements'
import truncateLongString from '../logics/truncateLongString';

const TextBox = styled.div`
    width: 100%;
    height: 200px;
    min-height: 200px;
    background-color: #2c2b2f;
    border: 1px solid #5f5f5f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const NumberCount = styled.div`
    font-style: italic;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.5);
`

export default function MainTextBox(props) {

    const [ mainRandomMessage, setMainRandomMessage ] = useState([])

    useEffect(() => {
        setMainRandomMessage(pickRandomElements(messages, 8))
    },[])

    return (
        <Row nogutter>
            {mainRandomMessage.map( (v, index) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={3} style={{padding: 8}} key={index}>
                            <TextBox>
                                <div style={{padding: 24}}>
                                    {truncateLongString(v, 100)} 
                                </div>
                            </TextBox>
                        </Col>
                    )
                })}
        </Row>
    )
}
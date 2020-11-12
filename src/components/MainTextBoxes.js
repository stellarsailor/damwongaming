import React, { useEffect } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { messages } from '../datas/messages'
import styled from 'styled-components'

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

export default function MainTextBoxes(props) {

    return (
        <Row nogutter>
            {messages.slice(0, 8).map( (v, index) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={3} style={{padding: 8}}>
                            <TextBox>
                                <div style={{padding: 24}}>
                                    {v} 
                                </div>
                            </TextBox>
                        </Col>
                    )
                })}
        </Row>
    )
}
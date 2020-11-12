import React, { useEffect } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { messages } from '../datas/messages'
import styled from 'styled-components'

const TextBox = styled.div`
    width: 100%;
    height: auto; //250px;
    min-height: 200px;
    background-color: #2c2b2f;
    border: 1px solid #5f5f5f;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const NumberCount = styled.div`
    font-style: italic;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.5);
`

export default function TextBoxes(props) {

    return (
        <Row nogutter>
            {messages.map( (v, index) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={6} style={{padding: 8}}>
                            <TextBox>
                                <div style={{padding: '8px 16px 24px 16px'}}>
                                    <NumberCount>
                                        #{index + 1}
                                    </NumberCount>
                                    {v}
                                </div>
                            </TextBox>
                        </Col>
                    )
                })}
        </Row>
    )
}
import React from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { messages } from '../datas/messages'
import styled from 'styled-components'

const TextBox = styled.div`
    width: 100%;
    height: 300px;
    background-color: #2c2b2f;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export default function TextBoxes() {

    let cut = messages.slice(0, 8)

    return (
        <Row nogutter>
            {cut.map( (v, index) => {
                    return(
                        <Col sm={6} md={6} lg={6} xl={3} style={{padding: 8}}>
                            <TextBox>
                                <div style={{padding: 16}}>
                                    {v}
                                </div>
                            </TextBox>
                        </Col>
                    )
                })}
        </Row>
    )
}
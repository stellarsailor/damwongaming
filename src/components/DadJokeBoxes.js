import React, { useEffect } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { dadJokes } from '../datas/dadJokes'
import styled from 'styled-components'

const TextBox = styled.div`
    width: 100%;
    height: auto; //250px;
    min-height: 100px;
    background-color: #2c2b2f;
    border: 1px solid #5f5f5f;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export default function DadJokeBoxes(props) {

    return (
        <Row nogutter>
            {dadJokes.map( (v, index) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={6} style={{padding: 8}}>
                            <TextBox>
                                <div style={{padding: '8px 16px 24px 16px'}}>
                                    <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>
                                        {v.question}
                                    </div>
                                    <div>
                                        {v.answer}
                                    </div>
                                </div>
                            </TextBox>
                        </Col>
                    )
                })}
        </Row>
    )
}
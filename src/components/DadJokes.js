import React, { useState } from 'react'
import { Row, Col } from 'react-grid-system';
import { dadJokes } from '../datas/dadJokes'
import styled from 'styled-components'
import pickRandomElements from '../logics/pickRandomElements';

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

export default function DadJokes(props) {

    const { forMain } = props

    const [ arrayToRender, setArrayToRender ] = useState(forMain ? pickRandomElements(dadJokes, 6) : dadJokes)

    return (
        <Row nogutter>
            {arrayToRender.map( (v, index) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={6} style={{padding: 8, display: 'flex', justifyContent: 'center'}} key={index}>
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
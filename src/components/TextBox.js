import React from 'react'
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components'

const TextBox = styled.div`
    width: 100%;
    height: auto; //250px;
    min-height: 150px;
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

    const { arrayToRender, secret } = props

    return (
        <Row nogutter>
            {arrayToRender.map( (v, index) => {
                return(
                    <Col sm={12} md={6} lg={6} xl={6} style={{padding: 8, display: 'flex', justifyContent: 'center'}} key={index}>
                        <TextBox>
                            <div style={{padding: '8px 16px 24px 16px'}}>
                                <NumberCount>
                                    #{index + 1} { secret && <span style={{fontSize: '1rem'}}>비공개 메세지</span>}
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
import React from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { messages } from '../datas/messages'
import styled from 'styled-components'

const Pane = styled.div`
    width: 100%;
    background-color: #2c2b2f;
`

const Image = styled.div`
    width: 100%;
    height: 150px;
    background-image: url("https://specials-images.forbesimg.com/imageserve/5f9d71904626cf8b1dff7961/960x0.jpg?fit=scale");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const CardContent = styled.div`
    padding: 1rem;
    color: white;
    font-size: 1.2rem;
`

const CardTitle = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: white;
    margin-top: 1rem;
    margin-bottom: 2rem;
`

export default function Articles (){

    return (
        <Row nogutter>
            <Col md={12} lg={6} xl={4} style={{padding: 8}}>
                <Pane>
                    <Image />
                    <CardContent>
                        <CardTitle>
                            제목이 들어가는 부분
                        </CardTitle>
                        내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분
                    </CardContent>
                </Pane>
            </Col>
            <Col md={12} lg={6} xl={4} style={{padding: 8}}>
                <Pane>
                    <Image />
                    <CardContent>
                        <CardTitle>
                            제목이 들어가는 부분
                        </CardTitle>
                        내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분
                    </CardContent>
                </Pane>
            </Col>
            <Col md={12} lg={6} xl={4} style={{padding: 8}}>
                <Pane>
                    <Image />
                    <CardContent>
                        <CardTitle>
                            제목이 들어가는 부분
                        </CardTitle>
                        내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분내용이 들어가는 부분
                    </CardContent>
                </Pane>
            </Col>
        </Row>
    )
}
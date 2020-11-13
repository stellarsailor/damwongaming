import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { articles } from '../datas/articles'
import styled from 'styled-components'
import pickRandomElements from '../logics/pickRandomElements';
import truncateLongString from '../logics/truncateLongString';

const Pane = styled.div`
    width: 100%;
    min-height: 300px;
    background-color: #2c2b2f;
`

const Image = styled.div`
    width: 100%;
    height: 150px;
    background-image: ${props => `url(${props.imgUrl})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: gray;
`

const CardContent = styled.div`
    padding: 1rem;
    min-height: 200px;
    color: white;
    font-size: 12;
`

const CardTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
    min-height: 50px;
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const CardComments = styled.div`
    border-top: '1px solid gray';
    padding: 10px;
`

export default function Articles (props){

    const { forMain } = props

    const [ arrayToRender, setArrayToRender ] = useState(forMain ? pickRandomElements(articles, 3) : articles)

    return (
        <Row nogutter>
            {arrayToRender.map( (v, index) => (
                <Col md={12} lg={6} xl={4} style={{padding: 8}} key={index}>
                    <Pane>
                        <Image imgUrl={v.imgUrl} />
                        <CardContent>
                            <CardTitle>
                                {v.title} <a href={v.url} target="_blank" style={{textDecoration: 'none', color: '#87ceeb', fontSize: 12, marginLeft: 4}}> 기사 링크 </a>
                            </CardTitle>
                            { forMain ?
                                <Link to="/article" style={{textDecoration: 'none'}}>
                                    <div>
                                        {truncateLongString(v.comments[0], 80)}
                                    </div>
                                </Link>
                                :
                                v.comments.map( (v, index) => (
                                    <div style={{borderTop: '1px solid gray', padding: 10}} key={index}>
                                        {v}
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Pane>
                </Col>
            ))}
        </Row>
    )
}
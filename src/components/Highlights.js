import React, { useState } from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components'
import { highlights } from '../datas/highlights'
import getRandomColor from '../logics/getRandomColor';
import pickRandomElements from '../logics/pickRandomElements';

const TextByVideo = styled.div`
    padding: 3rem;
`

const RankTab = styled.div`
    width: 100%;
    background-color: black;
    font-size: 20px;
    font-style: italic;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const CircleLogo = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3e3e3e;
`

const TitleText = styled.div`
    margin-left: 16px;
    margin-top: 16px;
    min-height: 60px;
    color: white;
    font-size: 1.6rem;
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`

const DescText = styled.div`
    color: black;
    font-weight: 400;
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export default function Highlights(props){

    const { forMain } = props

    const [ arrayToRender, setArrayToRender ] = useState(forMain ? pickRandomElements(highlights, 1) : highlights)

    return (
        <>
            {
                arrayToRender.map( (v, index) => (
                    <Row nogutter style={{marginBottom: 32}} key={index}>
                        <Col md={12} lg={6} xl={6} style={{padding: 0}}>   
                            <RankTab>#담붕이들이 뽑은 경기 {v.rank + 1}위</RankTab>
                            <a href={`https://www.youtube.com/watch?v=${v.youtubeKey}`} target="_blank"><img src={`https://img.youtube.com/vi/${v.youtubeKey}/hqdefault.jpg`} style={{width: '100%'}} /></a>
                            <div style={{display: 'flex', flexDirection: 'row', paddingLeft: 16}}>
                                <CircleLogo>
                                    <img src="/images/dwgLogoWhite.png" style={{width: 50}} />
                                </CircleLogo>
                                <TitleText>
                                    {v.title}
                                </TitleText>
                            </div>
                        </Col>
                        <Col md={12} lg={6} xl={6} style={{padding: 16, backgroundColor: '#f0f0f0'}}>
                            {
                                v.comments.map( (comment, index) => (
                                <DescText key={index}> 
                                    <span style={{color: getRandomColor(), fontWeight: 'bold'}}>담붕이{Math.round(Math.random() * 100)} : </span>{comment}
                                </DescText>
                                ))
                            }
                        </Col>
                    </Row>
                ))
            }
        </>
    )
}
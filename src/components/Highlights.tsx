import React from 'react'
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components'

const TextByVideo = styled.div`
    
    padding: 3rem;
`

const TitleText = styled.div`
    font-size: 2rem;
    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`

const DescText = styled.div`
    font-size: 1.4rem;
    white-space: normal;
    overflow: hidden;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export default function Highlights(){

    return (
        <Row nogutter>
            <Col md={12} lg={6} xl={6} style={{padding: 0, backgroundColor: 'black'}}>   
                <img src="https://img.youtube.com/vi/hW5Oynun2Vw/hqdefault.jpg" style={{width: '100%'}} />
            </Col>
            <Col md={12} lg={6} xl={6} style={{padding: 16, backgroundColor: 'black'}}>
                <TitleText>
                    DWG vs SN Finals Game 3
                </TitleText>
                <DescText>
                    sadasdasdadssadasdasdasdsadasdsaasdadsasdadss adasdasdadssadasdasdadssadasdasdadssadas dasdadssadasdasdadssadasdasdadssa dasdasdadssadasdasdadssadasdasdads
                </DescText>
            </Col>
            <Col md={12} lg={6} xl={6} style={{padding: 0, backgroundColor: 'black'}}>   
                <img src="https://img.youtube.com/vi/hW5Oynun2Vw/hqdefault.jpg" style={{width: '100%'}} />
            </Col>
            <Col md={12} lg={6} xl={6} style={{padding: 16, backgroundColor: 'black'}}>
                <TitleText>
                    DWG vs SN Finals Game 3
                </TitleText>
                <DescText>
                    sadasdasdadssadasdasdasdsadasdsaasdadsasdadss adasdasdadssadasdasdadssadasdasdadssadas dasdadssadasdasdadssadasdasdadssa dasdasdadssadasdasdadssadasdasdads
                </DescText>
            </Col>
        </Row>
    )
}
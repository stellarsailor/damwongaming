import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;

const GoToTopButton = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 3%;
    bottom: 3%;
    z-index: 30;
    &:hover {
        cursor: pointer;
    }
`

export default function BackTop() {

    const [ scrollPosition, setScrollPosition ] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const goToTop = () => scroller.scrollTo('top', {
        duration: 1200,
        delay: 100,
        smooth: true,
        offset: -50, 
    })

    if(scrollPosition > 250){
        return (
            <GoToTopButton onClick={() => goToTop()}>
                <img src="/images/icon_top.png" style={{width: 30, height: 30}} />
            </GoToTopButton>
        )
    } else {
        return(
            <></>
        )
    }
}
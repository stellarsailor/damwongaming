import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Message from './pages/Message.js';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import * as qs from 'query-string';
import DadJoke from './pages/DadJoke';
import Article from './pages/Article';
import FanArt from './pages/FanArt';
import Highlight from './pages/Highlight';
import BackTop from './components/BackTop';

var Scroll   = require('react-scroll');
var Element  = Scroll.Element;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

function App(props) {

  const [ loadingIntro, setLoadingIntro ] = useState(true)
  const [ championCode, setChampionCode ] = useState(0)

  useEffect(() => {
    const parsed = qs.parse(window.location.search);
    if(parsed.champion === '201031dwg'){
      // ?c=201031dwg
      setChampionCode(1);
      console.log('champion')
    } else {
      console.log('no code')
      setChampionCode(0)
    }

    setTimeout(() => {
      setLoadingIntro(false);
    }, 2000);
  },[])

  return (
    <Container fluid style={{ padding: 0, height: '100vh'}}>
      {
        loadingIntro ?
        <Centered>
          <Fade bottom distance="100px">
            <img src="/images/dwgLogoWhite.png" style={{width: 300, margin: '5rem'}} />
          </Fade>
        </Centered>
        :
        <Router>
          <Element name="top" />
          <NavBar />
          <BackTop />
          <Switch>
            <Route path="/message">
              <Message championCode={championCode} />
            </Route>
            <Route path="/fanart">
              <FanArt championCode={championCode} />
            </Route>
            <Route path="/dadjoke">
              <DadJoke championCode={championCode} />
            </Route>
            <Route path="/article">
              <Article championCode={championCode} />
            </Route>
            <Route path="/highlight">
              <Highlight championCode={championCode} />
            </Route>
            <Route path="/">
              <Home championCode={championCode} />
            </Route>
          </Switch>
        </Router>
      }
    </Container>
  );
}

export default App;

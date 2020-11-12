import React from 'react'
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Message from './components/pages/Message.js';
import { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import styled from 'styled-components'
import * as qs from 'query-string';
import DadJoke from './components/pages/DadJoke';
import Article from './components/pages/Article';
import FanArt from './components/pages/FanArt';
import Highlight from './components/pages/Highlight';

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

function App(props) {

  const [ loadingIntro, setLoadingIntro ] = useState(true)
  const [ championCode, setChampionCode ] = useState(false)

  useEffect(() => {
    const parsed = qs.parse(window.location.search);
    if(parsed.c === '201031'){
      // ?c=201031dwg
      setChampionCode(true);
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
          <Flip top duration="2000" distance="100px">
            <img src="/images/dwgLogoWhite.png" style={{width: 300, margin: '5rem'}} />
          </Flip>
        </Centered>
        :
        <div style={{minHeight: 5000}}>
          <Router>
            <NavBar />
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
        </div>
      }
    </Container>
  );
}

export default App;

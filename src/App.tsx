import React from 'react'
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Message from './components/Message';
import { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import styled from 'styled-components'

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

function App() {

  const [ loadingIntro, setLoadingIntro ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingIntro(false)
    }, 3500);
  },[])

  return (
    <Container fluid style={{ padding: 0, height: '100vh'}}>
        {
          loadingIntro ?
          <Centered>
            <Flip top duration="2000" distance="100px">
              <img src="/images/dwgLogo.png" style={{width: 300, margin: '5rem'}} />
            </Flip>
          </Centered>
          :
          <div style={{minHeight: 5000}}>
            <Router>
              <Switch>
                <Route path="/message">
                  <Message />
                </Route>
                <Route path="/">
                  <NavBar />
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        }
      </Container>
  );
}

export default App;

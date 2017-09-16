import React, { Component } from 'react';
import styled from 'styled-components';
import DeathCounter from './DeathCounter';
import StreamChat from './StreamChat';
import heroImg from './img/hero.jpg';

const Container = styled.main`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Hero = styled.div`
  height: 400px;
  width: 100%;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
`;

const Main = styled.section`
  flex: 0 1 75%;
`;

const Sidebar = styled.aside`
  background-color: rgba(0,0,0,.2);
  height: 100%;
  flex: 0 1 25%;
`;


class App extends Component {
  render() {
    return (
      <Container>
        <Main>
          <Hero/>
          <DeathCounter/>
        </Main>
        <Sidebar> 
          <StreamChat/>
        </Sidebar>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from './styles/breakpoints';
import Header from './Header';
import DeathCounter from './DeathCounter';
import StreamChat from './StreamChat';
import heroImg from './img/hero.jpg';

const Container = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding 0;

  ${media.tablet`
      padding: 25px 0;
  `};
`;

const Main = styled.main`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Hero = styled.img`
  width: 100%;
`;

const Section = styled.section`
  flex: 1 1 100%;
  background-color: rgba(0, 0, 0, .9);
  display: flex;
  flex-direction: column;

  ${media.desktop`
      flex: 1;
  `};
`;

const Banner = styled.img`
  width: 100%;
`;

const Sidebar = styled.aside`
  background-color: rgba(0,0,0,.2);
  height: auto;
  flex: 1 1 100%;

  ${media.desktop`
      flex: 0 1 auto;
      height: 100%;
  `};
`;


class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Main>
          <Section>
            <Hero src={heroImg}/>
            <DeathCounter/>
          </Section>
          <Sidebar> 
            <StreamChat/>
          </Sidebar>
        </Main>
      </Container>
    );
  }
}

export default App;

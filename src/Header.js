import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from './styles/breakpoints';
import logo from './img/logo.png';
import twitch from './img/twitch.svg';

const Header = styled.header`
  display: none;
  justify-content: space-between;
  flex: 0 1 auto;
  box-sizing: border-box;
  margin-top: 15px;
  
  ${media.tablet`
      display: flex;
      height: 75px;
      padding: 15px;
  `};

  ${media.desktop`
      height: 100px;
      padding: 0 15px 15px;
  `};
`;

const HeaderLink = styled.a`
  height: 100%;
`;

const HeaderImg = styled.img`
  flex: 0 1 auto;
  height: 100%;
`;


class App extends Component {
  render() {
    return (
      <Header>
        <HeaderLink href='http://www.divinity.game/' target='_blank'>
          <HeaderImg src={logo} alt='Divinity: Original Sin II'/>
        </HeaderLink>
        <HeaderLink href='https://www.twitch.tv/funkrenegade' target='_blank'>
          <HeaderImg src={twitch} alt="Twitch" />
        </HeaderLink>
      </Header>
    );
  }
}

export default App;

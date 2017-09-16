import React, { Component } from 'react';
import styled from 'styled-components';
import DeathCounter from './DeathCounter';

const View = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  width: 100%;
`;


class App extends Component {
  render() {
    return (
      <View>
        <Container>
          <h2>Divinity: Original Sin 2</h2>
          <DeathCounter/>
        </Container>
      </View>
    );
  }
}

export default App;

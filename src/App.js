import React, { Component } from 'react';
//components
import Header from './components/Header/Header';
import Layout from './components/Styled-components/Layout';
//containers

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header />
        </Layout>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header/Header';
import Layout from './components/Styled-components/Layout';

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

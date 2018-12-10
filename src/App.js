import React, { Component } from 'react';
import Header from './containers/Header/Header';
import Layout from './containers/Styled-components/Layout';

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

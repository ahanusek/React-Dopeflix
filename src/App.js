import React, { Component } from 'react';
import Layout from './components/Globalstyles/Layout';

//components
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header />
          <Main />
        </Layout>
      </>
    );
  }
}

export default App;

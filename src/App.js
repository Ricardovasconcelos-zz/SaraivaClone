import React, { Component } from 'react';

import Main from './pages/Main'
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
        <Main/>
      </div>
    )
  }
}
export default App

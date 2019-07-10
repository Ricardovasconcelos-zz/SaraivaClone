import React, { Component } from 'react';

import Main from './pages/Main'
import Header from './components/Header/Header';
import CarouselComponent from './components/Carousel/CarouselComponent'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
       <CarouselComponent/>
        <Main/>
        
      </div>
    )
  }
}
export default App

import React, { Component } from 'react';

import Main from './pages/Main'
import Header from './components/Header/Header';
import CarouselComponent from './components/Carousel/CarouselComponent'
import MoreRead from './components/moreRead/MoreRead';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
       <CarouselComponent/>
       <MoreRead/>
        
      </div>
    )
  }
}
export default App

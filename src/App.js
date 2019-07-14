import React, { Component } from 'react';

import Main from './pages/Main'
import Header from './components/Header/Header';
import CarouselComponent from './components/Carousel/CarouselComponent'
import MostBought from './components/MostBought/MostBought';
import MoreRead from './components/MoreRead/MoreRead';
import Favorite from './components/Favorite/Favorite'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
       <Header/>
       <CarouselComponent/>
       <MostBought/>
       <Favorite/>
        <MoreRead/>

      </div>
    )
  }
}
export default App

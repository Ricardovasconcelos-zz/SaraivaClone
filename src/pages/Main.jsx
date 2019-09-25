import React from 'react';

import Header from '../components/Header/Header';
import CarouselComponent from '../components/Carousel/CarouselComponent'
import MostBought from '../components/MostBought/MostBought';
import MoreRead from '../components/MoreRead/MoreRead';
import Favorite from '../components/Favorite/Favorite'
import ForYou from '../components/ForYou/ForYou';
import Frete from '../components/Frete/Frete'
import Payment from '../components/Payment/Payment'
import Footer from '../components/Footer/Footer'

import './Main.css'

const Main = () =>(
    <div className="Main">
        <Header/>
       <CarouselComponent/>
       <MostBought/>
       <Favorite/>
       <ForYou/>
        <MoreRead/>
        <Frete/>
        <Payment/>
        <Footer/>
    </div>
)
export default Main
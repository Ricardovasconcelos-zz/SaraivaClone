import React, { Component } from "react";
import Slider from "react-slick";


import './Favorite.css'

import apiFavoriteBooks from '../../services/apiFavoriteBooks'


import { Container, Button } from 'react-bootstrap'

 class Favorite extends Component {
  state = {
    infoBooks: [],
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = async () => {

    const response = await apiFavoriteBooks.get('')
    console.log(response.data)

    this.setState({
      infoBooks: response.data.items
    })

  }
  render() {
    const { infoBooks } = this.state;

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Container>
        <div className="Favorite">
          <h2 className="Title-content">Os queridinhos da galera </h2>
          <Slider {...settings}>
            {infoBooks.map(item => (
              <div>
                  <div className="Content">
                    <div className="Image">
                      <img
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                        className="foto"
                      />
                    </div>
                    <div className="books">
                      <h4 className="title-content"><strong>{item.volumeInfo.title}</strong></h4>
                      <h4 className="authour-content">{item.volumeInfo.authors} </h4>
                      <h4 className="off-content">R$15 OFF com o cupom RicardoReact</h4>
                      <h4 className="value-content">R$ {item.saleInfo.retailPrice.amount}</h4>
                    </div>
                  </div>
                  
              </div>
            ))
            }

          </Slider>
        </div>
      </Container>
    );
  }
}
export default Favorite
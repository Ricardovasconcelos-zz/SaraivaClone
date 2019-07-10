import React, { Component } from "react";
import Slider from "react-slick";


import './MoreRead.css'

import apiAllBooks from '../../services/apiAllBooks'


import { Card, Button } from 'react-bootstrap'




export default class Responsive extends Component {
  state = {
    infoBooks: [],
}

componentDidMount() {
    this.loadBooks();
}

loadBooks = async () => {

    const response = await apiAllBooks.get('')
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
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
 
      <div className="MoreRead">
        <h2> Mais Vendidos </h2>
        <Slider {...settings}>
        {infoBooks.map(item => (
          <div>
          <Card className="Content">
                    <Card.Img variant="top"  
                    src={item.volumeInfo.imageLinks.smallThumbnail}
                    className="foto"
                    />
                    <Card.Body>
                        <Card.Title className="title-content"><strong>{item.volumeInfo.title}</strong></Card.Title>
                        <Card.Text className="description-content">{item.volumeInfo.authors} </Card.Text>
                        <Card.Text className="description-content">{item.volumeInfo.categories}</Card.Text>
                        <Button variant="warning" className="button">Adicionar ao carrinho </Button>
                    </Card.Body>
                </Card>

          </div>
          
))
}
          
        </Slider>
      </div>
    );
  }
}
import React, { Component } from "react";

import './ForYou.css'

import { Container, Button } from 'react-bootstrap'

 class ForYou extends Component {

  render() {


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
        
        <h2 className="Title-content forYouTitle">Separamos listas com temas especiais para você</h2>
        <div className="ForYou">
                  <div className="Content-news">
                    <div className="Image">
                      <img
                        src="https://images.livrariasaraiva.com.br/estatico/imagens/list/mais-vendidos-do-new-york-times.jpg"
                        className="foryou-foto"
                      />
                    </div>
                    <div className="buttonsee">
                    <Button variant="outline-info" size="lg">Saiba mais</Button>
                    </div>
                  </div>

                  <div className="Content-lowprice">
                    <div className="Image">
                      <img
                        src="https://images.livrariasaraiva.com.br/estatico/2018/tvs/mobile/08-agosto/promocoes/bons-e-baratos/tv_bons_baratos_mb.jpg"
                        className="foryou-foto"
                      />
                    </div>
                    <div className="buttonsee">
                    <Button variant="outline-info" size="lg">Saiba mais</Button>
                    </div>
                  </div>

                  <div className="Content-love">
                    <div className="Image">
                      <img
                        src="https://images.livrariasaraiva.com.br/estatico/2018/listas/entre-o-amor-e-a-guerra/tv_entre-o-amor-e-a-guerra_tv_mb.jpg"
                        className="foryou-foto"
                      />
                    </div>
                    <div className="buttonsee">
                    <Button variant="outline-info" size="lg">Saiba mais</Button>
                    </div>
                    </div>
                  
     
                  <div className="Content-invest">
                    <div className="Image">
                      <img
                        src="https://images.livrariasaraiva.com.br/estatico/imagens/list/tv-guia-pratico-investidor_mb.gif"
                        className="foryou-foto"
                      />
                    </div>
                    <div className="buttonsee">
                    <Button variant="outline-info" size="lg">Saiba mais</Button>
                    </div>
                  </div>
        </div>
      </Container>
    );
  }
}
export default ForYou
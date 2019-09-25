import React, { Component } from "react";

import './ForYou.css'

import { Container, Button } from 'react-bootstrap'

 class ForYou extends Component {

  render() {


    return (
      <Container>
        
        <h2 className="Title-content forYouTitle">Separamos listas com temas especiais para você</h2>
        <div className="ForYou">
                  <div className="Content-news">
                    <div className="Image">
                      <img
                        src="https://images.livrariasaraiva.com.br/estatico/imagens/list/mais-vendidos-do-new-york-times.jpg"
                        className="foryou-foto"
                        alt=""
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
                        className="foryou-foto" alt=""
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
                        className="foryou-foto" alt=""    
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
                        className="foryou-foto" alt=""
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
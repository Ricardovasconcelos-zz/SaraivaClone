import React from 'react'

import './Footer.css'
import { TiMessages, TiBusinessCard, TiGroupOutline, TiLocationOutline } from "react-icons/ti";

import { Container } from 'react-bootstrap'

const Footer = () => (
    <div className="Footer">
        <Container>
            <div className="ContentFooter">
                <div className="CardContent">
                    <div className="CardItems">
                        <TiMessages size={35} className="Card-icons" />
                        <h4>Central de Dúvidas Online</h4>
                        <p>Ultilize nosso FAQ, chat online ou email para solucionar suas dúvidas.</p>
                    </div>
                    <div className="CardItems">
                        <TiLocationOutline size={35} className="Card-icons" />
                        <h4>Nossas Lojas</h4>
                        <p>Encontre uma loja SARAIVA mais perto de você.</p>
                    </div>
                    <div className="CardItems">
                        <TiBusinessCard size={35} className="Card-icons" />
                        <h4>Cartão SARAIVA</h4>
                        <p>Condições Especiais para suas compras em nossas lojas e site.</p>
                    </div>
                    <div className="CardItems">
                        <TiGroupOutline size={35} className="Card-icons" />
                        <h4>Trabalhe Conosco</h4>
                        <p>Venha fazer parte do nosso time!</p>
                    </div>
                </div>
            </div>
            <div className="FooterName">
                <p>Esse site não tem nenhum fim lucrativo, é apenas um clone da loja SARAIVA para aprimorar meu conhecimento nas tecnologias que foram utilizadas!</p>
                <h4>Desenvolvido por RicardoVasconcelos</h4>
            </div>
        </Container>
    </div>

)
export default Footer
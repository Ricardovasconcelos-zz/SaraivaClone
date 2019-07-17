import React from 'react'

import './Frete.css'

import { FaTruck, FaHeart } from "react-icons/fa";
import { Container } from 'react-bootstrap'

const Frete = () => (
    <div className="Frete">
        <Container>
            <div className="Info-frete">
                <div className="FreeFrete">
                    <FaTruck className="truck" size={30} />
                    <div className="contentFrente">
                        <h4>FRETE GRÁTIS EM TODO O SITE</h4>
                        <p className="text-frete">Veja as condições para cada categoria.</p>
                    </div>
                </div>

                <div className="Premium">
                    <FaHeart size={30} className="check" />
                    <div className="contentPremium">
                        <h4>2UBOOKS PREMIUM</h4>
                        <p className="text-premium">A cada 500 reais em compras, metade do valor é convertido para doações</p>
                    </div>

                </div>
            </div>
        </Container>
    </div>
)

export default Frete
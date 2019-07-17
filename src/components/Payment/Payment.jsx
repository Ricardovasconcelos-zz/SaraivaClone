import React from 'react'

import './Payment.css'
import PaymentModel from '../../Images/paymentModel.png'
import SecurityPayment from '../../Images/securityPayment.png'
import SocialMedia from '../../Images/socialMedia.png'
import { Container } from 'react-bootstrap'

const Payment = () => (
    <div className="Payment">
        <Container>
            <div className="PaymentContent">
                <div className="ModelPayment">
                    <p className="text-modelPayment">Meios de pagamento</p>
                    <img src={PaymentModel} alt="payment" />
                </div>
                <div className="SecurityPayment">
                    <p className="text-securityPayment">Site Seguro</p>
                    <img src={SecurityPayment} alt="security" />
                </div>
                <div className="SocialMedia">
                    <p className="text-socialMedia">Redes Sociais</p>
                    <img src={SocialMedia} alt="security" />
                </div>
            </div>
        </Container>
    </div>
)
export default Payment
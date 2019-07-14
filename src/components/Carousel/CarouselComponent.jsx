import React from 'react'

import './Carousel.css'

import {Carousel} from 'react-bootstrap'

const CarouselComponent = () => (
    <div className="Carousel">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.anglicanyouth.org.nz/wp-content/uploads/Resourced-banner.jpg"
                    alt="First slide"
                    
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.cora.de/revslider/hc_homepage_test/Amazon_KemmererBrigit_WorteDieLeuchtenWieSterne_1000x330px.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://spiritualebook.com/images/banner.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
)

export default CarouselComponent
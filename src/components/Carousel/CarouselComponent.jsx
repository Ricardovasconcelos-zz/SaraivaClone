import React from 'react'

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
                    src="https://s3.amazonaws.com/thinkific/file_uploads/16572/images/5f5/cc2/3c5/10xsuperlife-4.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static1.squarespace.com/static/55a3ecb2e4b0606847538d8f/t/561d7e59e4b093c102b1c1de/1444773466722/the+book3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
)

export default CarouselComponent
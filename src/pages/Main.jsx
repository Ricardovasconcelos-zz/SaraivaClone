import React, { Component } from 'react';

import './Main.css'

import apiAllBooks from '../services/apiAllBooks'


import { Card, Button } from 'react-bootstrap'

class Main extends Component {
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

        return (
            <div className="Main">
            {infoBooks.map(item => (

                <Card className="Content">
                    <Card.Img variant="top"  />
                    <Card.Body>
                        <Card.Title className="title-content">to aqui</Card.Title>
                        <Card.Text className="description-content">Data da foto: </Card.Text>
                        <Card.Text className="description-content">Número do registro: </Card.Text>
                        <Button variant="primary" className="button">Status mission </Button>
                    </Card.Body>
                </Card>

            ))
            }
        </div >

        );
    }
}
export default Main
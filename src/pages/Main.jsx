import React, { Component } from 'react';

import './Main.css'

import apiAllBooks from '../services/apiAllBooks'



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

    }


    render() {
        return (
            <div className="Main">
                <h1 className="book">Books</h1>
            </div>

        );
    }
}
export default Main
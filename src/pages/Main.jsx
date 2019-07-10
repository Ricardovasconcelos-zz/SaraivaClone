import React, { Component } from 'react';


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
            <h1>Books</h1>
        );
    }
}
export default Main
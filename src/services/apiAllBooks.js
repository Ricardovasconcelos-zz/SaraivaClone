import axios from 'axios'

const apiAllBooks = axios.create({baseURL:'https://www.googleapis.com/books/v1/volumes?q=time&printType=all'})

export default apiAllBooks

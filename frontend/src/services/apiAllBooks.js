import axios from 'axios'

const apiAllBooks = axios.create({baseURL:'https://www.googleapis.com/books/v1/volumes?q=money&filter=paid-ebooks&projection=full'})

export default apiAllBooks

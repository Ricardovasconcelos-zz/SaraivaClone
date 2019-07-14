import axios from 'axios'

const apiFavoriteBooks = axios.create({baseURL:'https://www.googleapis.com/books/v1/volumes?q=potter&filter=paid-ebooks&printType=books'})

export default apiFavoriteBooks
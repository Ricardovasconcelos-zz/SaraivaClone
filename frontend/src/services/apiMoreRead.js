import axios from 'axios'

const apiMoreRead = axios.create({baseURL:'https://www.googleapis.com/books/v1/volumes?q=time&filter=paid-ebooks&printType=books'})

export default apiMoreRead

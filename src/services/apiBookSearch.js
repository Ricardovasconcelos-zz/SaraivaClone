import axios from 'axios'


const apiBookSearch = axios.create({baseURL: `https://www.googleapis.com/books/v1/volumes?q=${bookName}`})

export default apiBookSearch
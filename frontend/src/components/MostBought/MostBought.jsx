import React, { Component } from "react";
import Slider from "react-slick";
import { FiShoppingCart } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./MostBought.css";

import apiAllBooks from "../../services/apiAllBooks";
import { Container, Button } from "react-bootstrap";

const URL = "http://localhost:3030/";

class MostBought extends Component {
  state = {
    infoBooks: [],
    BookId: "",
    AddCart: 0
  };

  componentDidMount() {
    this.loadBooks();
    this.RemoveOrder();
  }

  RemoveOrder = async () => {
    await axios.delete(`${URL}Clean`);
  };

  AddOrder = async id => {
    await this.setState({
      BookId: id
    });

    await axios.post(`${URL}Order`, {
      bookId: this.state.BookId
    });
  };

  notify = () => toast.success("Adicionado ao carrinho");

  loadBooks = async () => {
    const response = await apiAllBooks.get("");

    this.setState({
      infoBooks: response.data.items
    });
  };
  render() {
    const { infoBooks } = this.state;

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          draggable
        />
        <ToastContainer />

        <Container>
          <div className="MostBought">
            <h2 className="Title-content"> Mais Vendidos </h2>
            <Slider {...settings}>
              {infoBooks.map(item => (
                <div key={item.id}>
                  <div className="Content">
                    <div className="Image">
                      <img
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                        className="foto"
                        alt=""
                      />
                    </div>
                    <div className="books">
                      <h4 className="Bookname-content">
                        <strong>{item.volumeInfo.title}</strong>
                      </h4>
                      <h4 className="authour-content">
                        {item.volumeInfo.authors}{" "}
                      </h4>
                      <h4 className="novalue-content">
                        R$ {item.saleInfo.listPrice.amount + 10}
                      </h4>
                      <h4 className="value-content">
                        R$ {item.saleInfo.retailPrice.amount}
                      </h4>
                    </div>

                    <div className="botao" onClick={this.notify}>
                      <Button
                        variant="warning"
                        size="sm"
                        className="button"
                        onClick={() => this.AddOrder(item.id)}
                      >
                        <FiShoppingCart size={20} className="Car-icon" />
                        ADICIONAR AO CARRINHO
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
export default MostBought;

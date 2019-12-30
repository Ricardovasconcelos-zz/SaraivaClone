import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Order.css";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";

const URL = "http://localhost:3030/order";

const Orders = () => {
  const [Books, setBooks] = useState([]);
  const [AllPrice, setAllPrice] = useState("0,00");

  const ShowOrders = async () => {
    const res = await axios.get(URL);
    setBooks(res.data);
    getAllPrice();
  };

  const getAllPrice = async () => {
    const response = await axios.get(`${URL}/allprice`);
    if (response.data.length !== 0) {
      setAllPrice(response.data[0].sum.toFixed(2));
    } else {
      setAllPrice("0,00");
    }
  };

  const deleteBook = async id => {
    await axios.delete(`${URL}/delete`, {
      headers: { id }
    });
    ShowOrders();
  };

  useEffect(() => {
    ShowOrders();
  }, []);

  return (
    <>
      <Header />
      <div className="ground">
        <div className="Orders">
          <div className="Allbooks">
            <div className="price">
              <h1>TUDO</h1>
              <div className="value">
                <h3>R$ {AllPrice}</h3>
                <p>em até 10x sem júros</p>
                <button className="buttonBuy" onClick={ShowOrders}>
                  COMPRAR
                </button>
              </div>
            </div>
            {Books.map(item => (
              <div className="book" key={item._id}>
                <img src={item.thumbnail} className="bookImage" />
                <div className="detailsBooks">
                  <h3>R$ {item.price}</h3>
                  <h6>{item.title}</h6>
                  <div className="optionsIcons">
                    <FaRegTrashAlt onClick={() => deleteBook(item._id)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Order.css";
import axios from "axios";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const URL = "http://localhost:3030/order";

const Orders = () => {
  const [Books, setBooks] = useState([]);

  const [moreBook, setmoreBook] = useState(1);

  const ShowOrders = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
    setBooks(res.data);
    console.log("valor do books", Books);
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
                <h3>R$ 300,00</h3>
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
                    <FaMinusCircle />
                    <h6>{moreBook}</h6>
                    <FaPlusCircle />
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

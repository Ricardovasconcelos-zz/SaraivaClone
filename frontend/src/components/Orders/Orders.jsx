import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Order.css";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "../Animation/Animation";
import { MdClose } from "react-icons/md";

const URL = "http://localhost:3030/order";

const Orders = ({ history }) => {
  const [Books, setBooks] = useState([]);
  const [AllPrice, setAllPrice] = useState("0,00");
  const [show, setShow] = useState(false);
  const [Alert, setAlert] = useState(false);

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
      setAlert(true);
    }
  };

  const deleteBook = async id => {
    await axios.delete(`${URL}/delete`, {
      headers: { id }
    });
    ShowOrders();
  };

  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      initialPage();
    }, 2000);
  };
  const toFalse = () => {
    setAlert(false);
  };
  const initialPage = () => {
    return history.push("/");
  };

  useEffect(() => {
    ShowOrders();
  }, []);

  return (
    <>
      <Header />
      <Modal show={Alert}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Não há nenhum item em seu carrinho</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Deseja retornar para loja?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="warning" onClick={initialPage}>
              Ir para loja
            </Button>
            <Button variant="success" onClick={toFalse}>
              Permanecer no carrinho
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      <div className="Ground">
        <div className="Orders">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {Books.map(item => (
                <tr key={item._id}>
                  <td>
                    <div className="ItemStyle">
                      <img src={item.thumbnail} className="ImgBook" />
                      <p>{item.title}</p>
                    </div>
                  </td>
                  <td>R$ {item.price}</td>
                  <td>{item.qtd}</td>
                  <td>
                    R$ {item.price}
                    <MdClose
                      className="CloseIcon"
                      size={40}
                      onClick={() => deleteBook(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="buyOrder">
            <div className="Delivery">
              <h4>Entrega</h4>
              <p>
                Veja as opções de entrega para seus itens, com todos os prazos e
                valores.
              </p>
              <a href="">Calcular</a>
            </div>
            <div className="Cupom">
              <h4>Cupom</h4>
              <input placeholder="Código"></input>
              <button>Aplicar</button>
            </div>
            <div className="Total">
              <div className="TotalDetail">
                <h4>Total</h4>
                <p>R$ {AllPrice}</p>
              </div>
              <button onClick={handleShow}>Finalizar Pedido</button>
            </div>
          </div>
        </div>
        <Modal show={show} className="ModalAnimation">
          <Lottie />
        </Modal>
      </div>
    </>
  );
};

export default Orders;

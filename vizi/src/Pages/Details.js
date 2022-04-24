import React from "react";
import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router";
import styles from "./Details.module.css";

export default function Details() {
  const { id } = useParams();
  const [payment, setPayment] = useState([]);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function getDetails(id) {
      const responsePayment = await api.get(`payments/${id}`);
      const payment = responsePayment.data;
      const responseTransation = await api.get(
        `transactions/${payment.transactionId}`
      );
      setPayment(payment);
      setTransactions(responseTransation.data);
    }
    getDetails(id);
  }, [id]);

  const formatDate = (dateInString) => {
    if (dateInString) {
      return new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
      }).format(new Date(dateInString).getTime());
    }
  };

  const formatMoney = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <main className="page">
      <div className={`${styles.container}`}>
        <ul className={styles.list}>
          <li className="list-group-item">
            Data de Pagamento:{" "}
            <strong>{formatDate(payment?.paymentDate)}</strong>
          </li>
          <li className="list-group-item">
            Data de Abertura da Geladeira:{" "}
            <strong>{formatDate(transactions?.openFridge)}</strong>
          </li>
          <li className="list-group-item">
            Data de Fechamento da Geladeira:{" "}
            <strong>{formatDate(transactions?.closeFridge)}</strong>
          </li>
          <li className="list-group-item">
            Valor Total: <strong>{formatMoney(payment?.amount)}</strong>
          </li>
        </ul>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="col">Produto</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço Unitário</th>
              <th scope="col">Quantidade</th>
            </tr>
            {transactions?.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <img
                      className="img-thumbnail img-fluid w-25"
                      src={product.thumb}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{formatMoney(product.price)}</td>
                  <td>{product.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

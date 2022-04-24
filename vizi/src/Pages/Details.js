import React from "react";
import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router";
import styles from './Details.module.css';

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


  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>Data de Pagamento: {payment?.paymentDate}</li>
        <li>Data de Abertura da Geladeira: {transactions?.openFridge}</li>
        <li>Data de Fechamento da Geladeira: {transactions?.closeFridge}</li>
        <li>Valor Total: R$ {payment?.amount}</li>
      </ul>
      <table className="table table-striped">
        <tr>
          <th scope="col">Produto</th>
          <th scope="col">Descrição</th>
          <th scope="col">Preço Unitário</th>
          <th scope="col">Quantidade</th>
        </tr>
        {transactions?.products.map((product) => {
          return (
            <tr>
              <td>
                <img
                  className="img-thumbnail img-fluid w-25"
                  src={product.thumb}
                  alt={product.name}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { CgEye } from "react-icons/cg";
import styles from "./Payments.module.css";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`payments/`);
      setPayments(response.data);
    }
    getProducts();
  });

  const formatDate = (dateInString) => {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: "UTC",
    }).format(new Date(dateInString).getTime());
  };

  return (
    <table className="table table-striped mt-3 ">
      <thead>
        <tr>
          <th>Data de Pagamento:</th>
          <th>Valor da Compra:</th>
          <th>Status do Pagamento:</th>
          <th>Ações:</th>
        </tr>
      </thead>
      {payments.map((payment) => (
        <tbody  key={payment.id}>
          <tr>
            <td>{formatDate(payment.paymentDate)}</td>
            <td>R$ {payment.amount}</td>
            <td>
              {payment.status === "PAID"
                ? "Pagamento Realizado"
                : "Pagamento Pendente"}
            </td>
            <td>
              <span className={styles.container}>
                <Link to={`/details/${payment.id}`}>
                  <CgEye size={20} color="black" />
                </Link>
              </span>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

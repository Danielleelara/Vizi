import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from "react-router-dom";
import { CgEye} from "react-icons/cg";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(()=>{
      async function getProducts() {
          const response = await api.get(`payments/`);
          setPayments(response.data);
        }
        getProducts();
  })

  return (
    <div>
      <table className="list-group">
      {
        payments.map((payment)=> (
          <td>
            <tr className="list-group-item">Data de Pagamento: {payment.paymentDate}</tr>
            <tr className="list-group-item">Valor da Compra: R${payment.amount}</tr>
            <tr className="list-group-item">Status do Pagamento: {payment.status}</tr>
            <span>
            <Link to={`/details/${payment.id}`}>
                    <CgEye  size={20} color="gray" />
            </Link>
            </span>
          </td>
        ))
      }
    </table>
    </div>
  )
}


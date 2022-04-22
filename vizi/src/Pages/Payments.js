import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(()=>{
      async function getProducts() {
          const response = await api.get(`payments/`);
          setPayments(response.data);
        }
        getProducts();
  })

  console.log('pagamentos', payments)
  return (
    <div>
      <table>
      {
        payments.map((payment)=> (
          <tr>
            <td>Data de Pagamento: {payment.paymentDate}`</td>
            <td>Valor da Compra: R${payment.amount}</td>
            <td>Status do Pagamento: {payment.status}</td>
          </tr>
        ))
      }
      </table>
    </div>
  )
}


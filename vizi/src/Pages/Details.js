import React from 'react';
import { useEffect, useState } from "react";
import api from '../api';
import { useParams } from "react-router";

export default function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
 

  useEffect(() => {
    async function getDetails(id) {
      const response = await api.get(`payments/${id}`);
      setDetails(response.data);
     
    }
      getDetails(id);
  }, [id]);

  console.log('details', details);

  return (
    <div>
      {
        details.map((detail)=> (
         
            <div>
            <p>aqui</p>
            </div>
        
        ))
      }
    </div>
  )
}


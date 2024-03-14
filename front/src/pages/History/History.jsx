import React, { useEffect } from 'react'
import Table from '../../components/History/Table'
import { OrdersApi } from '../../services';
import { useState } from 'react';

function History() {
  const [modal, setModal] = useState(false)
  const [allOrders, setOrders] = useState([])
  async function getOrders() {
    const data = await OrdersApi.getOrders();
    setOrders(data);
  }

  function bla(code) {
    console.log(code)
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <h3>SESUITE / Historico</h3>
      <Table orders={allOrders} bla={() => bla}/>
      {
        modal &&
        <>
        
        </>
      }
    </>
  )
}


export default History
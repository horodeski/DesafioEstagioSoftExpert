import React, { useEffect } from 'react'
import Table from '../../components/History/Table'
import { OrdersApi, ProductsApi } from '../../services';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalMoreInfo } from '../../redux/ui/actions';
import { MoreInfoModal } from '../../components/Common';

function History() {
  const dispatch = useDispatch()
  const { isOpenMoreInfoOrder } = useSelector((state) => state.uiReducer);
  const [allOrders, setOrders] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const [unicOrderItem, setUnicOrderItem] = useState([])
  const [order, setOrder] = useState()
  const [code, setCode] = useState()


  async function getOrders() {
    const data = await OrdersApi.getOrders();
    setOrders(data);
  }


  async function getOrderItem() {
    const data = await OrdersApi.getOrderItem();
    setOrderItems(data);
  }

  function orderItemInfo() {
    const findOrder = allOrders.find(i => i.code == code)
    console.log(order, findOrder)
    setOrder(findOrder)
    console.log(order)
  }
  
  function toggleModal(code_order) {
    dispatch(setModalMoreInfo(true))
    if (code_order != code) {
      setCode(code_order.code)
    }
  }

  function productsItems() {
    const findOrderItem = orderItems.filter(i => i.order_code == code)
    setUnicOrderItem(findOrderItem)
  }

  useEffect(() => {
    orderItemInfo()
  }, [order])

  
  useEffect(() => {
    productsItems();
  }, [code])
  
  useEffect(() => {
    getOrders();
    getOrderItem()
  }, []);
  
  // console.log(order)
  return (
    <>
      <h3>SESUITE / Historico</h3>
      <Table orders={allOrders} toggleModal={() => toggleModal} />
      {isOpenMoreInfoOrder && <MoreInfoModal totalValue={order.total} tax={order.tax} allProducts={unicOrderItem} />}
    </>
  )
}


export default History
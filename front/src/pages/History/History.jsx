import React, { useEffect } from 'react'
import Table from '../../components/History/Table'
import { OrdersApi, ProductsApi } from '../../services';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalMoreInfo } from '../../redux/ui/actions';
import { Empty, MoreInfoModal } from '../../components/Common';

function History() {
  const dispatch = useDispatch()
  const { isOpenMoreInfoOrder } = useSelector((state) => state.uiReducer);
  const [allOrders, setOrders] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const [orderItemsProd, setOrderItemsProd] = useState([])
  const [unicOrderItem, setUnicOrderItem] = useState([])
  const [code, setCode] = useState()

  const [allProducts, setAllProducts] = useState([])

  async function getOrders() {
    const data = await OrdersApi.getOrders();
    setOrders(data);
  }

  async function getProducts() {
    const data = await ProductsApi.getProducts();
    setAllProducts(data);
  }

  async function getOrderItem() {
    const data = await OrdersApi.getOrderItem();
    setOrderItems(data);
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

  function verifyModal() {
    if (!isOpenMoreInfoOrder) return null;
    return (
      <MoreInfoModal allProducts={unicOrderItem} />
    )
  }


  useEffect(() => {
    productsItems();
  }, [code])

  useEffect(() => {
    getOrderItem()
    getProducts()
    getOrders();
  }, []);

  return (
    <>
      <h3>SESUITE / Historico</h3>
      {
        allOrders.length >= 1 ?
        <>
          <Table orders={allOrders} toggleModal={() => toggleModal} />
          {verifyModal()}
        </>
        :
        <Empty text={"Não há compras registradas em nosso sistema"} />
      }
    </>
  )
}


export default History
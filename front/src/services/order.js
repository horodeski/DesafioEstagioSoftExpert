import api from '../plugins/api'

class OrdersApi {
  async getOrders() {
    const response = await api.get('/order.php?op=GET')
    return response.data
  }
  async getOrderItem() {
    const response = await api.get('/order_item.php?op=GET')
    return response.data
  }
  async postOrder(order) {
    let response
    if (order.code) {
      response = await api.put(`/order.php?op=POST`, order)
    } else {
      response = await api.post(`/order.php?op=POST`, order)
    }
    return response.data
  }
  async postOrderItem(order) {
    let response
    if (order.code) {
      response = await api.put(`/order_item.php?op=POST`, order)
    } else {
      response = await api.post(`/order_item.php?op=POST`, order)
    }
    return response.data
  }
  async deleteOrder(order) {
    const response = await api.delete(`/orders/${order.id}/`)
    return response.data
  }
}

export default new OrdersApi()
import api from '../plugins/api'

class ProductsApi {
  async getProducts() {
    const response = await api.get('/products')
    return response.data
  }
  async postProducts(product) {
    let response
    if (product.id) {
      response = await api.put(`/products/${product.id}/`, product)
    } else {
      response = await api.post('/products/', product)
    }
    return response.data
  }
  async deleteProduct(product) {
    const response = await api.delete(`/products/${product.id}/`)
    return response.data
  }
}

export default new ProductsApi()
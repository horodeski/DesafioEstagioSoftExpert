import api from '../plugins/api'

class ProductsApi {
  async getProducts() {
    const response = await api.get('/products.php?op=GET')
    return response.data
  }
  async postProducts(product) {
    let response
    if (product.code) {
      response = await api.put(`/products.php?op=POST`, product)
    } else {
      response = await api.post(`/products.php?op=POST`, product)
    }
    return response.data
  }
  async updateProducts(product) {
    let response
    if (product.code) {
      response = await api.put(`/products.php?op=PUT`, product)
    } else {
      response = await api.post(`/products.php?op=PUT`, product)
    }
    return response.data
  }
  async deleteProduct(product) {
    const response = await api.delete(`/products/${product.id}/`)
    return response.data
  }
}

export default new ProductsApi()
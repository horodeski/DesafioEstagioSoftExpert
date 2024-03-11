import api from '../plugins/api'

class CategoriesApi {
  async getCategories() {
    const response = await api.get('/categories.php?op=GET')
    return response.data
  }
  async postCategory(category) {
    let response
    if (category.code) {
      response = await api.put(`/categories.php?op=POST`, category)
    } else {
      response = await api.post('/categories.php?op=POST', category)
    }
    return response.data
  }
  async deleteCategory(code) {
    const response = await api.post('/categories.php?op=DELETE', code)
    return response.data
  }
}

export default new CategoriesApi()
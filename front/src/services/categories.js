import api from '../plugins/api'

class CategoriesApi {
  async getCategories() {
    const response = await api.get('/categories.php?op=GET')
    return response.data
  }
  async postCategory(category) {
    let response
    if (category.id) {
      response = await api.put(`/categories/${category.id}/`, category)
    } else {
      response = await api.post('/categories/', category)
    }
    return response.data
  }
  async deleteCategory(category) {
    const response = await api.delete(`/categories/${category.id}/`)
    return response.data
  }
}

export default new CategoriesApi()
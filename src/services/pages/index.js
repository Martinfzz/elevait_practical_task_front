import API from '../api';

export default class PagesManager {
  static async indexPages() {
    const response = await API.get('/pages');
    return response.data;
  }

  static async showPage(id) {
    const response = await API.get(`/pages/${id}`);
    return response.data;
  }
}

import API from '../api';

export default class PagesManager {
  static async showPage(id) {
    const response = await API.get(`/pages/${id}`);
    return response.data;
  }

  static async createPage(newPage, textInput, documentId) {
    const response = await API.post('/pages', { pageNr: newPage, text: textInput, document_id: documentId });
    return response.data;
  }
}

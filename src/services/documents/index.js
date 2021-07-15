import API from '../api';

export default class DocumentsManager {
  static async indexDocuments() {
    const response = await API.get('/documents');
    return response.data;
  }

  static async showDocument(id) {
    const response = await API.get(`/documents/${id}`);
    return response.data;
  }

  static async createDocument(titleInput, authorInput, dateInput) {
    const response = await API.post('/documents', { title: titleInput, author: authorInput, dateCreated: dateInput });
    return response.data;
  }
}

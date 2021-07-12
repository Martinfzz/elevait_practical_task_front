import API from '../api';

export default class DocumentsManager {
  static async indexDocuments() {
    const response = await API.get('/documents');
    return response.data;
  }
}

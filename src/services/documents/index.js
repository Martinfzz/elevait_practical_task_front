import store from '../../store/store';
import {
  documentFetchRequest,
  documentFetchRequestFailed,
  documentFetched,
  // documentSelected,
} from '../../store';
import API from '../api';

export default class DocumentsManager {
  static async indexDocuments() {
    store.dispatch(documentFetchRequest());
    try {
      const response = await API.get('/documents');
      store.dispatch(documentFetched(response.data));
      return response.data;
    } catch (error) {
      store.dispatch(documentFetchRequestFailed(error.message));
      return error.message;
    }
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

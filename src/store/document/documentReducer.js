import {
  DOCUMENT_FETCH_REQUEST,
  DOCUMENT_FETCH_REQUEST_FAILED,
  DOCUMENT_FETCHED,
  DOCUMENT_SELECTED,
  PAGE_FETCH_REQUEST,
  PAGE_FETCH_REQUEST_FAILED,
  PAGE_FETCHED,
  PAGE_SELECTED,
} from './documentType';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  documentTitle: '',
  documentAuthor: '',
  documentDate: '',
  documentPages: {},
  pageNr: '',
  pageText: '',
  error: '',
};

const documentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOCUMENT_FETCH_REQUEST:
    case PAGE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DOCUMENT_FETCH_REQUEST_FAILED:
    case PAGE_FETCH_REQUEST_FAILED:

      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DOCUMENT_FETCHED:
    case PAGE_FETCHED:

      return {
        ...state,
        loading: false,
      };
    case DOCUMENT_SELECTED:
      return {
        ...state,
        documentTitle: '',
        documentAuthor: '',
        documentDate: '',
        documentPages: {},

      };
    case PAGE_SELECTED:
      return {
        ...state,
        documentTitle: '',
        documentAuthor: '',
        documentDate: '',
        documentPages: {},

      };

    default:
      return state;
  }
};

export default documentReducer;

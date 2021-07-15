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

export const documentFetchRequest = () => ({
  type: DOCUMENT_FETCH_REQUEST,
});

export const documentFetchRequestFailed = (error) => ({
  type: DOCUMENT_FETCH_REQUEST_FAILED,
  error,
});

export const documentFetched = (data) => ({
  type: DOCUMENT_FETCHED,
  data,
});

export const documentSelected = (documentTitle, documentAuthor, documentDate, documentPages) => ({
  type: DOCUMENT_SELECTED,
  documentTitle,
  documentAuthor,
  documentDate,
  documentPages,
});

export const PageFetchRequest = () => ({
  type: PAGE_FETCH_REQUEST,
});

export const PageFetchRequestFailed = (error) => ({
  type: PAGE_FETCH_REQUEST_FAILED,
  error,
});

export const PageFetched = () => ({
  type: PAGE_FETCHED,
});

export const PageSelected = (pageNr, pageText) => ({
  type: PAGE_SELECTED,
  pageNr,
  pageText,
});

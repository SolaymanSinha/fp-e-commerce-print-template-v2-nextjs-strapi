export interface Categories {
  data: Category[];
  meta: Meta;
}

export interface Category {
  id: number;
  documentId: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug?: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

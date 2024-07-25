import axios from 'axios';

export type HomeQueryResponse = {
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: Array<ProductQueryResponse>;
};

export const HomeFetchData = async (
  query: String,
  limit: number,
  offset: number,
) =>
  await axios.get<HomeQueryResponse>(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}&offset=${offset}#json`,
  );

export type ProductQueryResponse = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export const ProductFetchData = async (itemId: String) =>
  await axios.get<ProductQueryResponse>(
    `https://api.mercadolibre.com/items/${itemId}`,
  );

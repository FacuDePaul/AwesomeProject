import axios from 'axios';

export type HomeQueryResponse = {
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: Array<DetailQueryResponse>;
};

export const HomeFetchData = async (
  query: String,
  limit: number,
  offset: number,
) =>
  await axios.get<HomeQueryResponse>(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}&offset=${offset}#json`,
  );

export type DetailQueryResponse = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export const DetailFetchData = async (itemId: String) =>
  await axios.get<DetailQueryResponse>(
    `https://api.mercadolibre.com/items/${itemId}`,
  );

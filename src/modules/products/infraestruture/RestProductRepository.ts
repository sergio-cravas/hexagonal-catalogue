import { ENDPOINT } from '@/src/config';
import { IProduct } from '../domain/product';
import { ProductRepository } from '../domain/productRepository';

const PRODUCTS_ENDPOINT = ENDPOINT + 'products';

export const createRestProductRepository = (): ProductRepository => {
  return {
    get,
    getAll,
    update,
    remove,
  };
};

const get = async (id: number) => {
  return fetch(`${PRODUCTS_ENDPOINT}/${id}`).then((response) => response.json());
};

const getAll = async () => {
  return fetch(`${PRODUCTS_ENDPOINT}`)
    .then((response) => response.json())
    .then((data) => data.products);
};

const update = async (product: IProduct) => {
  return fetch(`${PRODUCTS_ENDPOINT}/${product.id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
  }).then((response) => response.json());
};

const remove = async (id: number) => {
  return fetch(`${PRODUCTS_ENDPOINT}/${id}`, { method: 'DELETE' }).then((response) => response.json());
};

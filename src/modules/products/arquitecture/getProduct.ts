import { ProductRepository } from '../domain/productRepository';

export const getProduct = (repository: ProductRepository) => async (id: number) => {
  return repository.get(id);
};

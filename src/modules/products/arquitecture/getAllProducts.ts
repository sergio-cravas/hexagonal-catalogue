import { ProductRepository } from '../domain/productRepository';

export const getAllProducts = (repository: ProductRepository) => async () => {
  return repository.getAll();
};

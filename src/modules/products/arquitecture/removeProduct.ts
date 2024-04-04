import { ProductRepository } from '../domain/productRepository';

export const removeProduct = (repository: ProductRepository) => async (id: number) => {
  return repository.remove(id);
};

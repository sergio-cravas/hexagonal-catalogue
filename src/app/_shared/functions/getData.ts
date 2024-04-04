import { getAllProducts } from '@/src/modules/products/arquitecture/getAllProducts';
import { createRestProductRepository } from '@/src/modules/products/infraestruture/RestProductRepository';

export const getData = async () => {
  const productsRepository = createRestProductRepository();

  return getAllProducts(productsRepository)();
};

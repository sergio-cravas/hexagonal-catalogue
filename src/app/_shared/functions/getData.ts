import { createRestProductRepository } from '@/src/modules/products/infraestruture/RestProductRepository';

export const getData = async () => {
  const productsRepository = createRestProductRepository();

  return productsRepository.getAll();
};

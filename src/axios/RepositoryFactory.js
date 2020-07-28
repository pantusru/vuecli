import UserRepository from "./User";
import ProductRepository from "./Product";
const repositories = {
  user: UserRepository,
  product: ProductRepository
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};

import UserRepository from "./User";
const repositories = {
  user: UserRepository,
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};

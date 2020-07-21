import PostsRepository from "./Post";
import UserRepository from "./User";
const repositories = {
  posts: PostsRepository,
  user: UserRepository,
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};

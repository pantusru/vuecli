import Repository from "./Repository";

// const resource = "/posts";
export default {
  get() {
    return Repository.get("/posts");
  },

  getPost(postId) {
    return Repository.get(`/posts/${postId}`);
  }
};

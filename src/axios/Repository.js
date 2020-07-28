import axios from "axios";

// You can use your own logic to set your local or production domain
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const baseDomain = "https://www.pantus.ru/api/rest/2.0";
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers: {
    // authorization: localStorage.getItem("token") || ""
  }
});

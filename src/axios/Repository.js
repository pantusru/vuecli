import axios from "axios";

// You can use your own logic to set your local or production domain
const baseDomain = "http://10.0.30.95:3000";
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers:{
    'authorization': localStorage.getItem('token') || ''
  }
});

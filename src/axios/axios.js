import axios from "axios"
let baseUrl = "http://10.0.30.95:3000/"
export default axios.create({
    baseUrl
})
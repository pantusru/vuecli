import Repository from "./Repository";
import axios from "axios"

export default {
    login() {
        return Repository.post("/api/login", {
            login: "admin",
            password: "admin",
        })
        .then(function(response) {
            localStorage.setItem('token', response.data.token)
            axios.defaults.headers.common['authorization'] = response.data.token
            console.log(response);
        });
    },
    logout(){
        localStorage.removeItem('token')
    },
    protected(){
        return Repository.post("/api/protected")
    },
    help(){
        return Repository.get("/help")
    }
}
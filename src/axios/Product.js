import Repository from "./Repository";
// import axios from "axios";

export default {
    popular(){
        return Repository.get("/api/catalog/popular");
    }
}
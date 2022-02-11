import axios from "axios";

// mrhughes local changes

export default {
    getProduct: function(){
        return axios.get("https://qa-registry-interview-api.regsvcs.theknot.com/products");
    }
}

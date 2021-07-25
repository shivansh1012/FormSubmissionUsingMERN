import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.9:5000/api/v1/forms",
  headers: {
    "Content-type": "application/json"
  }
});
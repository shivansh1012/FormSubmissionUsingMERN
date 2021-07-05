import http from "../http-common";

class RestaurantDataService {
  createForm(data) {
    return http.post("/addForm", data);
  }
}

export default new RestaurantDataService();
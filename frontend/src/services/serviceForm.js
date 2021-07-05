import http from "../http-common";

class FormDataService {
  createForm(data) {
    return http.post("/addForm", data);
  }
}

export default new FormDataService();
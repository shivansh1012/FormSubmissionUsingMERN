import http from "../http-common";

class FormDataService {
  createForm(data) {
    return http.post("/addForm", data);
  }
  getAll() {
    return http.get("/getForm");
  }
}

export default new FormDataService();
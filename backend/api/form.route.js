import express from "express"
import FormCtrl from "./form.controller.js";
const router = express.Router()

router.route("/addForm")
  .post(FormCtrl.apiPostForm)
  .get(FormCtrl.apiGetForm)

export default router
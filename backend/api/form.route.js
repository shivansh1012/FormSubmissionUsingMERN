import express from "express"
import FormCtrl from "./form.controller.js";
const router = express.Router()

router.route("/addForm")
  .post(FormCtrl.apiPostReview)

export default router
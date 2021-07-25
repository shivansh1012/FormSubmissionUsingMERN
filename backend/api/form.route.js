import express from "express"
import FormCtrl from "./form.controller.js";
const router = express.Router()


router.route("/getForm").get(FormCtrl.apiGetForms)
router.route("/addForm").post(FormCtrl.apiPostForm)

export default router
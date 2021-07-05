import express from "express"
import cors from "cors"
import forms from "./api/form.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/forms", forms)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app
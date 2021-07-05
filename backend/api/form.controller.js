import FormDAO from "../dao/formDAO.js";

export default class FormController {
    static async apiPostReview(req, res, next) {
        try {
          const firstName = req.body.firstName
          const lastName = req.body.lastName
          const email = req.body.email
          const password = req.body.password
          const city = req.body.city
          const state = req.body.state
          const country = req.body.country
          const date = new Date()
    
          const FormResponse = await FormDAO.addForm(
            firstName,
            lastName,
            email,
            password,
            city,
            state,
            country,
            date,
          )
          res.json({ status: "success" })
        } catch (e) {
          res.status(500).json({ error: e.message })
        }
      }
}
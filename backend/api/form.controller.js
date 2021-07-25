import FormDAO from "../dao/formDAO.js";

export default class FormController {
  static async apiPostForm(req, res, next) {
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

  static async apiGetForms(req, res, next) {
    
    let filters = {}
    if (req.query.country) {
      filters.country = req.query.country
    } else if (req.query.state) {
      filters.state = req.query.state
    } else if (req.query.city) {
      filters.city = req.query.city
    }

    const { formsList, totalForms } = await FormDAO.getForms({ filters })
    let response = {
      formsList: formsList,
      filters: filters,
      total_results: totalForms,
    }
    res.json(response)
  }
}
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let forms

export default class formDAO {
  static async injectDB(conn) {
    if (forms) {
      return
    }
    try {
      forms = await conn.db(process.env.FORM_NS).collection("forms")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addForm(firstName, lastName, email, password, city, state, country, date) {
    try {
      const formDoc = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        city: city,
        state: state,
        country: country,
        date: date,
      }

      return await forms.insertOne(formDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

  static async getForms(filters = null) {
    let query
    if (filters) {
      if ("city" in filters) {
        query = { "city": { $eq: filters["city"] } }
      } else if ("state" in filters) {
        query = { "state": { $eq: filters["state"] } }
      } else if ("country" in filters) {
        query = { "country": { $eq: filters["country"] } }
      }
    }

    let cursor

    try {
      cursor = await forms.find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { formsList: [], totalForms: 0 }
    }

    // const displayCursor = cursor.limit(20).skip(20 * 0)
    const displayCursor = cursor
    try {
      const formsList = await displayCursor.toArray()
      const totalForms = await forms.countDocuments(query)
      return { formsList, totalForms }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { formsList: [], totalForms: 0 }
    }
  }
}
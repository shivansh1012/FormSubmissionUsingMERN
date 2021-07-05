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
          const formDoc = { firstname: firstName,
              lastname: lastName,
              email: email,
              password: password,
              city: city,
              state: state,
              country: country,
              date: date, }
    
          return await forms.insertOne(formDoc)
        } catch (e) {
          console.error(`Unable to post review: ${e}`)
          return { error: e }
        }
      }
}
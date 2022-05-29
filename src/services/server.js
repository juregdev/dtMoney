// src/server.js
import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      transition: Model
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return {
          user: [{
            tp_user: "user",
            mail: "Filipe.Araujo9@outlook.com",
            password: "Filipe@123",
            Photo: ""
          },
          {
            tp_user: "adm",
            mail: "Filipe.Araujo9@etec.sp.gov.br",
            password: "Jureg@123",
            Photo: ""
          }]

        }
      })
      this.get("/transition", (schema) => {
        return {
          transition: [{
            tp_transition: "deposit",
            value: 1000,
            category: "Services",
            description: "Refatoramento",
            mail_user: "Filipe.Araujo9@outlook.com",
            created_at: new Date(),
          },
          {
            tp_transition: "witdraw",
            value: 500,
            category: "Home",
            description: "Aluguel",
            mail_user: "Filipe.Araujo9@outlook.com",
            created_at: new Date(),
          },
          ]
        }
      })
    }
  })
  return server
}

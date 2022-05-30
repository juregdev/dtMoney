
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { makeServer } from "../services/server";


interface Idatauser {
  tp_user: string,
  mail: string,
  password: string,
  Photo: string
}

export type formLogin = Omit<Idatauser, 'tp_user' | 'photo'>

interface dataUser {
  userIsLogged: boolean,
  searchUser: (data: formLogin) => void
}

export const DataAPIUser = createContext<dataUser>({} as dataUser)

interface dataDBProps {
  children: ReactNode
}


export function DataDB({ children }: dataDBProps) {

  const [user, setUser] = useState<Idatauser[]>([])
  const [userIsLogged, setUserIsLogged] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      makeServer({ environment: "development" })
    }

    api.get('/users').then((response) => {
      setUser(response.data.user)

    })


  }, [])

  function searchUser({ mail, password }: formLogin) {

    console.log('chegou aqui')
    if (user[0].mail.toLowerCase() === mail.toLowerCase()) {
      if (user[0].password === password) {
        console.log("logado")
        setUserIsLogged(true)
      } else { console.log("senha errada") }
    } else { console.log("email errado") }
  }


  return (
    <DataAPIUser.Provider value={{ userIsLogged, searchUser }}>
      {children}
    </DataAPIUser.Provider>
  )
}

export function useUser() {
  return useContext(DataAPIUser)
}
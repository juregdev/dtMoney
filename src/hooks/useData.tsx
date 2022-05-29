import React from "react";
import { useEffect } from "react";
import { api } from "../services/api";
import { makeServer } from "../services/server";

let dataUsers
let dataTransactions

type propsAPI = {
  name: string
  email: string
  password: string
}



async function callApi() {
  await api.get('/users').then((response) => {
    dataUsers = response.data

    console.log(dataUsers)
  })
  await api.get('/transition').then(response => {
    response
  })
}

const DataAPI = React.createContext(dataUsers)

interface dataDbProps {
  children: JSX.Element
}

export function DataDB({ children }: dataDbProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      makeServer({ environment: "development" })
    }
    callApi();
  }, []);

  return (
    <DataAPI.Provider value={undefined}>
      {children}
    </DataAPI.Provider>
  )


}
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { v4 as uuid } from 'uuid'

interface transitionStateProps {
  category: string
  created_at: Date
  description: string
  mail_user: string
  tp_transition: string
  value: number
  id: string
}

type dataApi = Omit<transitionStateProps, 'created_at' | 'mail_user' | 'id'>;

interface contextProps {
  transition: transitionStateProps[],
  writeTransition: (data: dataApi) => void,
}

const DataApiTransaction = createContext<contextProps>({} as contextProps)

interface TransactionProps {
  children: ReactNode
}

export function Transaction({ children }: TransactionProps) {

  const [transition, setTransition] = useState<transitionStateProps[]>([])
  useEffect(() => {
    api.get('/transition').then(response => {
      setTransition(response.data.transition)
    })

  }, [])

  async function writeTransition(data: dataApi) {

    const dataSend = {
      category: data.category,
      created_at: new Date(),
      description: data.description,
      mail_user: 'Filipe.araujo9@outlook.com',
      tp_transition: data.tp_transition,
      value: Number(data.value),
      id: uuid()
    }

    setTransition([...transition, dataSend])


  }

  return (
    <DataApiTransaction.Provider value={{ transition, writeTransition }}>
      {children}
    </DataApiTransaction.Provider>
  )

}

export function useTransaction() {
  return useContext(DataApiTransaction)
}
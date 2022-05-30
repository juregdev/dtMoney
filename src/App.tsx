import { useEffect, useState } from "react";
import { Transaction } from "./hooks/useTransaction";
import { DataDB, useUser } from "./hooks/useUser";

import { Header } from "./components/Header";
import { NewTransaction } from "./components/forms/NewTransaction";
import { Summary } from "./components/Sumarry";
import { History } from "./components/History";
import { HistoryMobile } from "./components/HistoryMobile";
import { FormLogin } from "./components/forms/Login";


export function App() {

  const [newTransactionIsOpen, setNewTransactionIsOpen] = useState(false)

  const [loginIsOpen, setLoginIsOpen] = useState(false)

  const [isMobile, setMobile] = useState(false)

  const { userIsLogged } = useUser()

  console.log(userIsLogged)

  useEffect(() => {
    if (screen.width < 768) {
      setMobile(true)
    } else { setMobile(false) }
  }, [])

  window.addEventListener("resize", () => {
    if (screen.width < 768) {
      setMobile(true)
    } else { setMobile(false) }
  });

  const changeNewTransactionIsOpen = () => {
    setNewTransactionIsOpen(!newTransactionIsOpen)
  }

  const changeLoginIsOpen = () => {
    setLoginIsOpen(!loginIsOpen)
  }

  return (
    <DataDB>
      <Transaction>
        <Header
          openNewTransition={changeNewTransactionIsOpen}
          isOpen={newTransactionIsOpen}
          loginIsOpen={loginIsOpen}
          openLogin={changeLoginIsOpen}
          userIsLogged={userIsLogged}
        />
        <div className={`flex flex-col justify-center items-center ${userIsLogged === false && 'blur-[6px]'}`}>
          <Summary />
          {isMobile ? <HistoryMobile /> : <History />}
          {userIsLogged ? <NewTransaction isOpen={newTransactionIsOpen} changeModal={changeNewTransactionIsOpen} /> : <FormLogin isOpen={loginIsOpen} close={changeLoginIsOpen} />}
        </div>
      </Transaction>
    </DataDB>
  )
}

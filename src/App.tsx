import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { NewTransaction } from "./components/forms/NewTransaction";
import { Summary } from "./components/Sumarry";
import { FormLogin } from "./components/forms/Login";
import { HistoryMobile } from "./components/HistoryMobile";
import { DataDB } from "./hooks/useData";


export function App() {

  const [newTransactionIsOpen, setNewTransactionIsOpen] = useState(false)

  const [loginIsOpen, setLoginIsOpen] = useState(false)

  const [userIsLogged, setUserIsLogged] = useState(true)

  const [isMobile, setMobile] = useState(false)

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
    <>
      <DataDB>
        <>
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
        </>
      </DataDB>
    </>
  )
}

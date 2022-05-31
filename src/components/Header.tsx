import logo from '../assets/logo.svg'
import profile from '../assets/profile.jpg'


interface headerProps {
  openNewTransition: () => void,
  isOpen: boolean,
  openLogin: () => void,
  loginIsOpen: boolean,
  userIsLogged: boolean,
}

export function Header({ openNewTransition, isOpen, loginIsOpen, openLogin, userIsLogged }: headerProps) {
  return (
    <header className="w-full flex justify-center items-center flex-col bg-blue py-10">
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-y-6">
        <img src={logo} alt="Logo Dt Money" />

        {userIsLogged ? <> <div className='flex gap-4  '>
          <button type="button" onClick={() => openNewTransition()} disabled={isOpen} className="text-[12px] md:text-[16px] text-shape_pricipal font-semibold bg-button py-3 px-8 rounded-md hover:brightness-90 transition-[filter] focus:ring-2 focus:ring-button focus:ring-offset-4 focus: ring-offset-blue focus:outline-none disabled:opacity-60">Nova Transação</button>
          <button type="button" className="h-14 w-14 rounded-full border-2 border-shape_pricipal "> <img src={profile} alt="Profile" className=" w-full h-full object-cover rounded-full" /></button>
        </div> </> : <button type="button" className={`text-[12px] md:text-[16px] text-shape_pricipal font-semibold bg-button py-3 px-10 rounded-md hover:brightness-90 transition-[filter] focus:ring-2 focus:ring-button focus:ring-offset-4 focus: ring-offset-blue focus:outline-none disabled:opacity-60`} onClick={() => openLogin()} disabled={loginIsOpen}>Login</button>}



      </div>
      <div className="w-full h-28"></div>
    </header >
  )
}

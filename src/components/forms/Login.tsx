import { Dialog } from "@headlessui/react"
import { useForm } from "react-hook-form"

import closeImg from '../../assets/close.svg'

interface DialogProps {
  isOpen: boolean,
  close: () => void
}

type formData = {
  name: string
  email: string
  password: string
}

export function FormLogin({ isOpen, close }: DialogProps) {

  const { register, setValue, handleSubmit } = useForm<formData>()

  const userData = handleSubmit(data => {
    console.log(data)


  })

  return (<>
    <Dialog open={isOpen} onClose={() => close()}
      className={`fixed top-0 w-full h-full text-center flex justify-center items-end md:items-center bg-black bg-opacity-60`} >

      <Dialog.Panel className="relative bg-shape_pricipal py-16 px-12 rounded-md w-full max-w-[580px] flex flex-col justify-center ">
        <button className="opacity-60 hover:opacity-100 absolute top-7 right-7 focus:opacity-100 focus:outline-none " onClick={() => close()}><img src={closeImg} alt="Feche a janela" className='w-5 h-5' /></button>

        <Dialog.Title>
          <h2 className="text-[24px] leading-8 text-titulos font-medium mb-8 text-justify px-6">Login</h2>
        </Dialog.Title>
        <Dialog.Description>
          <form className="flex items-center justify-center flex-col gap-4" onSubmit={userData}>
            <input type="text" className="w-full max-w-[480px] h-[64px] bg-input border-2 border-border_input rounded-md text-[16px] px-6" placeholder="Nome" {...register("name")} />

            <input type="email" className="w-full max-w-[480px] h-[64px] bg-input border-2 border-border_input rounded-md text-[16px] px-6" placeholder="E-mail" {...register("email")} />

            <input type="Password" className="w-full max-w-[480px] h-[64px] bg-input border-2 border-border_input rounded-md text-[16px] px-6" placeholder="Senha" {...register("password")} />

            <button type="submit" className="h-[64px] w-full max-w-[480px] bg-green text-[16px] text-shape_pricipal font-medium rounded-md ">Entrar</button>
          </form>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  </>)
}
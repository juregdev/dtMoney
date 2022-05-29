import { FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dialog } from '@headlessui/react'

import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

interface NewTransactionProps {
  isOpen: boolean,
  changeModal: () => void;
}

type formData = {
  title: string,
  price: number,
  category: string
}


export function NewTransaction({ isOpen, changeModal }: NewTransactionProps) {

  const { register, setValue, handleSubmit } = useForm<formData>()
  const [typeTransition, setTypeTransition] = useState('deposit')

  const submit = handleSubmit(data => {
    const { title, price, category } = data
    const FormInfo = {
      title: title,
      price: price,
      category: category,
      type: typeTransition
    }

    setValue("title", "")
    setValue("price", 0)
    setValue("category", "")
    setTypeTransition("deposit")
    changeModal()

  });

  return (
    < >
      <Dialog className="fixed top-0 w-full h-full text-center flex justify-center items-end md:items-center bg-black bg-opacity-60" open={isOpen} onClose={() => changeModal()}>
        <Dialog.Panel className="relative bg-shape_pricipal w-full max-w-[576px] px-12 py-16 md:rounded-md rounded-2xl">
          <button className="opacity-60 hover:opacity-100 absolute top-7 right-7 focus:opacity-100 focus:outline-none " onClick={() => changeModal()}><img src={close} alt="Feche a janela" className='w-5 h-5' /></button>
          <Dialog.Title> <h1 className="text-[24px] text-titulos leading-9 font-semibold text-justify mb-8" >Cadastrar transação</h1> </Dialog.Title>
          <Dialog.Description>
            <form className="flex flex-col gap-y-4 justify-center items-center" onSubmit={submit}>
              <input type="text" className="h-16 w-full max-w-[480px] rounded bg-input border-2 border-border_input text-[16px] px-6 leading-6" placeholder="Titulo" {...register("title")} />
              <input type="number" className="h-16 w-full max-w-[480px] rounded bg-input border-2 border-border_input text-[16px] px-6 leading-6" placeholder="Preço"  {...register("price")} />
              <span className="w-full max-w-[480px] flex flex-col md:flex-row gap-2 justify-center items-center">
                <button type='button' value="deposit" onClick={() => { setTypeTransition("deposit") }} className={`h-[64px] text-titulos text-[16px] flex-1 leading-6 flex gap-5 justify-center items-center px-16 py-5 rounded-md border-2 w-full md:w-auto ${typeTransition == 'deposit' ? 'bg-green bg-opacity-10 border-green border-opacity-10 focus:ring-opacity-20' : '  border-border_input'} focus:outline-none focus:ring-2 focus:ring-green  `}> <img src={income} alt="Entrada" /> Entrada</button>
                <button type='button' value="witdraw" onClick={() => { setTypeTransition("witdraw") }} className={`h-[64px] text-titulos text-[16px] flex-1 leading-6 flex gap-5 justify-center items-center px-16 py-5 b rounded-md border-2 w-full md:w-auto ${typeTransition == 'witdraw' ? 'bg-red-Button bg-opacity-10  border-red-Button border-opacity-10 focus:ring-opacity-20' : 'border-border_input'} focus:outline-none focus:ring-2 focus:ring-red-Button`} > <img src={outcome} alt="Entrada" /> Saída</button>
              </span >
              <input type="text" className="h-16 w-full max-w-[480px] rounded bg-input border-2 border-border_input text-[16px] px-6 leading-6" placeholder="Categoria"  {...register("category")} />

              <button type="submit" className='h-[64px] w-full  max-w-[480px] bg-green text-[16px] font-medium text-shape_pricipal rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shape_pricipal focus:ring-green'>Cadastrar</button>
            </form>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
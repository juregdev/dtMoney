import { useContext } from "react"



export function History() {

  const data = useContext()
  return (
    <div className="w-full max-w-[1120px] text-center px-4">
      <table className="w-full flex flex-col items-center text-[16px] leading-6 gap-y-2 text-textos">
        <thead className="w-full">
          <tr className="w-full flex justify-around py-5 px-8">
            <td className="w-full">Titulo</td>
            <td className="w-full">Preço</td>
            <td className="w-full">Categoria</td>
            <td className="w-full">Data</td>
          </tr>
        </thead>

        <tbody className="w-full flex flex-col gap-y-2">
          <tr className="bg-shape_pricipal  w-full flex justify-around py-5 px-8 rounded shadow">
            <td className="text-black w-full">Desenvolvimento de Site</td>
            <td className="w-full"> R$ 12.0000,00</td>
            <td className="w-full">Venda</td>
            <td className="w-full">25/05/2022</td>
          </tr>

          <tr className="bg-shape_pricipal  w-full flex justify-around py-5 px-8 rounded shadow">
            <td className="text-black w-full"> Desenvolvimento de Site</td>
            <td className="w-full"> R$ 12.0000,00</td>
            <td className="w-full">Venda</td>
            <td className="w-full">25/05/2022</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}
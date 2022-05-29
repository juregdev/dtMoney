import outcome from '../assets/outcome.svg'
import income from '../assets/income.svg'
import total from '../assets/total.svg'

export function Summary() {
  return (<>
    <div className='w-full flex flex-col md:flex-row gap-8 justify-center items-center translate-y-[-15%] md:translate-y-[-45%] px-4'>

      <div id="deposit" className='flex flex-col bg-shape_pricipal gap-y-4 rounded-md shadow-xl px-7 py-10 w-10/12 md:w-full max-w-[400px]  '>
        <div className="flex w-full justify-between items-center ">
          <h2 className="text-[16px] font-normal leading-6">Depósitos</h2>
          <img className="w-8 h-8" src={income} alt="Depósitos" />
        </div>
        <span className="text-[36px] leading-[54px] font-medium">R$ 1500, 00</span>
      </div>

      <div id="witdraw" className='flex flex-col bg-shape_pricipal gap-y-4 rounded-md shadow-xl px-7 py-10 w-10/12 md:w-full max-w-[400px]  '>
        <div className="flex w-full justify-between items-center ">
          <h2 className="text-[16px] font-normal leading-6">Saídas</h2>
          <img className="w-8 h-8" src={outcome} alt="Saídas" />
        </div>
        <span className="text-[36px] leading-[54px] font-medium">R$ 1500, 00</span>
      </div>

      <div id="total" className='flex flex-col bg-green gap-y-4 rounded-md shadow-2xl px-7 py-10 w-10/12 md:w-full max-w-[400px] text-shape_pricipal'>
        <div className="flex w-full justify-between items-center">
          <h2 className="text-[16px] font-normal leading-6">Total</h2>
          <img className="w-8 h-8" src={total} alt="Total" />
        </div>
        <span className="text-[36px] leading-[54px] font-medium">R$ 1500, 00</span>
      </div>
    </div>
  </>)
}
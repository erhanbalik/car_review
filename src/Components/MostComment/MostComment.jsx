import { Link } from 'react-router-dom'
import Data from '../API/Data.json'

const MostComment = () => {
  return (
      <div className='flex flex-col items-center justify-center bg-gray-400 py-5 mt-1'>
        <p className='md:text-4xl font-bold tracking-tight text-slate-700 text-3xl py-4 border-b-2 border-slate-700 self-start ml-4'>
          Haftanin en cok yorum alanlari
        </p>
        <div className='md:flex md:flex-row sm:flex-col'>
          {
            Data.map((data, index) => {
              return (
                  <div key={index}>
                    {data.yorum >= 380 ? <div className='car bg-gradient-to-t from-gray-400 
                    via-slate-600 to-slate-700 w-80 h-[32rem] rounded-xl p-6 space-y-4 mx-3 my-3'>
                          <Link to={"detail/" + data.model}>
                            <img className='w-full h-36 rounded-md' src={data.coverImg}/>
                          </Link>
                          <div className='text-gray-300 font-semibold text-xl flex justify-between pt-8'>
                            <p>{data.brand}</p>
                            <div className='flex items-center'>
                            <p>{data.yorum}</p>
                              <img src='http://cdn.onlinewebfonts.com/svg/img_420387.png' className='h-4 pl-2'/>
                            </div>
                            <p>{data.model}</p>
                          </div>
                          <div className='md:grid grid-cols-2 pt-12 text-gray-300 text-lg select-none sm:flex sm:flex-col sm:items-start'>
                            <p>{data.year}</p>
                            <p>{data.ENGINE}</p>
                            <p>{data.HP}</p>
                            <p>{data.GAS}</p>
                            <p>{data.type}</p>
                          </div>
                        </div>
                        : null}
                  </div>
              )})
          }
        </div>
      </div>
  )
}

export default MostComment
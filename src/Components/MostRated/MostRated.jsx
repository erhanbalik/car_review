import { Link } from 'react-router-dom'
import Data from '../API/Data.json'

const MostRated = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-slate-400 py-5'>
      <p className='md:text-4xl font-bold tracking-tight text-slate-700 text-3xl py-4 border-b-2 border-slate-700 self-start ml-4'>
        Haftanin en cok oy alanlari
      </p>
      <div className='flex md:flex-row flex-col'>
        {
          Data.map((data, index) => {
              return (
                  <div key={index}>
                    {data.oy >= 2000 ? <div className='card bg-[#335c67] w-80 h-[32rem] rounded-xl p-6 space-y-4 shadow-md mx-3 my-3'>
                      <Link to={"detail/" + data.model}>
                        <img className='w-full h-32 rounded-md' src={data.coverImg}/>
                      </Link>
                          <div className='text-gray-300 font-semibold text-xl flex justify-between pt-8'>
                            <p>{data.brand}</p>
                              <div className='flex items-center'>
                                  <p>{data.oy}</p>
                                  <img src='http://simpleicon.com/wp-content/uploads/star.png' className='h-5 pl-2'/>
                              </div>
                            <p>{data.model}</p>
                          </div>
                      <div className='md:grid grid-cols-2 pt-12 text-gray-400 text-lg select-none sm:flex sm:flex-col sm:items-start'>
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

export default MostRated
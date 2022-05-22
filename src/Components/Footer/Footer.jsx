import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 mt-3 h-max flex items-center justify-center w-full py-12'>
        <div className=' flex md:flex-row flex-col items-center justify-around'>
          <div className=' md:w-1/2 text-center w-11/12'>
            <p className=' uppercase'>Car Info</p>
            <p className=' text-red-800 text-left pt-2'>This site developed for sample. All information may not correct. Pls follow original pages.</p>
          </div>
          <div className=' text-center'>
            <p className='py-3'>Developed by Erhan Balik</p>
            <a href="https://github.com/erhanbalik/car_review" target="_blank" className=' text-cyan-400 uppercase' >Github Repo</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
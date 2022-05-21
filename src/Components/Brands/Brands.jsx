import React from 'react'
import brands from './BrandList';
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <div className='w-full bg-slate-200 flex item-center justify-center'>
      <div className='md:flex flex-wrap w-9/12  items-center justify-around grid grid-cols-2 py-2 pl-12'>
      {
        /* List brands from local data */
        
        brands.map((brand, index) => (
          <Link to={"List/" + brand} key={index} className='py-2'>
            <p>{brand}</p>
          </Link>
        ))
      }
      </div>

    </div>
  )
}

export default Brands
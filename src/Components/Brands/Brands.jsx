import React from 'react'
import brands from './BrandList';
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <div className='flex flex-wrap w-full bg-slate-300 shadow-md items-center justify-around'>
      {
        /* List brands from local data */
        brands.map((brand, index) => (
          <Link to={"List/" + brand} key={index}>
            <p>{brand}</p>
          </Link>
        ))
      }

    </div>
  )
}

export default Brands
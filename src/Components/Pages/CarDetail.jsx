import React from 'react'
import {useParams} from "react-router-dom";
import Data from '../API/Data.json';

const CarDetail = () => {
  let {model} = useParams();
  return (
      // Specs each car
    <div className='w-full'>
      {
        Data.map((data, index) => {
          return (
              <div key={index} >
                {data.model === model ?
                    <div className='w-11/12 '>
                      <div className='w-full flex items-center justify-center mb-16'>
                        <img src={data.coverImg} alt={data.brand} className='' />
                      </div>

                      <div className='w-full md:grid grid-cols-2 gap-20 items-start justify-center sm:flex flex-col-reverse justify-center'>

                        <div className='main w-full flex-col items-center justify-center flex'>
                          <div>
                            <p>{data.overview}</p>
                          </div>
                          <div>
                            {
                              data.images.map((img, index) => <img key={index} src={img}/>)
                            }
                          </div>

                        </div>

                        <div className='info md:w-4/5 sm:w-full sm:flex flex-col items-center justify-center'>
                          <div className='flex justify-start items-center'>
                            <img src={data.logo} alt={data.brand} className='h-6'/>
                          </div>
                          <div className='flex w-1/2 items-center justify-around'>
                            <div className='flex flex-col items-center justify-center'>
                              <p>Oy</p>
                              <p>{data.oy}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p>Yorum</p>
                              <p>{data.yorum}</p>
                            </div>
                          </div>
                          <div className='w-full sm:grid grid-cols-2 sm:items-center sm:justify-center md:flex md:flex-col md:items-start md:justify-center'>
                            <p >Marka: {data.brand}</p>
                            <p >Model: {data.model}</p>
                            <p>Yil: {data.year}</p>
                            <p>Yakit: {data.GAS}</p>
                            <p>Motor: {data.ENGINE}</p>
                            <p>Guc: {data.HP} hp</p>
                            <p>Tip: {data.type}</p>
                            <p>Cekis: {data.WD}</p>
                          </div>

                        </div>

                      </div>

                    </div>
                : null}

              </div>
          )
        })
      }
    </div>
  )
}

export default CarDetail
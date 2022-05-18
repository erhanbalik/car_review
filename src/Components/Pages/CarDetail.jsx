import React from 'react'
import {useParams} from "react-router-dom";
import Data from '../API/Data.json';

/* Animation */
import { motion } from "framer-motion";

const CarDetail = () => {
  let {model} = useParams();

  const variants = {
    hidden: {
      opacity: 0,
      x:'100vw'
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {delay: .2, duration: .5}
    },
    exit: {
      x: '-100vw',
      transtion: { ease: 'easeInOut'}
    }
  }

  const imgVariants = {
    enter: {
      x: '100vw',
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x:'-100vw',
      opacity: 0
    }
  }

  return (
      // Specs for each car
    <motion.div className='w-full'
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      {
        Data.map((data, index) => {
          return (
              <div key={index} >
                {data.model === model ?
                    <div className='w-11/12 '>
                      <div className='w-full flex items-center justify-center mb-16'>
                        <img src={data.coverImg} alt={data.brand} className='' />
                      </div>

                      <div className='w-full md:grid grid-cols-2 gap-20 items-start justify-center flex flex-col-reverse'>

                        <div className='main w-full flex-col items-center justify-center flex'>
                          <div>
                            <p>{data.overview}</p>
                          </div>
                          <div>
                            {
                              data.images.map((img) => <motion.img 
                              key={img.id} 
                              src={img}
                              variants={imgVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              drag="x"
                              />)
                            }
                          </div>

                        </div>

                        <div className='info w-full flex flex-col items-center justify-center'>
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
                          <div className='md:w-full w-32 md:grid grid-cols-2 items-start justify-center flex flex-col'>
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
    </motion.div>
  )
}

export default CarDetail
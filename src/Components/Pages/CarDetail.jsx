import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import {GrNext, GrPrevious} from 'react-icons/gr'
import Data from '../API/Data.json';

/* Animation */
import { motion, AnimatePresence } from "framer-motion";

const CarDetail = () => {
  let {model} = useParams();

  /* State for Images preview slider */
  const [imgIndex, setImgIndex] = useState(0);

  /* Animation Variants for page changes */
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

  /* Variants for image slides */
  const imgVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1,
      transition: {duration: 1, delay: .5}
    },
    exit: {
      x:'-500px',
      opacity: 0,
      transition: { ease: 'easeInOut'}
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
              <div key={index}  className='flex w-full items-center justify-center mt-2' >
                {data.model === model ?
                    <div className='w-11/12 '>
                      <div className='w-full flex items-center justify-center mb-16'>
                        <img src={data.coverImg} alt={data.brand} className=' w-9/12' />
                      </div>

                      <div className='w-full md:grid grid-cols-2 gap-20 items-center justify-center flex flex-col-reverse'>
                          <div>
                            <p className=' text-xl font-bold mb-4'>{data.brand} {data.model}</p>
                            <p>{data.overview}</p>
                          </div>

                        <div className='card bg-gradient-to-t from-slate-400
                          via-slate-600 to-slate-700 w-72 h-11/12 rounded-xl p-6 space-y-4 mx-3 my-3'>
                          <img className='w-full h-22 rounded-md' src={data.logo}/>
                            <div className='text-gray-300 font-semibold text-xl flex justify-around pt-8'>
                              <p>{data.brand}</p>
                              <p>{data.model}</p>
                            </div>
                            <div className='md:grid grid-cols-2 justify-center pt-12 text-gray-300 text-lg select-none flex flex-col items-center'>
                              <p>{data.year}</p>
                              <p>{data.ENGINE} LT</p>
                              <p>{data.HP} HP</p>
                              <p>{data.GAS}</p>
                              <p>{data.type}</p>
                            </div>
                        </div>
                      </div>

                      <div className='relative flex w-full items-center justify-center mt-10'>
                              <AnimatePresence>
                              <motion.img 
                              className='w-4/5'
                              key={data.id} 
                              src={data.images[imgIndex]}
                              variants={imgVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              />
                              </AnimatePresence>
                              <div className='absolute top-0 flex w-11/12 h-full items-center justify-between'>
                                  <div>
                                    <button onClick={() => setImgIndex(imgIndex === 0 ? data.images.length - 1 : imgIndex - 1)}><GrPrevious/></button>
                                  </div>
                                  <div><button onClick={() => setImgIndex(data.images.length - 1 === imgIndex ? 0 : imgIndex + 1 )}><GrNext/></button>
                                  </div>
                              </div>
                          </div>

                    </div>
                  : null
                }

              </div>
          )
        })
      }
    </motion.div>
  )
}

export default CarDetail
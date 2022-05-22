import {useParams, Link} from "react-router-dom";
import Data from '../API/Data.json';
import { useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr'
/* Animation */
import { motion, AnimatePresence } from "framer-motion";

function Searched() {

    // which is coming from navigate hook at the Header page to use show car detail
    let {search} = useParams();
    /* State for Images preview slider */
    const [imgIndex, setImgIndex] = useState(0);

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
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {
                Data.map((item) => {
                    return (
                        <div key={item.id}>
                                {/* Display item if search value car model name matched */}
                        {search === item.model.toLowerCase() ?
                        <div className='w-11/12 '>
                        <div className='w-full flex items-center justify-center mb-16'>
                            <img src={item.coverImg} alt={item.brand} className='' />
                        </div>

                                {/* Car main overview */}
                      <div className='w-full gap-20 md:flex-row items-center justify-center flex flex-col-reverse'>
                          <div className=' md:w-1/2 w-11/12'>
                            <p className=' text-xl font-bold mb-4'>{item.brand} {item.model}</p>
                            <p>{item.overview}</p>
                          </div>

                                {/* Car brand details logo etc. */}
                            <div className='card bg-gradient-to-t from-slate-400
                          via-slate-600 to-slate-700 w-72 h-11/12 rounded-xl p-6 space-y-4 mx-3 my-3'>
                          <img className='w-full h-22 rounded-md' src={item.logo}/>
                            <div className='text-gray-300 font-semibold text-xl flex justify-around pt-8'>
                              <p>{item.brand}</p>
                              <p>{item.model}</p>
                            </div>
                            <div className='md:grid grid-cols-2 justify-center pt-12 text-gray-300 text-lg select-none flex flex-col items-center'>
                              <p>{item.year}</p>
                              <p>{item.ENGINE} LT</p>
                              <p>{item.HP} HP</p>
                              <p>{item.GAS}</p>
                              <p>{item.type}</p>
                            </div>
                        </div>

                        </div>
                            <div className='relative flex w-full items-center justify-center mt-10'>
                                <AnimatePresence>
                                    <motion.img 
                                        className=' w-3/4'
                                        key={item.id} 
                                        src={item.images[imgIndex]}
                                        variants={imgVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        />
                                </AnimatePresence>
                                    <div className='absolute top-0 flex w-10/12 h-full items-center justify-between'>
                                            <div>
                                                <button onClick={() => setImgIndex(imgIndex === 0 ? item.images.length - 1 : imgIndex - 1)}><GrPrevious/></button>
                                            </div>
                                            <div><button onClick={() => setImgIndex(item.images.length - 1 === imgIndex ? 0 : imgIndex + 1 )}><GrNext/></button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    : null 
                    }

                                {/* Display item if search value car brand matched */}
                        {search === item.brand.toLowerCase() ? 
                            <div className='w-full mt-8 top-32'>
                            <Link to={"/detail/" + item.model} className='flex md:flex-row items-center justify-evenly flex-col'>
                                <img src={item.coverImg} alt={item.model} className=' h-24' />
                                <p>{item.model}</p>
                            </Link>
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

export default Searched
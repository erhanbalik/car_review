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

                        <div className='w-full md:grid grid-cols-2 gap-20 items-start justify-center sm:flex flex-col-reverse'>

                            <div className='main w-full flex-col items-center justify-center flex'>
                            <div>
                                <p>{item.overview}</p>
                            </div>
                            </div>

                            <div className='info md:w-4/5 sm:w-full sm:flex flex-col items-center justify-center'>
                            <div className='flex justify-start items-center'>
                                <img src={item.logo} alt={item.brand} className='h-6'/>
                            </div>
                            <div className='flex w-1/2 items-center justify-around'>
                                <div className='flex flex-col items-center justify-center'>
                                <p>Oy</p>
                                <p>{item.oy}</p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                <p>Yorum</p>
                                <p>{item.yorum}</p>
                                </div>
                            </div>
                            <div className='w-full sm:grid grid-cols-2 sm:items-center sm:justify-center md:flex md:flex-col md:items-start md:justify-center'>
                                <p >Marka: {item.brand}</p>
                                <p >Model: {item.model}</p>
                                <p>Yil: {item.year}</p>
                                <p>Yakit: {item.GAS}</p>
                                <p>Motor: {item.ENGINE}</p>
                                <p>Guc: {item.HP} hp</p>
                                <p>Tip: {item.type}</p>
                                <p>Cekis: {item.WD}</p>
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
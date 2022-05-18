import {useParams, Link} from "react-router-dom";
import Data from '../API/Data.json';

/* Animation */
import { motion } from "framer-motion";

function Searched() {
    // which is coming from navigate hook at the Header page to use show car detail
    let {search} = useParams();

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

                        <div className='w-full md:grid grid-cols-2 gap-20 items-start justify-center sm:flex flex-col-reverse justify-center'>

                            <div className='main w-full flex-col items-center justify-center flex'>
                            <div>
                                <p>{item.overview}</p>
                            </div>
                            <div>
                                {
                                item.images.map((img, index) => <img key={index} src={img}/>)
                                }
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
                        </div>
                    : null }

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
import Data from '../API/Data.json'
import {useParams, Link} from "react-router-dom";

/* Animation */
import { motion } from "framer-motion";

const BrandDetail = () => {

  /* For page route get brand name */
  let {brand} = useParams();

  /* PAge change animation variants */
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
    <motion.div className='w-11/12 flex flex-col items-center justify-center'
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div className='border-b-2 border-slate-400 ml-6'>
        <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png' className="lg:h-[40vh] h-full"/>
        <p className="text-3xl text-center">{brand}</p>
      </div>

      <div className=' w-1/2 grid grid-cols-2 items-center justify-around mt-6 ml-8'>
      { // Get car brand models to display screen
        Data.map((model) => {
          return (
              <div key={model.id} className=''>
                {brand === model.brand ? 
                <div className=' text-center py-3'>
                    <Link to={"/detail/" + model.model}>{model.model}</Link>
                </div>
                    : null
                }
              </div>
            ) 
        }
        )
      }
      </div>
    </motion.div>
  )
}

export default BrandDetail
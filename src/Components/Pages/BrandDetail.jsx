import Data from '../API/Data.json'
import {useParams, Link} from "react-router-dom";

/* Animation */
import { motion } from "framer-motion";

const BrandDetail = () => {

  let {brand} = useParams();

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
    <motion.div className='w-full flex flex-col items-start absolute top-32'
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div className='relative top-0 border-b-2 border-slate-400 mx-2'>
        <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png' className="lg:h-[45vh] h-full"/>
        <p className="text-3xl text-center">{brand}</p>
      </div>

      <div className='w-full grid grid-cols-2 gap-4 text-center mt-8'>
      { // Get car brand models to display screen
        Data.map((model) => {
          return (
              <div key={model.id} className=''>
                {brand === model.brand ? 
                <div className=''>
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
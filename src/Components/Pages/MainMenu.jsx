import Brands from "../Brands/Brands";
import Hero from "../Hero/Hero";
import MostComment from "../MostComment/MostComment";
import MostRated from "../MostRated/MostRated";
import List from "../List/List"

/* Animation */
import { motion } from "framer-motion";

const MainMenu = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {delay: .5, duration: 1}
    },
    exit: {
      x: '-100vw',
      transtion: { ease: 'easeInOut'}
    }
  }
  return (
    <motion.div className='flex flex-col'
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <Hero />
        <Brands/>
        <MostRated/>
        <MostComment/>
        <List/>
    </motion.div>
  )
}

export default MainMenu
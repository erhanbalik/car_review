import React from 'react'
import { motion } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'

const Signin = () => {
  /* Login Button work with Google only */
  const { loginWithRedirect } = useAuth0();

  /* Animation Variants for page */
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
    <motion.div className='bg-gradient-to-r from-sky-500 to-indigo-500 flex md:flex-row flex-col-reverse w-11/12 items-center justify-center m-auto mx-8 py-10 rounded-xl'
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"

    >
      <form action="" className='flex flex-col w-11/12 items-center justify-center m-auto ml-8'>
        <div className='flex flex-col w-56'>
          <label htmlFor="name">Ad</label>
          <input type="text" name='name' className='bg-gray-200 rounded-md pl-2' />
        </div>
        <div className='flex flex-col w-56 py-4'>
          <label htmlFor="lastName">Soyad</label>
          <input type="text" name='lastName' className='bg-gray-200 rounded-md pl-2' />
        </div>
        <div className='flex flex-col w-56'>
          <label htmlFor="email">E-mail</label>
          <input type="email" name='email' className='bg-gray-200 rounded-md pl-2' />
        </div>
        <div className=' bg-orange-300 w-56 h-10 text-center mt-10 hover:bg-orange-400 cursor-pointer rounded-lg transition-colors'>
          <input type="submit" value="Onayla" className='cursor-pointer mt-2 w-full' onClick={(e) => e.preventDefault(alert("Google ile oturum acin")) } />
        </div>
        <div className=' bg-green-400 w-56 h-10 text-center mt-3 hover:bg-green-300 cursor-pointer transition-colors rounded-lg'>
          <input type="submit" value="Gmail ile oturum ac" className='cursor-pointer mt-2 w-full' onClick={() => loginWithRedirect()} />
        </div>
      </form>
      <div>
        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png" alt="Car" className=' lg:w-full md:w-9/12 w-96' />
      </div>
    </motion.div>
  )
}

export default Signin

// For Sign 
import { useAuth0 } from '@auth0/auth0-react'
// For Animation
import { motion} from "framer-motion";

const Profile = () => {
    // Get data from gmail account with auth0 and Logout option 
    const {user, logout} = useAuth0();

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

    return (
    <motion.div className='flex flex-row items-center justify-around'
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <div>
            <img src={user.picture} alt={user.nickname} className=' rounded-full h-32 my-4' />
            <p className='py-3'>{user.name}</p>
            <p>{user.email}</p>
        </div>
        <div>
            <button onClick={() => logout()} className='bg-orange-600 hover:bg-orange-500 text-white text-md rounded-md px-3 py-1 text-center cursor-pointer transition-colors'>Logout</button>
        </div>
    </motion.div>
  )
}

export default Profile
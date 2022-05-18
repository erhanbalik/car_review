import React, { useState } from 'react'
import {MdDarkMode} from 'react-icons/md'
import {BsFillSunFill} from 'react-icons/bs'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

const Theme = () => {

    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme)
    }
return (
    <div>
    <div className="mode bg-gray-400 rounded-xl flex flex-row relative w-14 h-6 items-center justify-between shadow-md">
    <span>
        <BsFillSunFill/>
    </span>
    <span className="w-7 h-6 shadow-inner bg-white rounded-full absolute left-0" onClick={() => handleTheme()}></span>
    <span>
    <MdDarkMode/>
    </span>
</div>
</div>
)
}

export default Theme
import React, { useState } from 'react'
import Signin from './Signin';
import Theme from './Theme';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
    // state for search input value
  const [search, setSearch] = useState();

    // navigate hook for search value to send which car needed
  const navigate = useNavigate();

    // handler after search submittion and navigate to searched page
  const submitHandler = (e) => {
      //When entered stop page reload
      e.preventDefault();
      // Change the page to searched value
      navigate("searched/" + search);
      // Remove searched value 
      setSearch("");
  }

  return (
    <div className='flex justify-evenly items-center mt-4' >
      {/* LOGO */}
      <Link to={'/'} className='logo'>
        <img className='w-16' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9d560144119253.580803078eedb.jpg" alt="Company Logo" />
      </Link>
      {/* SEARCH BAR */}
      <div className='search w-1/2 text-center'>
          <form onSubmit={submitHandler}>
        <input className="w-1/2 h-8 border border-slate-400 text-left placeholder:text-slate-500 rounded-md px-2 focus:border-orange-400 focus:outline-none placeholder:italic focus:w-full  transition-all"
              type="search" placeholder='Aracini ara' value={search} onChange={(e) => setSearch(e.target.value)}
        />
          </form>
      </div>
      {/* THEME */}
      <Theme/>
      {/* SIGN */}
      <Signin/>
    </div>
  )
}

export default Header
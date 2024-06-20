import { Link, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import React, {Fragment} from 'react';
import useLogout from "../hooks/useLogout";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  


const Navbar = () => {

    const {authUser} = useAuthContext()
    return(
        <>
            <nav className="w-full p-6 flex items-center justify-between">
                    <h1 className="text-red-500">Chat Application</h1>
                    {/* <Dropdown /> */}
                    <div className="flex items-center justify-between gap-4">
                    {/* <Link to="/">Home</Link> */}

                    {!authUser &&
                        <>
                            <Link to="/signin">Sign In</Link>
                            <Link to="/login">Login</Link>
                        </>
                    }
                    {authUser &&
                        <Dropdown authUser={authUser} />
             
                    }
                    
                    </div>


            </nav>
        </>
    )
}

export default Navbar;




const Dropdown = ({authUser}) => {
    const { loading, logout } = useLogout();
    return(
        <div className="">
      
                 <Menu as='div' className='relative inline-block text-left'>
            <MenuButton className="flex gap-6 items-center">
                <h1 className="font-semibold">{authUser.name}</h1>
                <img 
                className="h-12 w-12 rounded-full border hover:shadow-lg"
                src={`https://www.robohash.org/${authUser.name}`} />
            </MenuButton>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <MenuItems className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Profile
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href='#'
                        onClick={logout}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Logout
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
      </div>
    )
}


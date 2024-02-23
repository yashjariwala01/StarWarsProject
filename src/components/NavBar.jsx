import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";

function Navbar() {
    return (
        <nav className="bg-gray-800 shadow-md min-h-10">
            <div className="mx-auto px-6 py-3">
                <div className="flex justify-center items-center">
                    <div className="flex space-x-4 px-3 py-2 rounded-full">
                        <NavLink
                            to="/"
                            className="flex items-center gap-1 text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full"
                            activeClassName="text-yellow-400">
                            <MdHomeFilled className='mt-0.5' />
                            Home
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

export default function Navbar() {
    return (
        <header>
            <nav id='main-nav'>
                <ul>
                    <li>
                        <NavLink to='/about' 
                            className='navlinks'
                            activeClassName='selected'    
                        >
                            Company
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resources' 
                            className='navlinks'
                            activeClassName='selected'
                        >
                            Resources
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/home' 
                            id='logo'
                            activeClassName='selected'
                        >
                            <h1 className='h2'>presQRibe</h1>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/search' 
                            className='navlinks'
                            activeClassName='selected'
                        >
                            Search
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/sign-up' 
                            className='navlinks'
                            activeClassName='selected'
                        >
                            Register
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/login' 
                                className='navlinks'
                                activeClassName='selected'
                            >
                                Login
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}

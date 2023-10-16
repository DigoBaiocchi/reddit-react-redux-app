import { useState } from 'react';

import './Header.css'

export const Header = (props) => {
    // const [username, setUsername] = useState('New username');

    // const handleChange = ({ target }) => {
    //     const { name, value } = target;
    //     setUsername(value);
    // }
    return (
        <header>
            <nav className='nav-bar'>
                <a className='nav' href=''>Best</a>
                <a className='nav' href=''>Popular</a>
                <a className='nav' href=''>New</a>
            </nav>
            <div className='search-section'>
                <input id="search" className='search' onChange={props.handleChange}></input>
                <button className='search'd>Search</button>
            </div>
        </header>    
    );
};
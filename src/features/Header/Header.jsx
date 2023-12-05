import { useState } from 'react';

import './Header.css'

export const Header = (props) => {
    return (
        <header>
            <nav className='nav-bar'>
                <a className='nav' href=''>Best</a>
                <a className='nav' href=''>Popular</a>
                <a className='nav' href=''>New</a>
            </nav>
            <div className='search-section'>
                <input id="search" className='search-input' onChange={props.handleChange}></input>
                <button className='search-button'>Search</button>
            </div>
        </header>    
    );
};
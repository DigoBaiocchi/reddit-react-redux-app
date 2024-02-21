import { useState } from 'react';

import './Header.css'

export const Header = (props) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        setSearchInput(value);
        console.log(convertInput(searchInput));
    }

    const convertInput = (inputValue) => {
        return inputValue.split('').map(char => {
        const ascii = char.charCodeAt(0);
        if (ascii === 32) {
            return "%" + 20;
        } else if ((ascii >= 65 && ascii <= 90)) {
            return char;
        } else if (ascii >= 97 && ascii <= 122) {
            return char;
        } else {
            return "%" + ascii;
        }
        }).join('');
    }
    return (
        <header>
            <nav className='nav-bar'>
                <a className='nav' href='#' onClick={() => props.setPageView("home")}>Home</a>
                <a className='nav' href='#' onClick={() => props.setPageView("hot")}>Hot</a>
                <a className='nav' href='#' onClick={() => props.setPageView("popular")}>Popular</a>
                <a className='nav' href='#' onClick={() => props.setPageView("new")}>New</a>
            </nav>
            <div className='search-section'>
                <input id="search" className='search-input' onChange={handleChange}></input>
                <button className='search-button'>Search</button>
            </div>
        </header>    
    );
};
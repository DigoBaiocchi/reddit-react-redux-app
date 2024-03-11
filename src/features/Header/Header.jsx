import { useEffect, useState } from 'react';
import { redditSearchApi } from '../../api/redditApi';

import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

export const Header = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchInput(convertInput(e.target.value));
        console.log(convertInput(searchInput));
    };

    const convertInput = (inputValue) => {
        const specialCharacters = ["!", '"', "(", ")", "*", "-", ".", "<", ">", "_", "~"];
        
        return inputValue.split('').map(char => {
        const ascii = char.charCodeAt(0);
        if (ascii === 32) {
            return "%" + 20;
        } else if ((ascii >= 65 && ascii <= 90)) {
            return char;
        } else if (ascii >= 97 && ascii <= 122) {
            return char;
        }  else if (specialCharacters.includes(char)) {
            return char;
        } else {
            return "%" + Number(ascii).toString(16);
        }
        }).join('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchInput));
        setSearchInput('');
    }; 

    const handleClick = (pageName) => {
        dispatch(setSearchTerm(pageName));
    };

    useEffect(() => {
        setSearchInput(searchTerm);
    }, [searchTerm]);

    return (
        <header>
            <nav className='nav-bar'>
                <a className='nav' href='#' onClick={handleClick("home")}>Home</a>
                <a className='nav' href='#' onClick={ handleClick("hot")}>Hot</a>
                <a className='nav' href='#' onClick={handleClick("popular")}>Popular</a>
                <a className='nav' href='#' onClick={handleClick("new")}>New</a>
            </nav>
            <div className='search-section'>
                <input 
                    id="search" 
                    className='search-input' 
                    onChange={handleChange}
                    placeholder='Search on reddit...'
                    value={searchInput}
                >
                </input>
                <button 
                    className='search-button' 
                    onClick={handleSubmit} 
                    href='#'
                    >
                        Search
                </button>
            </div>
        </header>    
    );
};
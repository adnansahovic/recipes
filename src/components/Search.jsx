import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Search.scss'


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/' + input);
    }

  return (
    <form className='form' onSubmit={submitHandler}>
        <div>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        {/* <h1>{input}</h1> */}
        </div>
    </form>
  )
}

export default Search
import React from 'react'
import Searchstyle from './search.module.css'
import { useState } from 'react'

const Search = ({onsearch , onclear}) => {

const [data , setData] = useState('')

const changehandler = (e) => {
    setData(e.target.value)
}

const submithandler =(e) => {
    e.preventDefault();
    onsearch(data)
    setData('')


}
  return (
    <>
    <div className={Searchstyle.container}>
    <form className={Searchstyle.form} onSubmit={submithandler}>
    <input className={Searchstyle.search} value={data} onChange={changehandler} type='text' placeholder='search here ...'></input> 
    <button className={Searchstyle.button}>Search</button>
    
    </form>
    <button onClick={onclear} className={Searchstyle.clrbutton}>Clear</button>

    </div>
     
    </>
  )
}

export default Search

import React from 'react'
import './components.css'

const Searchbar = ({placeholder,data,text}) => {
  return (
   <div>
     <div className='searchinputs'>
       <input type={text} placeholder={placeholder}/>
       <i class="fa-solid fa-magnifying-glass"></i>

     </div>
     <div></div>
   </div>
  )
}

export default Searchbar
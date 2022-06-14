import React, { useState }  from 'react'

import './components.css'


function Header() {
  const lists=['courses','metrics','mentorship']
  const [name,setName]=useState('joseph')
  function revelNme(){
    setName(name='simon')
  }
 
return (
 <>
    <div className='header'>
        
      <h3 >Learn at your own pace</h3>
      <p>Build consistency and make your dream grades a reality</p>
    <div >
      <ul className='lists'>
        {lists.map((items) => <li key={items}>  <a  href='#'>{items}</a></li>)}
             </ul>
</div>
       
    </div>
    <div>
        <h4>hello {name},</h4>
        <p id='para'> Welcome to your dashboard</p>
    </div>
   <div id='course' className='container'>
     <div className='items'>

     </div>
     <div className='items'>
       
     </div>
     <div className='items'>
       
     </div>
     <div className='items'>
       
     </div>
   </div>
  
  </> 
)
}



export default Header
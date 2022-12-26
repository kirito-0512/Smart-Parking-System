//import React, { useEffect, useState } from 'react'
import thumbnail from './../../src/images/thumbnail.jpg'

const Slot = () => {
  /*const [items,setItems] = useState([]);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setItems(json))
  }, [])*/
  var cat1=localStorage.getItem('count');
  console.log(cat1);
  return (
    <>
      <div className='container'>
        <div className='SlotNode'>
            <div className='thumbnail'>
                <img src={thumbnail} alt="node"></img>
            </div>
            <div className='description'>
                <h1><b>NODE 1</b></h1>
                <h4> Slots Available </h4>
                <h4> {cat1} </h4>
            </div>
        </div>
        <div className='SlotNode'>
            <div className='thumbnail'>
                <img src={thumbnail} alt="node"></img>
            </div>
            <div className='description'>
                <h1><b>NODE 2</b></h1>
                <h4> Slots Available </h4>
                <h4> 20 </h4>
            </div>
        </div>
        
      </div>
      <a href='/login' className="book-btn" >BOOK SLOT</a>
      
      
    </>
  )
}

export default Slot
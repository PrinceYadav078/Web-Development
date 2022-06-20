import React, { useState } from 'react'



function Demo() {
    const [inputItem, setInputItem]= useState('')
    const [itemArr, setItemArr]= useState([])

    let addItem=(item)=>{
        setItemArr([...itemArr, item])
        setInputItem('')
    }
  return (
    <div>
        <input type='text'value={inputItem} onChange={(e)=>setInputItem(e.target.value)} ></input>
        
        <button onClick={()=>addItem(inputItem)}>Add Item</button>
        <ul>
            {
                itemArr.map((item)=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        
    </div>
  )
}

export default Demo
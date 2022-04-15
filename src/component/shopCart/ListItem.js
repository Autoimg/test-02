import React from 'react'

export default function ListItem({id,cname,price,mount,addMount,decMount}) {
  return (
    <li>
    <span>{cname}</span>
    <br />
    <span>{price}</span>
    <br />
    <p>
      <button onClick={()=>{decMount(id)}}>-</button>
      {mount}
      <button onClick={()=>{addMount(id)}} >+</button>
    </p>
  </li>
  )
}

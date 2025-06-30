import React from 'react'

function Header_icon(props) {
  return (
      <div className='text-white  flex flex-wrap  items-center gap-2 cursor-pointer hover:underline underline-offset-8'>
      <props.Icon  />
        <h2 >{props.name}</h2>
    </div>
    
  )
}

export default Header_icon

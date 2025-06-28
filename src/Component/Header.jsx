import React from 'react'
import logo from '../assets/images.png'
import { HiHome, HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2';
import { HiPlus,HiDotsVertical } from 'react-icons/hi';
function Header() {
  const menu=[
    {name:'home',
      Icon:HiHome,
    },
    {name:'search',
      Icon:HiMagnifyingGlass,
    },
    {name:'watchlist',
      Icon:HiPlus,
    },
    {
      name:'originals',
      Icon:HiStar,  
    },
    {
      name:'movies',
      Icon:HiPlayCircle,
    },
    {
      name:'series',
      Icon:HiTv,
    }
  ]

  

  return (
    <div>
      
      <img src={logo} alt=" logo" className='w-[80px] object-cover '/>
    </div>
  )
}

export default Header

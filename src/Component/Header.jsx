import React from 'react'
import logo from '../assets/images.png'
import { HiHome, HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2';
import { HiPlus,HiDotsVertical } from 'react-icons/hi';
import Header_icon from './Header_icon';
import profile from '../assets/146007.png'
function Header() {

  const [toggle, setToggle] = React.useState(false);
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
    <div className='flex  items-center justify-between p-5'>
      <div className='flex gap-9  items-center '>
        <img src={logo} alt=" logo" className='w-[80px] md:w-[100px] object-cover ' />
        <div className=' gap-6 flex-wrap hidden md:flex items-center'>
          {
          menu.map((item, index) => {
            return (
              <Header_icon key={index} name={item.name} Icon={item.Icon} />
            )
          })
        }
        </div>
        <div className='flex gap-3   md:hidden items-center hover:underline underline-offset-8'>
          {
            menu.map((item, index) => {
              return index<3&& (
                <Header_icon key={index} name='' Icon={item.Icon}/>
              )
            })
          }
        </div>
        <div className='flex md:hidden ' onClick={()=>setToggle(!toggle)}>
          <Header_icon name='' Icon={HiDotsVertical}/>
          {toggle?<div className='absolute top-17  bg-[#0c0c0c] px-6 py-3 rounded-[2px] border-gray-600 border-1'>
            {menu.map((item,index)=>{
              return index>=3&& (
                <Header_icon key={index} name={item.name} Icon={item.Icon} />
              )
            })}
          </div>:null}
        </div>
        
      </div>
      <div>
        <img src={profile} alt="" width={'40px'}  />
      </div>
      
      
    </div>
  )
}

export default Header

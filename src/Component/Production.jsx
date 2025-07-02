import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import starwars from '../assets/images/starwar.png'
import pixar from '../assets/images/pixar.png'
import national from '../assets/images/nationalG.png'


import vdisney from '../assets/Video/disney.mp4'
import vmarvel from '../assets/Video/marvel.mp4'
import vstarwars from '../assets/Video/star-wars.mp4' 
import vpixar from '../assets/Video/pixar.mp4'
import vnational from '../assets/Video/national-geographic.mp4'   


function Production() {

    const productionData = [
        {
            id:"1",
            image:disney,
            video:vdisney,
        },{
            id:"2",
            image:marvel,
            video:vmarvel,
        },{
            id:"3",
            image:starwars,
            video:vstarwars,
        },{
            id:"4",
            image:pixar,
            video:vpixar,
        },{
            id:"5",
            image:national,
            video:vnational,
        }
    ]

  return (
    <div className='flex gap-2 md:gap-8 p-5 px-16 '>
      {productionData.map((item,index)=>{
        return(
          <div key={item.id} className='p-2 border-2 shadow-2xl shadow-black border-gray-600 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out
            cursor-pointer relative group' >
            <img src={item.image} alt=""  className='w-full z-0' />
            <video src={item.video}  autoPlay loop playsInline className='absolute top-0 left-0 w-full h-full object-cover rounded-xl z-[-1] opacity-0 group-hover:opacity-[50%]'></video>

            </div>
        )
      })}
    </div>
  )
}

export default Production

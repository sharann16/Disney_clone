import React, { useState } from 'react'
// import { getMovieByGernerId } from '../Service/GlobalApi'
import gernerlist from '../constant/GernerList'
import GernerScroll from './GernerScroll'

function MovieByGerner() {
    
  return (
    <div>
        
      {gernerlist.map((item,index)=>{
          return index < 9 &&(
            <div className='p-8 px-8 md:px-16' key={index}>
                <h1 key={index} className='font-bold text-white '>{item.name}  </h1>
                <GernerScroll movieid={item.id} indexx={index}/>
            </div>
        )
      })}
    </div>
  )
}

export default MovieByGerner

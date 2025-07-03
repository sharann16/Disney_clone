import React from 'react'
const baseimageurl = "https://image.tmdb.org/t/p/original";

function HrmovieCard({item}) {

  return (

      <div className='hover:scale-110 transition-all duration-150 ease-in-out'>
          <img src={baseimageurl + item.backdrop_path} alt="" className='w-[210px] rounded-2xl 
     hover:border-4 border-gray-400'/>
            <h1 className='text-white w-[210px] font-bold pt-2'>{item.title}</h1>
          </div>    
  )
}

export default HrmovieCard

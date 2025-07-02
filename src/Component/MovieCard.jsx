import React from 'react'

function MovieCard({item}) {
  const baseimageurl = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <img src={baseimageurl + item.poster_path} alt="" className='w-[210px] rounded-2xl hover:scale-110 transition-all duration-150 ease-in-out
      hover:border-4 border-gray-400'/>
    </>
  )
}

export default MovieCard

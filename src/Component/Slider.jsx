import React, { use, useEffect, useRef, useState } from 'react'
import api from '../Service/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function Slider() {
    const [trendingData, setTrendingData] =useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const eleRef=useRef();
    const screenWidth = window.innerWidth;
    useEffect(() => {
        trending();
    },[])

    const trending = ()=>{
        api.getTrending().then((res)=>{
            setTrendingData(res.data.results)
        })
    }
    const scrollLeft = (element) => {
        element.scrollLeft-=screenWidth-108;

    };
    const scrollRight = (element) => {
        element.scrollLeft+=screenWidth -108;
    };
  return (
    <div>
          <HiChevronLeft className='text-white text-[30px] absolute mt-[150px] mx-[30px] hidden md:block cursor-pointer '  onClick={()=>scrollLeft(eleRef.current)}/>
          <HiChevronRight className='text-white text-[30px] absolute mt-[150px] mx-[30px] right-0 hidden md:block cursor-pointer' onClick={()=>scrollRight(eleRef.current)} />

    <div className='flex  overflow-x-auto px-16 py-5 scrollbar-hide scroll-smooth ' ref={eleRef}>
      {
        trendingData.map((item,index)=>{
            return trending&&(
              
                <img src={baseUrl + item.backdrop_path} alt="" key={index} className='object-left-top min-w-full md:h-[310px] object-cover
                 rounded-l mx-2 border-2 hover:border-gray-300 transition-all ease-in-out duration-150' />

            )
        })
      }
    </div>
    </div>
  )
}

export default Slider

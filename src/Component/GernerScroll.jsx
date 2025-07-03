import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Service/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HrmovieCard from './HrmovieCard';

function GernerScroll({movieid,indexx}) {
  const [movieData, setMovieData] = useState([]);
  const element = useRef();
    useEffect(()=>{
        getmovieByid();
    },[])
    
    console.log(movieid, movieData);
    const getmovieByid=()=>{
        GlobalApi.getMovieByGernerId(movieid).then((res)=>{
            setMovieData(res.data.results)
        })
    }
    const scrollLeft = (element) => {
        element.scrollLeft -=  508;
    }
    const scrollRight = (element) => {
        element.scrollLeft +=  508;
    };

  return (
    <div className=''>
      <HiChevronLeft className={`text-white text-[30px] absolute ${indexx%3==0?'mt-[70px]':'mt-[150px]'}  mx-[30px] left-0 hidden md:block cursor-pointer `}  onClick={()=>scrollLeft(element.current)}/>
      <HiChevronRight className={`text-white text-[30px] absolute ${indexx % 3 == 0 ? `mt-[70px]` : `mt-[150px]`} mx-[30px] right-0 hidden md:block cursor-pointer`} onClick={()=>scrollRight(element.current)} />
     
   
    <div ref={element} className='flex gap-5 p-3 pt-5 pb-5 overflow-x-auto scrollbar-hide scroll-smooth '>
      
        {movieData.map((item,index)=>(
          <>
          { indexx % 3 == 0 ? <HrmovieCard item={item} /> : <MovieCard item={item} />}
          </>
        ))}
      </div>
    </div>
  ) 
}

export default GernerScroll

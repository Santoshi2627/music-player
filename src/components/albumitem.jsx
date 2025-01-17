
import React from 'react';
import {useNavigate} from "react-router-dom"

const AlbumItem= ({ id,image,title,desc}) => {
    const navigate=useNavigate()
    // console.log(title)
    return (
        <>        <div className="w-full mt-5 sm:w-full">
             {/* <h1 className="my-5 font-bold text-2xl">Featured charts</h1> */}
        <div onClick={()=>{navigate(`/albums/${id}`)}}className="min-w-[200px]  p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300 ">
        <img className="rounded  h-[250px] hover:scale-110 transition duration-1000" src={image} alt={title} />
        <p className="text-black text-lg mt-2 bold">{title}</p>
         <p className='font-light text-sm w-full max-w-sm'>{desc}</p>
    </div> 
    </div>
        </>
        );
    };
    
export default AlbumItem;

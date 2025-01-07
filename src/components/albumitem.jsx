
import React from 'react';
import {useNavigate} from "react-router-dom"

const AlbumItem= ({ id,image,title,desc}) => {
    const navigate=useNavigate()
    // console.log(title)
    return (
        <>        <div className="w-full sm:w-full">
             {/* <h1 className="my-5 font-bold text-2xl">Featured charts</h1> */}
        <div onClick={()=>{navigate(`/albums/${id}`)}}className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300">
        <img className="rounded  h-[250px] " src={image} alt={title} />
        <p className="text-white text-sm mt-2 bold">{title}</p>
         <p className='font-light text-xs w-full max-w-sm'>{desc}</p>
    </div> 
    </div>
        </>
        );
    };
    
export default AlbumItem;

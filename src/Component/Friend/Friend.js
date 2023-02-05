import React from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

const Friend = () => {
    const friend=useLoaderData()
    const navigate=useNavigate()
    return (
        <div className='container mx-auto py-[1px] flex'>
            <div className='w-[430px] h-[93vh] p-2 ring-2 rounded-lg overflow-auto'>
            {friend.map(sho=>(
                <div className='flex bg-[#084c61] gap-3 my-3 rounded-md'>
                    <img className='w-[100px] h-[100px] rounded-l-lg' src={sho.image}/>
                     <div>
                     <h1 className='text-[20px] capitalize'>Name:{sho.name}</h1>
                     <h1 className='capitalize text-[18px]'>Company:{sho.company}</h1>
                     <button onClick={()=>navigate(`/friend/${sho.id}`)} className='bg-[#307a8b] text-white rounded py-1 px-4 mt-1'>Show Details</button>
                     </div>
                </div>
            ))}
            </div>
            <div className='full p-[20px]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Friend;
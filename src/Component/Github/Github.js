import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import git from '../../photo/git.png'

const Github = () => {
    const [search,setsearch]=useState(null)
    const navigate=useNavigate()
     const handlesubmit=async(e)=>{
        e.preventDefault()
        await fetch(`https://api.github.com/users/${search}`)
        navigate(`/profile/${search}`)
     }
    return (
        <div className='w-screen h-[80vh] flex flex-col justify-center items-center'>
            <div className='flex justify-center my-[15px]'>
                    <img className='w-[200px] rounded-md'  src={git} />
                </div>
           <form onSubmit={handlesubmit}>
           <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search a  GitHub Username" className="input ring-2 py-2 px-3 ring-[#7c0829] input-bordered input-primary w-[500px]" />
           </form>
        </div>
    );
};

export default Github;
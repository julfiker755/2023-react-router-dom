import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const datails=useLoaderData()
    const [img,setimg]=useState(null)
    const navigate=useNavigate()
    const {name,company,price,reviews,description}= datails || {}
    // image change
    useEffect(()=>{
        if(datails){
        setimg(datails?.images[0].url)
        }
    },[datails])
    return (
        <>
        <div className='container py-[20px] mx-auto grid grid-cols-2 gap-8'> 
            <div className='w-full h-[500px]'>
                <img className='w-full h-[500px] rounded-md' src={img}/>
                <div className='py-3 flex space-x-3'>
                 {datails.images.map((image,index)=>(
                    <img onClick={()=>setimg(image?.thumbnails?.full.url)} className="w-[100px] h-[100px] rounded-md cursor-pointer" src={image?.thumbnails?.full.url}  key={index}/>
                    // console.log(index,image?.thumbnails?.full.url)
                 ))
                 }
                </div>
            </div>
            <div>
            <h1 className='text-[40px] text-bold'>Product Name:{name}</h1>
            <h1 className='text-[25px]'>Your Company:{company}</h1>
            <h2 className='text-[18px]'>Product Price:{price}</h2>
            <h2 className='text-[16px]'>Product Reviews:{reviews}</h2>
            <p className='py-2'>{description}</p>
            <button  className='bg-[#196779] text-white rounded py-2 px-8'>Add to Cart</button>
            </div>
        </div>
        <div className='mt-[120px] text-center'>
        <button onClick={()=>navigate("/product")} className='bg-[#3927aa] rounded-md w-[400px] py-2 text-white'>Your Product</button>
        </div>
        </>
    );
};

export default Details;

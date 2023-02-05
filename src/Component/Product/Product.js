import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Singleproduct from './Singleproduct';

const Product = () => {
  const product = useLoaderData();
  const [pop, setpop] = useState(null)
  const [paginationpro, setpaginationpro] = useState([])
  useEffect(() => {
    setpaginationpro(crepagation(product))
  }, [product])

  const crepagation = (productitems, limit = 8, offset = 0) => {
    let arr = [];
    productitems.forEach((item, index) => {
      if (index >= offset && index < limit + offset)
        arr.push(item)

    })
    return arr;
  }
  function Seepagination() {
    if (product.length == paginationpro.length) return
    const newproduct = crepagation(product, 4, paginationpro.length)
    setpaginationpro([...paginationpro, ...newproduct])
  }
  return (
    <div className='container mx-auto py-[5px]'>
      <div className='flex flex-wrap gap-2 justify-center'>
        {paginationpro.map(p => <Singleproduct handlepop={() => setpop(p)} key={p.id} pro={p}></Singleproduct>)}
      </div>
      {/***********  pop alert ***********/}
      {pop && <div className='fixed tt top-0 left-0 bottom-0 right-0 bg-[#30178b] w-screen h-screen overflow-y-hidden z-[10000000]'>
        <div className='flex  justify-center items-center h-full'>
          <div onClick={() => setpop(null)} className='fixed right-10 top-10 cursor-pointer text-[40px]'>X</div>
          <div className='border border-[red] w-[600px] h-[770px] p-2 rounded-md'>
            <img className='w-full h-full' src={pop?.image} />
          </div>
        </div>
      </div>}
      {/****** pagination buttton **********/}
      {product.length != paginationpro.length &&
        <div className='flex justify-center mt-2'>
          <button onClick={() => Seepagination()} className='text-white bg-[#431683] py-2 px-4 rounded-md'>See Your product</button>
        </div>
      }
    </div>
  );
};

export default Product;
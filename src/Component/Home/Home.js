import React from 'react';
import router from '../../photo/router.svg'


const Home = () => {
    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-[50px] font-bold mb-[70px]'>React Router Dom Version 6</h1>
            <div className='bg-[red]  hover:scale-125 transition-all mx-auto w-[400px] h-[300px] p-2 ring-4 flex items-center justify-center rounded-md'>
                <img className='text-white' src={router}/>
                
            </div>
        </div>
    );
};

export default Home;
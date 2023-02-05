import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-nav h-[50px] sticky top-0 left-0'>
            <ul className='flex justify-center space-x-3 h-[50px] items-center'>
                <li className='text-white font-bold text-[17px]'><CustomLink to="/home">Home</CustomLink></li>
                <li className='text-white font-bold text-[17px]'><CustomLink to="/product">Product</CustomLink></li>
                <li className='text-white font-bold text-[17px]'><CustomLink to="/friend/recZkNf2kwmdBcqd0">Shop</CustomLink></li>
                <li className='text-white font-bold text-[17px]'><CustomLink to="/github">Github</CustomLink></li>
            </ul>
        </div>
    );
};

export default Header;
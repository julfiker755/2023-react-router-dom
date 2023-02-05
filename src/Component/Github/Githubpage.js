import React, { useEffect, useState } from 'react';
import { useHref, useNavigate, useParams } from 'react-router-dom';
import { FcBusinessman } from 'react-icons/fc';
import { FcSalesPerformance } from 'react-icons/fc';
import { FcAddressBook } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiBookAura } from 'react-icons/gi';
import { IoLogoBuffer } from 'react-icons/io';
import { BsStarHalf } from 'react-icons/bs';
import { RxSketchLogo } from 'react-icons/rx';
import { SiWipro } from 'react-icons/si';
import { BsBackspaceFill } from 'react-icons/bs';

const Githubpage = () => {
    const { username } = useParams()
    const [git, setgit] = useState([])
    const [repo, setrepo] = useState([])
    const navigate=useNavigate()
    //react-toastify
    const notify = () => toast.success('🌹 Thank You Follow Your Github', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    // user profile data
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setgit(data))
    }, [username])
    // All repositori data
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json())
            .then(data => setrepo(data))
    }, [])
    // deastraing data
    const { name, login, avatar_url, followers, following, public_repos, bio } = git || {}
    return (
        <div className='container mx-auto py-[40px] flex gap-6'>
            {/* git-left */}
            {/* react-toastify */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='w-[600px] p-3 bg-[#023e8a] rounded-md'>
                <div className='flex justify-center my-[15px]'>
                    <img className='w-[280px] rounded-full ring-[#09bc8a] ring-4' src={avatar_url} />
                </div>
                <h1 className='text-[30px] font-bold'>{name}</h1>
                <h1 className='text-[25px] text-[#d2c8c8] capitalize'>{login}</h1>
                <button onClick={notify} className='w-full my-3 rounded-md py-2 text-white bg-[#540b0e]'>Follow</button>
                <p className='text-[16px] py-[1]'>{bio}</p>
                <ul className='flex justify-between mt-[15px]'>
                    <li className='text-[20px] flex items-center'><FcBusinessman />{followers} <strong>Followers</strong></li>
                    <li className='text-[20px] flex items-center'><FcSalesPerformance />{following} <strong>Following</strong></li>
                    <li className='text-[20px] flex items-center'><FcAddressBook />{public_repos} <strong>Repos</strong></li>
                </ul>
            </div>
            {/* git right */}
            <div className='w-full rounded-md p-[10px] bg-[#2e76a3]'>
                <ul className='flex rounded-md w-[700px] justify-between bg-[#0a9396] py-[10px] my-3 px-3 cursor-pointer'>
                    <li onClick={()=>navigate('/github')} className='flex items-center text-[20px] gap-1'><BsBackspaceFill/>Back</li>
                    <li className='flex items-center text-[20px] gap-1'><GiBookAura/>Overview</li>
                    <li className='flex items-center text-[20px] gap-1'><IoLogoBuffer/>Repositories</li>
                    <li className='flex items-center text-[20px] gap-1'><SiWipro/>Projects</li>
                    <li className='flex items-center text-[20px] gap-1'><RxSketchLogo/>Pakages</li>
                    <li className='flex items-center text-[20px] gap-1'><BsStarHalf/>Stars</li>
                </ul>
                <div className='flex flex-wrap gap-2 '>
                    {repo.map((repodata => (
                        <a target="_blank" href={`https://github.com/${username}/${repodata.name}`} className='bg-[#432818] py-1 px-2 rounded-md text-white cursor-pointer'>{repodata.name}</a>
                    )))}
                </div>
            </div>
        </div>
    );
};

export default Githubpage;
import React from 'react'
import searchIcon from '../asset/searchIcon.png'
import notificationIcon from '../asset/notificationIcon.png'
import userImage from '../asset/userImage.png'

const Navbar = () => {
    return (
        <div className='mt-8 ml-8'>
            <div className='flex place-content-between'>
                <h1 className='text-2xl font-bold'>Dashboard</h1>

                <div className='flex mr-8 justify-center items-center'>
                    <div className='flex bg-white w-[180px] h-[30px] justify-center items-center rounded-xl'>
                        <input type="text" name="text" placeholder='Search...' className='pl-2 text-xs md:text-sm font-normal w-[140px] focus:outline-none text-[#B0B0B0]' />
                        <img src={searchIcon} alt="" className='' />
                    </div>

                    <img src={notificationIcon} alt="" className='w-4 md:w-[18px] h-4 md:h-5 mx-4 md:mx-7 text-center' />
                    <img src={userImage} alt=""/>
                </div>

            </div>

        </div>
    )
}

export default Navbar

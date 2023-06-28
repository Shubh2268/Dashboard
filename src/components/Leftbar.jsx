import React from 'react'
import dashboardIcon from "../asset/dashboardIcon.png"
import transactionIcon from "../asset/transactionIcon.png"
import scheduleIcon from "../asset/scheduleIcon.png"
import userIcon from "../asset/userIcon.png"
import settingIcon from "../asset/settingIcon.png"

const Leftbar = () => {
    return (
        <div className='h-full'>

            <div className='h-[944px] w-[280px] m-5 bg-black text-white rounded-[30px]'>

                <h1 className='text-4xl font-bold pt-[60px] pl-[50px]'>Board.</h1>

                <div className='flex flex-col space-y-96'>
                    <div className='flex flex-col pl-[50px] pt-7'>

                        <div className='flex items-center my-2'>
                            <img src={dashboardIcon} alt="" className='w-[18px] h-[18px]' />
                            <span className='text-lg font-bold ml-5'>Dashboard</span>
                        </div>

                        <div className='flex items-center my-4'>
                            <img src={transactionIcon} alt="" className='w-[18px] h-[18px]' />
                            <span className='text-lg font-normal ml-5'>Transactions</span>
                        </div>

                        <div className='flex items-center my-4'>
                            <img src={scheduleIcon} alt="" className='w-[18px] h-[18px]' />
                            <span className='text-lg font-normal ml-5'>Schedules</span>
                        </div>

                        <div className='flex items-center my-4'>
                            <img src={userIcon} alt="" className='w-[18px] h-[18px]' />
                            <span className='text-lg font-normal ml-5'>Users</span>
                        </div>

                        <div className='flex items-center my-4'>
                            <img src={settingIcon} alt="" className='w-[18px] h-[18px]' />
                            <span className='text-lg font-normal ml-5'>Settings</span>
                        </div>

                    </div>

                    <div className='pl-12 pt-8'>
                        <h4 className='text-sm font-normal'>Help</h4>
                        <h4 className='text-sm font-normal py-3'>Contact Us</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Leftbar

import React from 'react'
import downArrow from '../asset/downArrow.png'
import rightArrow from '../asset/rightArrow.png'
import pieChart from '../asset/pieChart.png'



const BottomSection = () => {
    return (
        <div className='mt-7 ml-7 flex'>

            <div className='w-1/2 bg-white rounded-3xl mr-5'>
                <div className='flex px-8 py-3'>
                    <h1 className='text-lg font-bold'>Top Products</h1>
                    <div className='flex ml-60'>
                        <span className='text-sm font-normal text-[#858585]'>May - June 2021</span>
                        <img src={downArrow} alt="" className='h-[5px] w-[8px] text-center mt-2 ml-2' />
                    </div>
                </div>

                <div className='flex'>
                    <img src={pieChart} alt="" className='px-8 py-6' />
                    <div className='flex flex-col ml-20'>

                        <p className='text-sm font-bold p-2'>Basic Tees</p>
                        <p className='text-xs font-normal px-2'>55%</p>

                        <p className='text-sm font-bold p-2'>Custom Short Pants</p>
                        <p className='text-xs font-normal px-2'>31%</p>

                        <p className='text-sm font-bold p-2'>Super Hoodies</p>
                        <p className='text-xs font-normal px-2'>14%</p>

                    </div>

                </div>

            </div>

            <div className='w-1/2 bg-white ml-5 mr-16 rounded-3xl'>
                <div className='flex px-8 py-3'>
                    <h1 className='text-lg font-bold'>Today's schedule</h1>
                    <div className='flex ml-60'>
                        <span className='text-sm font-normal text-[#858585]'>See All</span>
                        <img src={rightArrow} alt="" className='h-[8px] w-[5px] text-center mt-2 ml-2' />
                    </div>
                </div>

                <div className='my-4 px-6 border-l-[5px] border-[#9BDD7C] ml-8'>
                    <h1 className='text-sm font-bold text-[#666666] p-1'>Meeting with suppliers from Kuta Bali</h1>
                    <p className='text-xs font-normal text-[#999999] pl-1'>14.00 - 15.00</p>
                    <p className='text-xs font-normal text-[#999999] pl-1'>at Sunset Road, Kuta, Bali</p>
                </div>

                <div className='my-4 px-6 border-l-[5px] border-[#6972C3] ml-8'>
                    <h1 className='text-sm font-bold text-[#666666] p-1'>Check Operation at Giga Factory 1</h1>
                    <p className='text-xs font-normal text-[#999999] pl-1'>18.00 - 20.00</p>
                    <p className='text-xs font-normal text-[#999999] pl-1'>at Central Jakarta</p>
                </div>
            </div>

        </div>
    )
}

export default BottomSection

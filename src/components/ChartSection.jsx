import React from 'react'
import downArrow from '../asset/downArrow.png'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

const ChartSection = () => {

    const Array = [
        {
            time: '',
            num: 100,
            num2: 200
        },
        {
            time: 'Week 1',
            num: 425,
            num2: 395
        },
        {
            time: 'Week 2',
            num: 150,
            num2: 205
        },
        {
            time: 'Week 3',
            num: 430,
            num2: 290
        },
        {
            time: 'Week 4',
            num: 160,
            num2: 230
        },
        {
            time: '',
            num: 250,
            num2: 430
        },
    ]

    return (
        <div className='ml-7 mt-7 h-[400px] w-[1125px] bg-white rounded-3xl'>

            <div className='flex space-x-[700px]'>
                <div className='flex flex-col p-8 '>
                    <h2 className='text-lg font-bold'>Activities</h2>
                    <div className='flex pt-1'>
                        <p className='text-sm font-normal text-[#858585]'>May - June 2021</p>
                        <img src={downArrow} alt="" className='h-[5px] w-[8px] text-center mt-2 ml-2' />
                    </div>
                </div>

                <div className='flex'>
                    
                    <span className='bg-[#E9A0A0] h-[10px] w-[10px] mt-10 mr-2 rounded-full'></span>
                    <span className='my-8 mr-6'>Guest</span>
                    
                    <span className='bg-[#9BDD7C] h-[10px] w-[10px] mt-10 mr-2 rounded-full'></span>
                    <span className='my-8'>User</span>
                </div>
            </div>

            <div className='text-center px-5 pb-8 flex items-center justify-center'>
                <ResponsiveContainer width='100%' height={300} aspect={4}>
                    <LineChart data={Array} width={500} height={300}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey='time' axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Line type='monotone' dataKey='num' stroke='#9BDD7C' strokeWidth={3} dot={false} />
                        <Line type='monotone' dataKey='num2' stroke='#E9A0A0' strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default ChartSection

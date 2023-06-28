import React from 'react'
import revenuesIcon from '../asset/revenuesIcon.png'
import transactionsIcon from '../asset/transactionsIcon.png'
import likesIcon from '../asset/likesIcon.png'
import usersIcon from '../asset/usersIcon.png'

const TopSection = () => {

    const feature = [
        {
            id: 1,
            color: 'bg-[#DDEFE0]',
            icon: revenuesIcon,
            title: 'Total Revenues',
            num: '$2,129,430'
        },
        {
            id: 2,
            color: 'bg-[#F4ECDD]',
            icon: transactionsIcon,
            title: 'Total Transactions',
            num: '1,520'
        },
        {
            id: 3,
            color: 'bg-[#EFDADA]',
            icon: likesIcon,
            title: 'Total Likes',
            num: '9,721'
        },
        {
            id: 4,
            color: 'bg-[#DEE0EF]',
            icon: usersIcon,
            title: 'Total Users',
            num: '892'
        },
    ]

  return (
    <div className='pl-7 mt-7'>
      
        <div className='grid md:grid-cols-4 gap-2'>
            {
                feature.map(({id, color, icon, title, num}) =>(
                    <div key={id} className={`w-[221px] px-14 py-4 rounded-3xl ${color}`}>
                        <img src={icon} alt="" className='h-6 ml-28 pr-8' />
                        <h4 className='text-sm font-medium'>{title}</h4>
                        <p className='text-2xl font-bold'>{num}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default TopSection

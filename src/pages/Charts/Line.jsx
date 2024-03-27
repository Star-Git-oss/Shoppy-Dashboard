import React from 'react'
import { Header, LineChart } from '../../components/index.js'

export default function Line() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Line' color='dark:text-white' />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

import React from 'react'
import { pieChartData } from './../../data/dummy.js'


import { ChartsHeader, Header, PieChart } from './../../components/index.js'
import { useStateContext } from '../../contexts/ContextProvider.js'

export default function Pie() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pie" title="Project Cost Breakdown" color='dark:text-white' />
      <div className='w-full'>
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  )
}

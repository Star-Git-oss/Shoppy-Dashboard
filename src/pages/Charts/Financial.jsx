import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair
} from '@syncfusion/ej2-react-charts'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components/index.js'
import { useStateContext } from '../../contexts/ContextProvider.js'


const date1 = new Date('2017, 1, 1');
function filterValue(value) {
  if (value.x >= date1) return value.x, value.high, value.low;
}
const returnValue = financialChartData.filter(filterValue);



export default function Financial() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Chart' title='Financial' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          legendSettings={{ textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' } }}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

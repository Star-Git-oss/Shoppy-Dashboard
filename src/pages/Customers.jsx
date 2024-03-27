import React from 'react'
import { 
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Resize, 
  Sort, 
  Filter, 
  Page, 
  Search,
  Selection,
  Edit, 
  Inject
} from '@syncfusion/ej2-react-grids/index.js'
import { customersData, customersGrid } from '../data/dummy.js'
import { Header } from '../components/index.js'

export default function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers' />
      <GridComponent
        dataSource={customersData}
        toolbar={['Delete', 'Search']}
        allowPaging
        allowSorting
        allowResizing
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
      >
        <ColumnsDirective>
        {customersGrid.map((item, index)=> (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, Filter, Page, Edit, Selection ]} />
      </GridComponent>
    </div>
  )
}

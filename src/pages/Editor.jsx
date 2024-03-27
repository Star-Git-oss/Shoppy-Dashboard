import React from 'react'
import { Header } from '../components/index.js'
import { 
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy.js'
import { useStateContext } from './../contexts/ContextProvider.js'


export default function Editor() {

  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[ HtmlEditor, Toolbar, Image, Link, QuickToolbar ]} />
      </RichTextEditorComponent>
    </div>
  )
}

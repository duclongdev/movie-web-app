import React from 'react'
import Header from '../../components/header'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default DefaultLayout
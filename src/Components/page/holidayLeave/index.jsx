import React from 'react'
import SideNavBar from '../../widgets/sideNavBar'
import Header from "./header"

const Index = () => {
  return (
    <div className="flex ">
      <SideNavBar />
      <div className="flex-1 p-4 overflow-x-auto h-screen">
        <Header />
      </div>
    </div>
  )
}

export default Index
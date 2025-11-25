import React from 'react'
import Header from './header/header'
import SideBar from "../../../widgets/sideNavBar"
const Index = () => {
  return (

    <div className="flex">
      < SideBar />
      <div className=" flex-col flex-1 p-4 overflow-x-auto h-screen">
        <Header />
      </div>
    </div>
  )
}

export default Index
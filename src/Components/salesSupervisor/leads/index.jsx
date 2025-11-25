import React from 'react'
import SalesSupervisorSidebar from '../widgets/SalesSupervisorSidebar'
import Header from "./header"

const Index = () => {
  return (
    <div className="flex  bg-[#F6F6F6]">
      <SalesSupervisorSidebar />
      <div className="flex-1 p-4 overflow-x-auto h-screen">
        <Header />
      </div>
    </div>
  )
}

export default Index
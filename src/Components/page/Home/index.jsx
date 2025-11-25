import SideNavBar from "../../widgets/sideNavBar"
import Dashboard from './dashboard'

const Index = () => {
    return (
        <div className='flex'>
            <SideNavBar />
            <div className="flex ">

                <Dashboard />

            </div>
        </div>
    )
}

export default Index
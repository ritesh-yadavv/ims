import React, { useState } from 'react';
import { User, Calendar, FolderOpen, NotepadText } from 'lucide-react';
import Attendance from "./component/attandence";
import Projects from "./component/projects";
import Leave from "./component/leave";
import EditProfileSection from './component/editProfileSection';
import Header from './header/header';
import SideNavBar from "../../../widgets/sideNavBar";

const Index = () => {
  const [activeComponent, setActiveComponent] = useState('Header');
  const [loading, setLoading] = useState(false);

  // Static employee data
  const staticEmployeeData = {
    id: 'EMP001',
    name: 'John Doe',
    department: 'Engineering',
    designation: 'Senior Software Engineer',
    officeEmail: 'john.doe@company.com',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    // Add more static data as needed for different components
  };

  // Simulate loading if needed (for demonstration purposes)
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Header':
        return <Header />;
      case 'Attendance':
        return <Attendance />;
      case 'Projects':
        return <Projects />;
      case 'Leave':
        return <Leave />;
      default:
        return <Header />;
    }
  };

  const navigationItems = [
    { key: 'Header', label: 'Profile', icon: User },
    { key: 'Attendance', label: 'Attendance', icon: Calendar },
    { key: 'Projects', label: 'Projects', icon: FolderOpen },
    { key: 'Leave', label: 'Leave', icon: NotepadText },
  ];

  return (
    <div className="flex">
      <SideNavBar />
      
      {loading ? (
        <div className='h-screen w-screen flex justify-center items-center'>
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Loading employee data...</p>
          </div>
        </div>
      ) : (
        <div className="flex-col flex-1 p-4 overflow-x-auto h-screen">
          <EditProfileSection />
          <div className="md:w-1/ text-gray-800 mt-1 space-y-0 flex">
            {/* Navigation Sidebar */}
            <nav className="space-y-2 w-[14rem] max-md:hidden border rounded h-48 mr-3 bg-white shadow-sm">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeComponent === item.key;
                
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveComponent(item.key)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                      isActive 
                        ? "bg-blue-500 text-white shadow-md" 
                        : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
                    }`}
                  >
                    <IconComponent size={18} className={`${isActive ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
              <div className="flex justify-around p-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeComponent === item.key;
                  
                  return (
                    <button
                      key={item.key}
                      onClick={() => setActiveComponent(item.key)}
                      className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-600"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="text-xs mt-1">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-md:pb-16">
              {renderComponent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
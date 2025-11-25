import React from 'react';
import Header from './header';
import SideNavBar from '../../widgets/sideNavBar';

const Index = () => {
    return (
        <div className="flex min-h-screen">
            <SideNavBar />
            <div className="flex-1 p-4 overflow-x-auto h-screen">
                <Header />
            </div>
        </div>
    );
};

export default Index;

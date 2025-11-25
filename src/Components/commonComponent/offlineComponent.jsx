import React from 'react'

const OfflineComponent = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16 mx-auto mb-4 text-red-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M12 3.75V12M12 12H12.01M3 12H21M21 12H21.01M3 12H3.01M4.5 16.5H19.5C20.325 16.5 21 17.175 21 18C21 18.825 20.325 19.5 19.5 19.5H4.5C3.675 19.5 3 18.825 3 18C3 17.175 3.675 16.5 4.5 16.5ZM4.5 6.5H19.5C20.325 6.5 21 7.175 21 8C21 8.825 20.325 9.5 19.5 9.5H4.5C3.675 9.5 3 8.825 3 8C3 7.175 3.675 6.5 4.5 6.5Z"
                    />
                </svg>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">You are Offline</h1>
                <p className="text-gray-600 mb-6">
                    It seems you are not connected to the internet. Some features may not be available.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                >
                    Retry Connection
                </button>
            </div>
        </div>
    );
}

export default OfflineComponent
import React from 'react'

const Pricing = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#050505]  via-[#0a0a1a]  to-[#000000]">
            <div className="feature shadow-lg rounded-2xl p-10 text-center max-w-md">
                <h1 className="text-3xl font-bold text-gray-300 mb-4">
                    🚧 Pricing Page
                </h1>
                <p className="text-gray-300 mb-6">
                    This page is under development.
                    <br />
                    Please check back later!
                </p>

                <button
                    onClick={() => window.history.back()}
                    className="px-6 py-2 bg-indigo-400 text-white rounded-lg hover:bg-orange-400 transition"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default Pricing
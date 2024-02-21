import React from "react";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-white">
                                    LEO MT
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Home
                                </a>
                                <a href="/app/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Acerca de...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <footer className="text-black text-center p-4 mt-8 fixed bottom-0 w-full">
                © Leonardo Jesús Mortales Trejo 2024
            </footer>
        </>
    );
};

export default Navbar;

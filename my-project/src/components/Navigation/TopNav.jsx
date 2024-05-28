// import './index.css';
import React from 'react'

function TopNav() {
    return (
        <div>
            <div className="topnav">
            <div class="relative w-full bg-blue">
                <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div class="inline-flex items-center space-x-2 mt-5">
                        <span class="font-bold">Reliance  JIO</span>
                    </div>
                    <div class="hidden grow items-start lg:flex">
                        <ul class="ml-12 inline-flex space-x-8 mt-5">
                            <li>
                                <a
                                    href="#"
                                    class="font-bold text-white hover:text-gray-500"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="font-bold text-white hover:text-gray-500"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="font-bold text-white hover:text-gray-500"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="hidden lg:block">
                    </div>
                    <div class="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 cursor-pointer"
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default TopNav
import React, { useState } from 'react';
import { Menu, X, Home, User, Phone, Briefcase, ChevronDown, LogOut, Shield } from 'lucide-react';

export default function SimpleNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState('');
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    const handleDropdownClick = (name) => {
        setOpenDropdown(openDropdown === name ? '' : name);
    };

    const navItems = [
        { name: 'Home', icon: Home },
        { 
            name: 'Services', 
            icon: Briefcase, 
            isDropdown: true,
            subItems: [
                { name: 'CodeChef' },
                { name: 'LeetCode' },
                { name: 'CodeForces' }
            ]
        },
        { name: 'About', icon: User },
        { name: 'Contact', icon: Phone },
    ];

    return (
        <>
            <nav className="fixed top-9 left-12 right-12 z-50 transition-all duration-500 rounded-2xl overflow-visible bg-black/20 backdrop-blur-lg shadow-2xl border border-white/20 opacity-100 translate-y-0">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 cursor-pointer">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Skill
                                </span>
                                <span className="text-white">Board</span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {navItems.map((item) => (
                                <div key={item.name} className="dropdown-container relative flex flex-col items-center">
                                    <button
                                        onClick={() => item.isDropdown ? handleDropdownClick(item.name) : null}
                                        className="text-white hover:text-purple-400 transition-colors duration-200 flex items-center space-x-1 group py-2"
                                    >
                                        <item.icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                        {item.isDropdown && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:block">
                            <div className="relative dropdown-container flex flex-col items-end">
                                <button
                                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                                    className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-200 py-2"
                                >
                                    <Shield className="w-5 h-5 text-yellow-400" />
                                    <span>Hi, User</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Dropdowns Section */}
                <div className={`hidden md:block transition-all duration-500 ease-in-out overflow-hidden ${
                    (openDropdown === 'Services' || showUserDropdown)
                        ? 'max-h-32 opacity-100' 
                        : 'max-h-0 opacity-0'
                }`}>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                        <div className="border-t border-white/10 pt-6">
                            {/* Services Dropdown Content */}
                            {openDropdown === 'Services' && navItems.find(item => item.name === 'Services')?.subItems && (
                                <div className="flex justify-center items-center gap-8 animate-fadeIn">
                                    {navItems.find(item => item.name === 'Services').subItems.map((subItem, idx) => (
                                        <button
                                            key={subItem.name}
                                            className="service-nav-btn px-6 py-3 text-slate-200 hover:text-white transition-all duration-300 flex items-center space-x-2 group relative"
                                            style={{
                                                animation: `fadeInUp 0.4s ease-out ${idx * 0.1}s both`
                                            }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-pink-400 group-hover:scale-150 transition-all duration-300"></div>
                                            <span className="font-medium text-lg group-hover:scale-110 transition-transform duration-300">{subItem.name}</span>
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        </button>
                                    ))}
                                </div>
                            )}
                            
                            {/* User Dropdown Content */}
                            {showUserDropdown && (
                                <div className="flex justify-center items-center gap-8 animate-fadeIn">
                                    <button
                                        className="profile-btn px-6 py-3 text-slate-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group relative"
                                        style={{
                                            animation: 'fadeInUp 0.4s ease-out 0s both'
                                        }}
                                    >
                                        <User className="w-5 h-5 text-purple-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300" />
                                        <span className="font-medium text-lg group-hover:scale-110 transition-transform duration-300">Profile</span>
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </button>
                                    <button
                                        className="logout-btn px-6 py-3 text-slate-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group relative"
                                        style={{
                                            animation: 'fadeInUp 0.4s ease-out 0.1s both'
                                        }}
                                    >
                                        <LogOut className="w-5 h-5 text-purple-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300" />
                                        <span className="font-medium text-lg group-hover:scale-110 transition-transform duration-300">Logout</span>
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-500 overflow-hidden ${
                    isMenuOpen 
                        ? 'max-h-[400px] opacity-100' 
                        : 'max-h-0 opacity-0'
                }`}>
                    <div className="bg-black/40 backdrop-blur-lg border-t border-white/10 rounded-b-2xl">
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item, index) => (
                                <div key={item.name}>
                                    {item.isDropdown ? (
                                        <>
                                            <button
                                                onClick={() => handleDropdownClick(item.name)}
                                                className="group flex items-center w-full px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                                                style={{
                                                    animationDelay: `${index * 100}ms`,
                                                    animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                                                }}
                                            >
                                                <item.icon className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors" />
                                                <span className="font-medium group-hover:text-purple-400 transition-colors flex-1 text-left">
                                                    {item.name}
                                                </span>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Mobile Dropdown Menu */}
                                            <div className={`pl-8 mt-2 space-y-1 transition-all duration-300 ${openDropdown === item.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                {item.subItems.map((subItem) => (
                                                    <button
                                                        key={subItem.name}
                                                        className="service-nav-btn w-full px-4 py-2.5 rounded-xl text-left text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 flex items-center space-x-2 group"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-purple-400 group-hover:bg-pink-400 group-hover:scale-150 transition-all duration-300"></div>
                                                        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{subItem.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group flex items-center w-full px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                                            style={{
                                                animationDelay: `${index * 100}ms`,
                                                animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                                            }}
                                        >
                                            <item.icon className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors" />
                                            <span className="font-medium group-hover:text-purple-400 transition-colors flex-1 text-left">
                                                {item.name}
                                            </span>
                                        </button>
                                    )}
                                </div>
                            ))}
                            
                            <div className="pt-4 border-t border-white/10">
                                <div className="space-y-2">
                                    <button
                                        className="profile-btn group flex items-center w-full px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <Shield className="w-5 h-5 mr-3 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                                        <span className="font-medium group-hover:text-purple-400 transition-colors flex-1 text-left">
                                            Profile (Hi, User)
                                        </span>
                                    </button>
                                    <button
                                        className="logout-btn group flex items-center w-full px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <LogOut className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors" />
                                        <span className="font-medium group-hover:text-purple-400 transition-colors flex-1 text-left">
                                            Logout
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Animation styles */}
            <style>{`
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
}
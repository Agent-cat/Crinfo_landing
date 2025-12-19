"use client";

import NavConstants from "@/constants/NavConstants";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(
    null
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileSubmenu = (index: number) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 text-white bg-blue-600 border-b border-gray-200">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/crinfo_logo.png"
                alt="Crinfo Global"
                width={120}
                height={50}
                className="h-20 rounded-full w-auto"
                priority
              />
              <span className="text-white text-xl md:text-3xl font-bold hover:text-blue-600 transition-colors duration-300">
                Crinfo Global
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {NavConstants.map((item, index) => (
              <div key={index} className="relative group">
                {item.subMenu ? (
                  <>
                    <button className="relative text-[20px] font-bold px-3 py-2 text-white text-md  flex items-center gap-1">
                      <span className="relative z-10">{item.name}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                      <span className="absolute inset-0 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-2 flex items-center gap-1">
                        {item.name}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="absolute left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block  px-4 py-3 text-sm text-black hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 relative group/sub"
                          >
                            <span className="relative z-10">
                              {subItem.name}
                            </span>
                            <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover/sub:w-[calc(100%-2rem)]"></span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-3 py-2 text-white text-[20px] font-bold group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="absolute inset-0 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-2">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            {NavConstants.map((item, index) => (
              <div key={index}>
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(index)}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-300 relative group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${openMobileSubmenu === index ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="absolute bottom-2 left-3 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-1.5rem)]"></span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileSubmenu === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-black hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-300 relative group"
                          >
                            <span className="relative z-10">
                              {subItem.name}
                            </span>
                            <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-1.5rem)]"></span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-2 left-3 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-1.5rem)]"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

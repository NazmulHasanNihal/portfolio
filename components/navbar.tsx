"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/services' },
    { label: 'Research', path: '/research' },
    { label: 'Resume', path: '/resume' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/MD_NAZMUL.pdf'; // Path to your CV in the public directory
    link.download = 'MD_NAZMUL.pdf'; // Optional: Specify the name of the file to be downloaded
    link.click(); // Trigger the download
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            Nazmul<span className="text-emerald-400">.</span>
          </Link>

          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 rounded-full bg-card border border-border hover:border-emerald-400 transition-colors"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-emerald-400" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2 text-emerald-400" />
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  pathname === item.path ? 'text-emerald-400' : 'text-foreground'
                } hover:text-emerald-400 transition-colors text-sm lg:text-base`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle for Desktop */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 rounded-full bg-card border border-border hover:border-emerald-400 transition-colors"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-emerald-400" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2 text-emerald-400" />
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV} // Call the download function
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400 text-background hover:bg-emerald-500 transition-colors text-sm lg:text-base"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    pathname === item.path
                      ? 'text-emerald-400'
                      : 'text-foreground'
                  } block px-3 py-2 rounded-md text-base hover:text-emerald-400 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Download CV in Mobile */}
              <button
                onClick={handleDownloadCV} // Call the download function
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-400 text-background hover:bg-emerald-500 transition-colors mt-4"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

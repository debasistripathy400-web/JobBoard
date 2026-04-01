import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Briefcase, Menu, User, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Find Jobs', path: '/find-jobs' },
    { name: 'Companies', path: '/companies' },
    { name: 'Salaries', path: '/salaries' },
    ...(user?.role === 'employer' || !isLoggedIn ? [{ name: 'Post a Job', path: '/post-a-job' }] : [])
  ];

  return (
    <>
      <nav className={cn("fixed left-1/2 -translate-x-1/2 w-[90%] md:w-3/4 max-w-7xl z-50 transition-all duration-300", isScrolled ? "top-2 md:top-4" : "top-6")}>
        <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800/50 rounded-3xl px-8 py-5 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter">
                JOB<span className="text-blue-600">VERSE</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    isActive ? "bg-blue-600/10 text-blue-500 shadow-inner" : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-4 mr-4 border-r border-slate-800 pr-6">
                <Link to="/login" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
                  Log in
                </Link>
                <Link to="/register">
                  <Button size="sm" className="rounded-xl px-6 font-bold uppercase tracking-tighter">Join Now</Button>
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-4 mr-4 border-r border-slate-800 pr-6">
                 <span className="text-xs font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">{user?.role}</span>
                 <button onClick={logout} className="text-sm font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest">
                  Logout
                </button>
              </div>
            )}

            <NavLink to="/profile" className={({ isActive }) => cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
              isActive ? "bg-blue-600 shadow-lg shadow-blue-500/20" : "bg-slate-900 border border-slate-800 hover:border-slate-700"
            )}>
              <User className="w-5 h-5 text-white" />
            </NavLink>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-slate-950 pt-32 px-6 flex flex-col gap-8 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => cn(
                    "text-3xl font-black transition-colors",
                    isActive ? "text-blue-500" : "text-slate-700 hover:text-white"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pb-12 grid grid-cols-2 gap-4 border-t border-slate-900 pt-8">
               <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full py-6 rounded-2xl">Log in</Button>
               </Link>
               <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full py-6 rounded-2xl">Sign up</Button>
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

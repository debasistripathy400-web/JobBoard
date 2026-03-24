import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, Zap, Star, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');

    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 blur-[120px] opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full mb-8"
                >
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide uppercase">New: 5,000+ Remote Jobs Added Today</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black text-white mb-10 leading-[1] tracking-tighter uppercase italic select-none"
                >
                    Elite talent <br /> 
                    <span className="text-blue-600 block mt-2 drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">Meets Its Match.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed"
                >
                    The global infrastructure for high-performance engineering teams. <br className="hidden md:block" />
                    Finding your legacy work shouldn't be a gamble.
                </motion.p>

                {/* Hero Search */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const searchParam = searchQuery ? `search=${encodeURIComponent(searchQuery)}` : '';
                        const locationParam = locationQuery ? `location=${encodeURIComponent(locationQuery)}` : '';
                        const query = [searchParam, locationParam].filter(Boolean).join('&');
                        navigate(`/find-jobs${query ? '?' + query : ''}`);
                    }}
                    className="w-full max-w-4xl mx-auto p-2 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl md:rounded-[2rem] flex flex-col md:flex-row items-center gap-2 shadow-2xl shadow-blue-500/5 group hover:border-blue-500/30 transition-all duration-300"
                >
                    <div className="flex-1 w-full flex items-center px-4 gap-4">
                        <Search className="w-6 h-6 text-blue-500" />
                        <input 
                            type="text" 
                            placeholder="Job title, company, or keywords" 
                            className="w-full py-4 bg-transparent border-none outline-none text-white text-lg placeholder:text-slate-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-800" />
                    <div className="flex-1 w-full flex items-center px-4 gap-4">
                        <MapPin className="w-6 h-6 text-blue-500" />
                        <input 
                            type="text" 
                            placeholder="City or state" 
                            className="w-full py-4 bg-transparent border-none outline-none text-white text-lg placeholder:text-slate-500"
                            value={locationQuery}
                            onChange={(e) => setLocationQuery(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-auto">
                        <Button type="submit" size="lg" className="w-full h-auto py-5 px-10 rounded-xl md:rounded-[1.5rem] font-bold text-lg">
                            Find Work
                        </Button>
                    </div>
                </motion.form>

                {/* Trust Badges */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 1 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <Link to="/find-jobs" className="flex items-center gap-2 text-slate-200 font-bold hover:text-blue-500 transition-colors">
                        <ShieldCheck className="w-6 h-6" /> Verified Jobs
                    </Link>
                    <Link to="/salaries" className="flex items-center gap-2 text-slate-200 font-bold hover:text-blue-500 transition-colors">
                        <Star className="w-6 h-6" /> Top Salaries
                    </Link>
                    <Link to="/find-jobs?location=Remote" className="flex items-center gap-2 text-slate-200 font-bold hover:text-blue-500 transition-colors">
                        <Briefcase className="w-6 h-6" /> Global Hiring
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

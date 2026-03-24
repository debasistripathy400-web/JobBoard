import React from 'react';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { JobCard } from '../components/JobCard';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Globe, ShieldCheck, Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MOCK_JOBS, COMPANIES } from '../lib/mockData';
import { Link } from 'react-router-dom';
import { Counter } from '../components/ui/Counter';

const featuredJobs = MOCK_JOBS.filter(j => ['Linear', 'Anthropic', 'Figma', 'Stripe', 'OpenAI', 'Vercel'].includes(j.company)).slice(0, 6);

const Home: React.FC = () => {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">
            <Navbar />
            
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Logo Ticker - Social Proof */}
            <div className="py-20 border-y border-slate-900 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 mb-8">
                   <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">Powering the world's most innovative teams</p>
                </div>
                <motion.div 
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex items-center gap-20 whitespace-nowrap px-10"
                >
                    {[...COMPANIES, ...COMPANIES].map((company, i) => (
                        <div key={i} className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                            <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
                            <span className="text-2xl font-black text-slate-400 font-mono tracking-tighter uppercase">{company.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 3. Featured Jobs Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
                
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Top <span className="text-blue-600">Opportunities.</span></h2>
                        <p className="text-slate-400 max-w-xl text-lg leading-relaxed">Curated high-growth roles from world-class engineering teams. No fluff, just the best work on the planet.</p>
                    </motion.div>
                    <Link to="/find-jobs">
                        <Button variant="outline" className="rounded-2xl h-16 px-10 gap-3 text-lg font-bold border-slate-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                            Full Marketplace <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredJobs.map((job, index) => (
                        <JobCard key={job.id} job={job} index={index} />
                    ))}
                </div>
            </section>

            {/* 4. Value Proposition - "Why Us" */}
            <section className="py-32 bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-500 font-black text-xs uppercase tracking-widest bg-blue-500/10 px-6 py-3 rounded-full mb-6 inline-block"
                        >
                            The Platform Infrastructure
                        </motion.span>
                        <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tighter">Engineered for the <br /> <span className="text-blue-600 italic">Modern Workforce.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Speed-to-Hire", desc: "Our prioritized matching infrastructure connects you with hiring leads in record time." },
                            { icon: Target, title: "Curated RolesOnly", desc: "No noise. No scams. Every single listing is manually vetted by our quality control engine." },
                            { icon: Globe, title: "Remote-First", desc: "Built for borderless talent. 85% of our listings support decentralized working models." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 bg-slate-900/30 border border-slate-800 rounded-[3rem] group hover:border-blue-600/50 hover:bg-slate-900/50 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/5">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Metrics Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-2 md:grid-cols-4 gap-12">
                 {[
                    { label: "Active Jobs", to: 12000, suffix: "+", icon: Briefcase },
                    { label: "Verified Teams", to: 2000, suffix: "+", icon: Award },
                    { label: "Talent Pool", to: 1.2, suffix: "M+", decimals: 1, icon: Users },
                    { label: "Growth YoY", to: 240, suffix: "%", icon: TrendingUp }
                 ].map((stat, i) => (
                    <div key={i} className="text-center group">
                        <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-5xl font-black mb-2 tracking-tighter">
                            <Counter to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                        </h3>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                 ))}
            </section>

            {/* 6. Categories Loop */}
            <section className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-900">
                <div className="flex flex-col items-center text-center mb-24">
                   <h2 className="text-4xl font-black mb-6 uppercase tracking-tight italic">Find your <span className="text-blue-600">Niche.</span></h2>
                   <div className="w-24 h-1 bg-blue-600 rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {['Design', 'Engineering', 'Marketing', 'Sales', 'Customer Support', 'Product'].map((cat, i) => (
                        <Link to={`/find-jobs?search=${encodeURIComponent(cat)}`} key={cat}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -10, borderColor: 'rgba(37, 99, 235, 0.5)', scale: 1.05 }}
                                className="h-full p-8 bg-slate-900/30 backdrop-blur-3xl border border-slate-800 rounded-[2.5rem] text-center cursor-pointer transition-all shadow-lg hover:shadow-blue-500/10"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <span className="text-xl font-black">{cat[0]}</span>
                                </div>
                                <h4 className="font-black text-white uppercase tracking-tighter text-sm mb-2">{cat}</h4>
                                <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest">Explore Items</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 7. Massive CTA Block */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                 <div className="relative p-16 md:p-32 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[4rem] overflow-hidden shadow-3xl">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
                    </div>
                    
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <ShieldCheck className="w-20 h-20 text-white/50 mx-auto mb-10" />
                        <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter uppercase italic">Ready to make <br /> an <span className="underline decoration-white/20">Impact?</span></h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link to="/register" className="w-full md:w-auto">
                               <Button className="w-full md:w-auto rounded-3xl py-10 px-16 bg-white text-blue-900 hover:bg-slate-100 font-black text-2xl shadow-2xl transition-all transform hover:scale-110">Get Started Now</Button>
                            </Link>
                            <Link to="/post-a-job" className="w-full md:w-auto">
                               <Button variant="outline" className="w-full md:w-auto rounded-3xl py-10 px-16 border-white/30 text-white hover:bg-white/10 font-black text-2xl backdrop-blur-md">Post your first Job</Button>
                            </Link>
                        </div>
                    </div>
                 </div>
            </section>

            {/* 8. Footer Sub-links */}
            <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="flex items-center gap-10">
                     <span className="text-2xl font-black italic tracking-tighter">JOB<span className="text-blue-600">VERSE</span></span>
                     <p className="text-slate-500 text-sm font-medium">© 2026 High Dynamic Career Solutions. All Rights Reserved.</p>
                 </div>
                 <div className="flex gap-8 text-slate-500 font-bold text-xs uppercase tracking-widest">
                     {['Privacy', 'Legal', 'Infrastructure', 'API', 'Changelog'].map(l => (
                         <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
                     ))}
                 </div>
            </footer>
        </main>
    );
};

export default Home;

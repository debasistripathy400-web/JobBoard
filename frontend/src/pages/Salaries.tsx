import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { MOCK_JOBS } from '../lib/mockData';
import { TrendingUp, Info, ArrowUpRight, BarChart3, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Salaries: React.FC = () => {
    const [search, setSearch] = React.useState('');
    // Unique job titles from mock data
    const titles = Array.from(new Set(MOCK_JOBS.map(j => j.title)));
    
    // Salaries data based on mock data
    const salaryData = titles.map(title => {
        const jobs = MOCK_JOBS.filter(j => j.title === title);
        const avgSalary = jobs.map(j => {
            const match = j.salary.match(/\$(\d+)k/);
            return match ? parseInt(match[1]) : 100;
        }).reduce((a, b) => a + b, 0) / (jobs.length || 1);
        
        return {
            title,
            avg: `$${Math.round(avgSalary)}k`,
            range: jobs[0]?.salary || '$100k - $150k',
            category: jobs[0]?.category || 'General'
        };
    }).sort((a, b) => parseInt(b.avg.slice(1)) - parseInt(a.avg.slice(1)));

    const filteredSalaryData = salaryData.filter(d => 
        d.title.toLowerCase().includes(search.toLowerCase()) || 
        d.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-32">
            <Navbar />
            
            <div className="pt-32 pb-20 bg-gradient-to-r from-green-600/5 to-transparent border-b border-slate-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-black mb-6 tracking-tight">Know your <br /><span className="text-green-500 underline decoration-green-500/30">True Worth.</span></h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">Search anonymous salaries, shared by community members. Benchmark your compensation against top-tier tech companies.</p>
                    
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-green-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-4 p-2 bg-slate-900/50 border border-slate-800 rounded-3xl">
                            <Search className="w-6 h-6 text-green-500 ml-4" />
                            <input 
                                type="text" 
                                placeholder="Search job titles..." 
                                className="w-full bg-transparent border-none outline-none text-white text-lg py-3" 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                 {/* Main Table Content */}
                 <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-900 px-4">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Role Name</span>
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest text-right">Avg Salary / Year</span>
                    </div>

                    {filteredSalaryData.map((data, index) => (
                        <motion.div
                            key={data.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="bg-slate-900/40 p-6 rounded-[2rem] border border-slate-900 group hover:border-green-500/50 hover:bg-slate-900/60 transition-all flex items-center justify-between"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:rotate-12 transition-transform shadow-lg shadow-green-500/10">
                                   <BarChart3 className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-500 transition-colors uppercase tracking-tight">{data.title}</h3>
                                    <p className="text-slate-500 text-sm font-bold">{data.category}  <span className="mx-1">•</span> <span className="text-slate-400">{data.range}</span></p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-8">
                                <div className="text-center">
                                    <p className="text-3xl font-black text-white">{data.avg}</p>
                                    <p className="text-[10px] font-bold text-green-500 tracking-tighter uppercase">+12% vs last year</p>
                                </div>
                                <Link to={`/find-jobs?title=${data.title}`}>
                                   <Button variant="outline" className="w-12 h-12 p-0 rounded-2xl border-slate-800">
                                       <ArrowUpRight className="w-5 h-5" />
                                   </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                 </div>

                 {/* Sidebar Insights */}
                 <div className="space-y-8 lg:sticky lg:top-32 h-fit">
                    <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 blur-3xl" />
                         <h4 className="text-xl font-black mb-8 flex items-center gap-2">Salary Insight <TrendingUp className="w-5 h-5 text-green-500" /></h4>
                         <div className="space-y-10">
                              <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                                  <div>
                                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Highest Typical Role</p>
                                      <p className="text-white font-black text-2xl uppercase tracking-tighter">AI Engineer</p>
                                  </div>
                                  <p className="text-green-500 font-black text-2xl tracking-tighter">$380k</p>
                              </div>
                              <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                                  <div>
                                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Highest Percentile</p>
                                      <p className="text-white font-black text-2xl uppercase tracking-tighter">VP Engineering</p>
                                  </div>
                                  <p className="text-green-500 font-black text-2xl tracking-tighter">$400k</p>
                              </div>
                         </div>
                         <Button className="w-full mt-10 rounded-2xl py-6 font-bold flex gap-2">Share your salary <ArrowUpRight className="w-4 h-4" /></Button>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2.5rem] text-white">
                         <Info className="w-10 h-10 mb-6 text-white/50" />
                         <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">How we calculate?</h4>
                         <p className="text-blue-100 text-sm leading-relaxed mb-8">All salaries are anonymously provided by actual employees and parsed from verified job listings on our platform for transparency.</p>
                         <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600 font-bold rounded-2xl py-6 backdrop-blur-md">Learn more</Button>
                    </div>
                 </div>
            </div>
        </main>
    );
};

export default Salaries;

import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { COMPANIES, MOCK_JOBS } from '../lib/mockData';
import { Search, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Companies: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredCompanies = COMPANIES.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-32">
            <Navbar />
            
            <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600/5 to-transparent border-b border-slate-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-black mb-6 tracking-tight">Work for the <br /><span className="text-blue-600">Best in Tech.</span></h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">Discover top-tier companies that are hiring right now. From startups to tech giants, find your next home.</p>
                    
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-4 p-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl">
                            <Search className="w-6 h-6 text-blue-500 ml-4" />
                            <input 
                                type="text" 
                                placeholder="Search companies..." 
                                className="w-full bg-transparent border-none outline-none text-white text-lg py-3" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCompanies.map((company, index) => {
                        const jobsCount = MOCK_JOBS.filter(j => j.company === company.name).length;
                        return (
                            <motion.div
                                key={company.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 hover:bg-slate-900/60 transition-all group relative overflow-hidden flex flex-col"
                            >
                                <div className="h-32 w-full relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                     <img 
                                         src={company.coverImage} 
                                         className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500" 
                                         alt="" 
                                         onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                                </div>

                                <div className="p-8 pt-0 -mt-10 relative z-10 flex flex-col h-full">
                                    <div className="w-20 h-20 bg-slate-900 border border-slate-800 p-4 rounded-3xl mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        <img 
                                            src={company.logo} 
                                            alt={company.name} 
                                            className="w-full h-full object-contain" 
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random&color=fff&size=128`;
                                            }}
                                        />
                                    </div>
                                    <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink className="w-5 h-5 text-slate-500" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{company.name}</h3>
                                    <div className="flex items-center gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">
                                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Global</span>
                                        <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-blue-500" /> {jobsCount} Jobs</span>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <Link to={`/find-jobs?company=${company.name}`} className="block">
                                           <Button variant="outline" className="w-full font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all py-6">
                                               View Openings
                                           </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Companies;

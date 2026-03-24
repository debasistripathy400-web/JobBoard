import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building2, Bookmark } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface JobCardProps {
    job: {
        id: number;
        title: string;
        company: string;
        location: string;
        type: string;
        salary: string;
        logo?: string;
    };
    index: number;
}

import { COMPANIES } from '../lib/mockData';

export const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
    const [isBookmarked, setIsBookmarked] = React.useState(false);
    const companyData = COMPANIES.find(c => c.name === job.company);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-500 flex flex-col h-full overflow-hidden"
        >
            {/* Subtle Brand Strip */}
            <div className="h-24 w-full relative overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
                <img src={companyData?.coverImage || 'https://images.unsplash.com/photo-1557683316-973673baf926'} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="px-8 pb-8 -mt-8 relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <Link to={`/jobs/${job.id}`} className="flex gap-4 group/item">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 p-2 overflow-hidden group-hover/item:border-blue-500/50 transition-colors">
                        <img 
                            src={job.logo} 
                            alt={job.company} 
                            className="w-full h-full object-contain" 
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random&color=fff&size=128`;
                            }}
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover/item:text-blue-400 transition-colors">
                            {job.title}
                        </h3>
                        <p className="text-slate-400 font-medium">at {job.company}</p>
                    </div>
                </Link>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        setIsBookmarked(!isBookmarked);
                    }}
                    className={cn(
                        "z-10 p-2 rounded-xl transition-all",
                        isBookmarked ? "text-blue-500 bg-blue-500/10" : "text-slate-500 hover:text-white hover:bg-slate-800"
                    )}
                >
                    <Bookmark className={cn("w-6 h-6", isBookmarked && "fill-current")} />
                </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg flex items-center gap-2 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" /> {job.location}
                </div>
                <div className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg flex items-center gap-2 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-purple-500" /> {job.type}
                </div>
                <div className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg flex items-center gap-2 text-xs font-semibold">
                    <DollarSign className="w-3.5 h-3.5 text-green-500" /> {job.salary}
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-auto">
                <p className="text-slate-500 text-sm italic font-medium">Applied 2 days ago</p>
                <Link to={`/jobs/${job.id}`}>
                    <Button variant="primary" size="sm" className="rounded-lg shadow-none">
                        Apply Now
                    </Button>
                </Link>
            </div>
            </div>
        </motion.div>
    );
};

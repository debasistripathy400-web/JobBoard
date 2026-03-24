import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { JobCard } from '../components/JobCard';
import { Search, Filter, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MOCK_JOBS } from '../lib/mockData';

const JobListing: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialSearch = searchParams.get('search') || '';
    const initialLocationParam = searchParams.get('location') || '';

    const [searchTerm, setSearchTerm] = React.useState(initialSearch);
    const [locationTerm, setLocationTerm] = React.useState(initialLocationParam);
    const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
    const [salaryRange, setSalaryRange] = React.useState<string>('All');
    const [filteredJobs, setFilteredJobs] = React.useState(MOCK_JOBS);

    const applyFilters = React.useCallback(() => {
        let filtered = MOCK_JOBS.filter(job => 
            (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
            job.location.toLowerCase().includes(locationTerm.toLowerCase())
        );

        if (selectedTypes.length > 0) {
            filtered = filtered.filter(job => selectedTypes.includes(job.type));
        }

        if (salaryRange !== 'All') {
             filtered = filtered.filter(job => {
                 const salaryMatch = job.salary.match(/\$(\d+)k/);
                 if (!salaryMatch) return true;
                 const val = parseInt(salaryMatch[1]);
                 
                 if (salaryRange === '$20k - $50k') return val >= 20 && val <= 50;
                 if (salaryRange === '$50k - $100k') return val > 50 && val <= 100;
                 if (salaryRange === '$100k - $150k') return val > 100 && val <= 150;
                 if (salaryRange === '$150k+') return val > 150;
                 return true;
             });
        }

        setFilteredJobs(filtered);
    }, [searchTerm, locationTerm, selectedTypes, salaryRange]);

    React.useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const handleTypeChange = (type: string) => {
        setSelectedTypes(prev => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-32">
            <Navbar />
            
            <div className="pt-32 pb-16 bg-slate-900/30 border-b border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-black mb-8">Search for your <br /> <span className="text-blue-600 underline">Perfect Job.</span></h1>
                    
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            applyFilters();
                        }}
                        className="flex flex-col lg:flex-row items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl"
                    >
                        <div className="flex-1 w-full flex items-center gap-4 px-4 py-2 border-r border-slate-800">
                            <Search className="w-6 h-6 text-blue-500" />
                            <input 
                                type="text" 
                                placeholder="Design, Engineering, Product..." 
                                className="w-full bg-transparent border-none outline-none text-white text-lg" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 w-full flex items-center gap-4 px-4 py-2 border-r border-slate-800">
                             <MapPin className="w-6 h-6 text-blue-500" />
                             <input 
                                type="text" 
                                placeholder="Remote or City" 
                                className="w-full bg-transparent border-none outline-none text-white text-lg" 
                                value={locationTerm}
                                onChange={(e) => setLocationTerm(e.target.value)}
                             />
                        </div>
                        <Button type="submit" size="lg" className="w-full lg:w-auto px-12 rounded-2xl">Find Work</Button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filter */}
                <aside className="w-full lg:w-80 space-y-12">
                     <div>
                        <h4 className="flex items-center gap-2 text-xl font-bold mb-8">Filter by <Filter className="w-5 h-5 text-blue-500" /></h4>
                        
                        <div className="space-y-10 group">
                             <div>
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 block">Job Type</label>
                                <div className="space-y-4">
                                     {['Full-time', 'Part-time', 'Contract', 'Remote'].map((item) => (
                                        <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                            <input 
                                                type="checkbox" 
                                                className="w-5 h-5 rounded-md border-slate-800 bg-slate-900 accent-blue-600 transition-all border shadow-inner" 
                                                checked={selectedTypes.includes(item)}
                                                onChange={() => handleTypeChange(item)}
                                            />
                                            <span className="text-slate-400 group-hover:text-white transition-colors capitalize font-medium">{item}</span>
                                        </label>
                                     ))}
                                </div>
                             </div>

                             <div>
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 block">Salary Range</label>
                                <div className="space-y-4">
                                     {['All', '$20k - $50k', '$50k - $100k', '$100k - $150k', '$150k+'].map((item) => (
                                        <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                            <input 
                                                type="radio" 
                                                name="salary" 
                                                className="w-5 h-5 rounded-full border-slate-800 bg-slate-900 accent-blue-600 transition-all border shadow-inner" 
                                                checked={salaryRange === item}
                                                onChange={() => setSalaryRange(item)}
                                            />
                                            <span className="text-slate-400 group-hover:text-white transition-colors">{item}</span>
                                        </label>
                                     ))}
                                </div>
                             </div>
                        </div>
                     </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-900">
                        <p className="text-slate-500 font-medium">Found <span className="text-white font-bold">{filteredJobs.length}</span> jobs for your search</p>
                        <div className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer group">
                            Sort by <span className="font-bold text-white group-hover:text-blue-400">Newest</span> <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {filteredJobs.map((job, i) => (
                            <JobCard key={job.id} job={job} index={i} />
                         ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default JobListing;

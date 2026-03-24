import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { MapPin, Clock, DollarSign, Bookmark, CheckCircle2, ArrowLeft, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_JOBS, COMPANIES } from '../lib/mockData';
import { cn } from '../lib/utils';

const JobDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isApplied, setIsApplied] = React.useState(false);
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    const job = MOCK_JOBS.find(j => j.id === Number(id)) || MOCK_JOBS[0];
    const company = COMPANIES.find(c => c.name === job.company);

    const handleApply = () => {
        setIsApplied(true);
        alert('Application Submitted Successfully!');
    };

    const handleCopyURL = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('URL Copied to Clipboard!');
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-32">
            <Navbar />

            {/* Premium Cover Photo Header */}
            <div className="relative h-[300px] w-full mt-20 border-b border-slate-900 overflow-hidden bg-slate-900">
                <img 
                    src={company?.coverImage || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200'} 
                    className="w-full h-full object-cover opacity-60 scale-110 blur-sm"
                    alt="" 
                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
                {/* Gradient fallback for cover image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            <div className="-mt-32 pb-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Search
                    </button>

                    <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                        <div className="flex gap-8 items-center">
                            <div className="w-32 h-32 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex items-center justify-center p-6 shadow-3xl relative overflow-hidden group">
                               <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
                               <img 
                                   src={company?.logo || job.logo} 
                                   alt={job.company} 
                                   className="w-full h-full object-contain relative z-10 scale-110" 
                                   onError={(e) => {
                                       const target = e.target as HTMLImageElement;
                                       target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random&color=fff&size=256`;
                                   }}
                               />
                            </div>
                            <div className="pb-2">
                                <h1 className="text-5xl font-black mb-4 leading-tight tracking-tighter uppercase italic">{job.title}</h1>
                                <p className="text-slate-400 text-xl flex items-center gap-3 font-bold">
                                    <span className="text-blue-500 uppercase tracking-widest">{job.company}</span>
                                    <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" /> 
                                    {job.location}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto mb-2">
                            <Button 
                                onClick={handleApply} 
                                size="lg" 
                                className={cn("flex-1 md:flex-none px-12 h-16 rounded-2xl shadow-blue-500/20 font-black text-lg", isApplied && "bg-green-600 hover:bg-green-600 shadow-green-500/20")}
                                disabled={isApplied}
                            >
                                {isApplied ? 'Application Sent' : 'Apply Now'}
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className={cn("w-16 h-16 p-0 rounded-2xl border-slate-800", isBookmarked && "text-blue-500 border-blue-600 bg-blue-500/10")}
                                onClick={() => setIsBookmarked(!isBookmarked)}
                            >
                                <Bookmark className={cn("w-6 h-6", isBookmarked && "fill-current")} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                 {/* Main Column */}
                 <div className="lg:col-span-2 space-y-12">
                    <section>
                         <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Zap className="w-6 h-6 text-blue-500" /> About the Role</h3>
                         <div className="text-slate-400 text-lg leading-relaxed space-y-6 bg-slate-900/20 p-8 rounded-[2rem] border border-slate-900/50">
                            <p>We are looking for an exceptional {job.title} to join {job.company}'s world-class team. You will play a critical role in shaping the technical direction and product excellence as we scale our global operations.</p>
                            <p>Our team values deep expertise, clean maintainable code, and a passion for crafting user-facing experiences that push the boundaries of what's possible in the {job.category} space.</p>
                         </div>
                    </section>

                    <section>
                         <h3 className="text-2xl font-bold mb-6">Key Requirements</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {[
                                `Strong proficiency in ${job.category} best practices`,
                                '5+ years experience in high-growth environments',
                                'Expertise with modern engineering stacks',
                                'Experience leading cross-functional projects',
                                'Excellent communication & team collaboration',
                                'Passion for technical excellence and safety'
                             ].map((req, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-3xl group hover:border-blue-500/30 transition-all">
                                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                                    <span className="text-slate-200 font-bold tracking-tight">{req}</span>
                                </div>
                             ))}
                         </div>
                    </section>

                    <section>
                         <h3 className="text-2xl font-bold mb-6">Responsibilities</h3>
                         <ul className="list-disc list-inside text-slate-400 text-lg leading-relaxed space-y-4 marker:text-blue-500">
                             <li>Design and implement core API architectures.</li>
                             <li>Develop highly interactive and responsive UI components.</li>
                             <li>Optimize database performance and query efficiency.</li>
                             <li>Lead code reviews and mentor junior developers.</li>
                             <li>Collaborate with cross-functional teams to deliver high-quality software.</li>
                         </ul>
                    </section>
                 </div>

                 {/* Sidebar Info */}
                 <div className="space-y-8">
                      <div className="p-10 bg-slate-900/40 backdrop-blur-3xl border border-slate-800 rounded-[3rem] shadow-3xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl pointer-events-none" />
                          <h4 className="text-xl font-black mb-10 flex items-center gap-2 uppercase tracking-tighter italic">Intelligence Overview <Zap className="w-5 h-5 text-blue-500" /></h4>
                          <div className="space-y-10">
                              <div className="flex items-center gap-5 group">
                                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                      <Clock className="w-7 h-7 text-blue-500 group-hover:text-white" />
                                  </div>
                                  <div>
                                      <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-1">Posted</p>
                                      <p className="text-white font-black text-xl italic">{job.postedAt}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-5 group">
                                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                      <MapPin className="w-7 h-7 text-purple-500 group-hover:text-white" />
                                  </div>
                                  <div>
                                      <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-1">Base Ops</p>
                                      <p className="text-white font-black text-xl italic">{job.location}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-5 group">
                                  <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                      <DollarSign className="w-7 h-7 text-green-500 group-hover:text-white" />
                                  </div>
                                  <div>
                                      <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-1">Compensation</p>
                                      <p className="text-white font-black text-xl italic">{job.salary}</p>
                                  </div>
                              </div>
                          </div>

                          <Button 
                            onClick={handleApply} 
                            size="lg" 
                            className={cn("w-full mt-12 rounded-[2rem] h-20 shadow-blue-500/30 py-5 font-black text-2xl uppercase tracking-tighter italic bg-gradient-to-r from-blue-600 to-indigo-600", isApplied && "bg-green-600 hover:bg-green-600 shadow-green-500/20")}
                            disabled={isApplied}
                          >
                            {isApplied ? 'Success' : 'Secure Role'}
                          </Button>
                      </div>

                      <div className="p-10 bg-slate-900/40 backdrop-blur-3xl border border-slate-800 rounded-[3rem] text-center border-dashed">
                           <h4 className="text-xl font-black mb-4 uppercase tracking-tighter italic leading-none">External Linkage</h4>
                           <p className="text-slate-500 text-sm mb-8 font-medium">Broadcast this opportunity across your authorized networks.</p>
                           <Button variant="outline" className="w-full h-16 rounded-2xl font-black tracking-tighter uppercase italic border-slate-800 hover:border-blue-600 transition-all" onClick={handleCopyURL}>Copy Protocol URL</Button>
                      </div>
                 </div>
            </div>
        </main>
    );
};

export default JobDetail;

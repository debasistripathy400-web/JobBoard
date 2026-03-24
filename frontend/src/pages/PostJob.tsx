import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { Building2, Briefcase, DollarSign, MapPin, ChevronRight, CheckCircle2, ChevronLeft, LayoutGrid, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const PostJob: React.FC = () => {
    const [step, setStep] = React.useState(1);
    const [selectedPerks, setSelectedPerks] = React.useState<string[]>([]);
    const [formData, setFormData] = React.useState({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        category: 'Engineering',
        salary: '',
        description: '',
        requirements: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validateStep = (currentStep: number) => {
        const newErrors: Record<string, string> = {};
        if (currentStep === 1) {
            if (!formData.title) newErrors.title = 'Job title is required';
            if (!formData.company) newErrors.company = 'Company name is required';
            if (!formData.location) newErrors.location = 'Location is required';
        } else if (currentStep === 2) {
            if (!formData.description) newErrors.description = 'Description is required';
            if (formData.description.length < 50) newErrors.description = 'Description must be at least 50 characters';
        } else if (currentStep === 3) {
            if (!formData.salary) newErrors.salary = 'Salary range is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (validateStep(step)) {
            setStep(s => Math.min(s + 1, 3));
        }
    };

    const prevStep = () => {
        setErrors({});
        setStep(s => Math.max(s - 1, 1));
    };

    const handlePublish = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep(3)) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        alert('Job Posted Successfully!');
        window.location.href = '/find-jobs';
    };

    const togglePerk = (perk: string) => {
        setSelectedPerks(prev => 
            prev.includes(perk) ? prev.filter(p => p !== perk) : [...prev, perk]
        );
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-32">
            <Navbar />
            
            <div className="pt-32 pb-20 bg-gradient-to-r from-blue-600/5 to-transparent border-b border-slate-900">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-black mb-6 tracking-tight">Hire your <br /><span className="text-blue-600">Next Tech Legend.</span></h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 italic">Join 2000+ tech leaders and startups finding top-tier talent every single day.</p>
                    
                    {/* Stepper */}
                    <div className="flex items-center justify-center gap-4 mb-20 max-w-lg mx-auto">
                        {[1, 2, 3].map((s) => (
                            <React.Fragment key={s}>
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${
                                    step >= s ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-950 border-slate-800 text-slate-500'
                                }`}>
                                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                                </div>
                                {s < 3 && <div className={`h-1 flex-1 rounded-full transition-all duration-1000 ${step > s ? 'bg-blue-600' : 'bg-slate-900'}`} />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-16 relative">
                 <form 
                    onSubmit={step === 3 ? handlePublish : nextStep}
                    className="p-10 bg-slate-900/40 backdrop-blur-3xl border border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden min-h-[500px]"
                 >
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <h3 className="text-3xl font-black flex items-center gap-4 mb-10"><Briefcase className="w-8 h-8 text-blue-500" /> Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Job Title</label>
                                        <div className="relative group">
                                           <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                           <input 
                                                type="text" 
                                                placeholder="e.g. Senior Frontend Engineer" 
                                                className={`w-full bg-slate-950/50 border ${errors.title ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-12 py-5 outline-none focus:border-blue-600 transition-all font-bold group-hover:bg-slate-950`}
                                                value={formData.title}
                                                onChange={(e) => {
                                                    setFormData({...formData, title: e.target.value});
                                                    if (errors.title) setErrors({...errors, title: ''});
                                                }}
                                            />
                                         </div>
                                         {errors.title && <p className="text-red-500 text-xs font-bold pl-2">{errors.title}</p>}
                                     </div>
                                     <div className="space-y-4">
                                         <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Company Name</label>
                                         <div className="relative group">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                            <input 
                                                type="text" 
                                                placeholder="e.g. Acme Corp" 
                                                className={`w-full bg-slate-950/50 border ${errors.company ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-12 py-5 outline-none focus:border-blue-600 transition-all font-bold group-hover:bg-slate-950`}
                                                value={formData.company}
                                                onChange={(e) => {
                                                    setFormData({...formData, company: e.target.value});
                                                    if (errors.company) setErrors({...errors, company: ''});
                                                }}
                                            />
                                         </div>
                                         {errors.company && <p className="text-red-500 text-xs font-bold pl-2">{errors.company}</p>}
                                     </div>
                                     <div className="space-y-4">
                                         <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Location</label>
                                         <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                            <input 
                                                type="text" 
                                                placeholder="e.g. San Francisco or Remote" 
                                                className={`w-full bg-slate-950/50 border ${errors.location ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-12 py-5 outline-none focus:border-blue-600 transition-all font-bold group-hover:bg-slate-950`}
                                                value={formData.location}
                                                onChange={(e) => {
                                                    setFormData({...formData, location: e.target.value});
                                                    if (errors.location) setErrors({...errors, location: ''});
                                                }}
                                            />
                                         </div>
                                         {errors.location && <p className="text-red-500 text-xs font-bold pl-2">{errors.location}</p>}
                                     </div>
                                     <div className="space-y-4">
                                         <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Job Category</label>
                                         <div className="relative group">
                                            <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                            <select 
                                                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-12 py-5 outline-none focus:border-blue-600 transition-all font-bold appearance-none group-hover:bg-slate-950"
                                                value={formData.category}
                                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                            >
                                               {['Engineering', 'Design', 'Marketing', 'Sales', 'Product', 'Customer Support'].map(c => <option key={c}>{c}</option>)}
                                            </select>
                                         </div>
                                     </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <h3 className="text-3xl font-black flex items-center gap-4 mb-10"><FileText className="w-8 h-8 text-blue-500" /> Details & Description</h3>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Role Description</label>
                                        <textarea 
                                            rows={6}
                                            placeholder="Write about the role, expectations and the team (min 50 chars)..." 
                                            className={`w-full bg-slate-950/50 border ${errors.description ? 'border-red-500' : 'border-slate-800'} rounded-[2rem] px-8 py-5 outline-none focus:border-blue-600 transition-all font-medium leading-relaxed`}
                                            value={formData.description}
                                            onChange={(e) => {
                                                setFormData({...formData, description: e.target.value});
                                                if (errors.description) setErrors({...errors, description: ''});
                                            }}
                                        />
                                        {errors.description && <p className="text-red-500 text-xs font-bold pl-4">{errors.description}</p>}
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Requirements</label>
                                        <textarea 
                                            rows={4}
                                            placeholder="Skills, experience, tools..." 
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-[2rem] px-8 py-5 outline-none focus:border-blue-600 transition-all font-medium leading-relaxed" 
                                            value={formData.requirements}
                                            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <h3 className="text-3xl font-black flex items-center gap-4 mb-10"><DollarSign className="w-8 h-8 text-blue-500" /> Compensation & Perks</h3>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">Salary Range</label>
                                        <div className="relative group">
                                           <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                           <input 
                                                type="text" 
                                                placeholder="e.g. $120k - $160k" 
                                                className={`w-full bg-slate-950/50 border ${errors.salary ? 'border-red-500' : 'border-slate-800'} rounded-[2rem] px-14 py-6 outline-none focus:border-blue-600 transition-all font-black text-2xl group-hover:bg-slate-950 shadow-inner`}
                                                value={formData.salary}
                                                onChange={(e) => {
                                                    setFormData({...formData, salary: e.target.value});
                                                    if (errors.salary) setErrors({...errors, salary: ''});
                                                }}
                                            />
                                        </div>
                                        {errors.salary && <p className="text-red-500 text-xs font-bold pl-6">{errors.salary}</p>}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Remote Friendly', 'Stock Options', 'Unlimited PTO', 'Health Insurance', 'Signing Bonus'].map(perk => {
                                           const isSelected = selectedPerks.includes(perk);
                                           return (
                                               <div 
                                                   key={perk} 
                                                   onClick={() => togglePerk(perk)}
                                                   className={cn(
                                                       "flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all border",
                                                       isSelected ? "bg-blue-600/10 border-blue-600" : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                                                   )}
                                               >
                                                    <div className={cn(
                                                        "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                                                        isSelected ? "border-blue-600 bg-blue-600" : "border-slate-800"
                                                    )}>
                                                       {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                                    </div>
                                                    <span className={cn(
                                                        "font-bold transition-colors",
                                                        isSelected ? "text-white" : "text-slate-400"
                                                    )}>{perk}</span>
                                               </div>
                                           );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="mt-16 pt-8 border-t border-slate-800 flex items-center justify-between">
                         <Button 
                            type="button"
                            variant="outline" 
                            className={`rounded-2xl py-6 px-10 gap-2 border-slate-800 font-bold ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            onClick={prevStep}
                         >
                            <ChevronLeft className="w-5 h-5" /> Previous
                         </Button>
                         
                         {step < 3 ? (
                            <Button 
                                type="submit"
                                className="rounded-2xl py-6 px-12 gap-2 font-black text-lg shadow-blue-500/20"
                            >
                                Continue <ChevronRight className="w-6 h-6" />
                            </Button>
                         ) : (
                            <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-2xl py-6 px-16 gap-2 font-black text-xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 to-indigo-600 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Publishing...' : 'Publish Job'} <CheckCircle2 className="w-6 h-6" />
                            </Button>
                         )}
                    </div>
                 </form>
            </div>
        </main>
    );
};

export default PostJob;

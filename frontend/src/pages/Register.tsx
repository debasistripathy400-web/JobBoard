import * as React from 'react';
import { User, Building2, Mail, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

const Register: React.FC = () => {
    const [role, setRole] = React.useState<'seeker' | 'employer' | null>(null);
    const [step, setStep] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Fix: Get redirect path or default home
    const from = (location.state as any)?.from?.pathname || '/';

    const handleRegister = () => {
        if (!email || !password || !role) return;
        login(role, email);
        navigate(from, { replace: true });
    };

    const handleGoogleRegister = () => {
        // Fast track respects role choice or defaults to seeker
        const chosenRole = role || 'seeker';
        login(chosenRole, 'google.user@gmail.com', `Google ${chosenRole === 'seeker' ? 'Candidate' : 'Partner'}`);
        navigate(from, { replace: true });
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 blur-[150px] opacity-20">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full" />
            </div>

            <div className="max-w-xl w-full px-6 py-20 relative z-10">
                <div className="text-center mb-12">
                   <Link to="/" className="text-3xl font-black italic tracking-tighter mb-8 inline-block">JOB<span className="text-blue-600">VERSE</span></Link>
                   <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter italic overflow-hidden">Create your <span className="text-blue-600">Legacy.</span></h1>
                   <p className="text-slate-400 font-medium">Join 2M+ professionals worldwide.</p>
                </div>

                <div className="bg-slate-900/40 backdrop-blur-3xl border border-slate-800 rounded-[3rem] p-10 shadow-3xl overflow-hidden min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, x: -30 }}
                                className="space-y-12"
                            >
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">First, Choose your Persona.</h3>
                                    <p className="text-slate-500 text-sm font-bold">This helps us customize your platform experience.</p>
                                </div>
                                
                                <div className="grid grid-cols-1 gap-6">
                                    <div 
                                        onClick={() => setRole('seeker')}
                                        className={cn(
                                            "p-8 rounded-3xl border-2 cursor-pointer transition-all flex items-center gap-6 group",
                                            role === 'seeker' ? "border-blue-600 bg-blue-600/10 shadow-xl shadow-blue-500/10" : "border-slate-800 bg-slate-950/50 hover:border-slate-700"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all",
                                            role === 'seeker' ? "bg-blue-600 text-white shadow-lg" : "bg-slate-900 text-slate-500 group-hover:text-white"
                                        )}>
                                            <User className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-1">I'm a Candidate</h4>
                                            <p className="text-slate-500 text-sm font-medium">Looking for my next elite tech career move.</p>
                                        </div>
                                        {role === 'seeker' && <CheckCircle2 className="w-8 h-8 text-blue-500 ml-auto" />}
                                    </div>

                                    <div 
                                        onClick={() => setRole('employer')}
                                        className={cn(
                                            "p-8 rounded-3xl border-2 cursor-pointer transition-all flex items-center gap-6 group",
                                            role === 'employer' ? "border-blue-600 bg-blue-600/10 shadow-xl shadow-blue-500/10" : "border-slate-800 bg-slate-950/50 hover:border-slate-700"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all",
                                            role === 'employer' ? "bg-blue-600 text-white shadow-lg" : "bg-slate-900 text-slate-500 group-hover:text-white"
                                        )}>
                                            <Building2 className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-1">I'm an Employer</h4>
                                            <p className="text-slate-500 text-sm font-medium">Hiring verified world-class engineering talent.</p>
                                        </div>
                                        {role === 'employer' && <CheckCircle2 className="w-8 h-8 text-blue-500 ml-auto" />}
                                    </div>
                                </div>

                                <Button 
                                    disabled={!role}
                                    onClick={() => setStep(2)}
                                    className="w-full h-20 rounded-3xl py-6 font-black text-2xl gap-2 shadow-2xl transition-all font-mono italic tracking-tighter"
                                >
                                    Continue <ChevronRight className="w-8 h-8" />
                                </Button>

                                <div className="space-y-4 pt-6 mt-6 border-t border-slate-800/50">
                                    <div className="flex items-center gap-4 py-2">
                                        <div className="h-px flex-1 bg-slate-800/50" />
                                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Fast Track</span>
                                        <div className="h-px flex-1 bg-slate-800/50" />
                                    </div>

                                    <button 
                                        onClick={handleGoogleRegister}
                                        className="w-full h-20 rounded-3xl border border-slate-800 bg-slate-950/50 hover:bg-slate-900 transition-all flex items-center justify-center gap-4 font-black text-xl uppercase tracking-tighter italic group"
                                    >
                                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                                        Continue with Google
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleRegister();
                                    }}
                                    className="space-y-8"
                                >
                                <div className="text-center space-y-2 mb-10">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter underline decoration-blue-500/40 italic">Final Details.</h3>
                                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{role === 'seeker' ? 'Candidate Profile' : 'Company Dashboard'}</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative group">
                                         <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                         <input 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Work Email" 
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-3xl py-6 px-16 outline-none focus:border-blue-600 transition-all font-bold text-lg" 
                                         />
                                    </div>
                                    <div className="relative group">
                                         <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                         <input 
                                            type="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Key Phrase (Password)" 
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-3xl py-6 px-16 outline-none focus:border-blue-600 transition-all font-bold text-lg" 
                                         />
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button 
                                        type="submit"
                                        disabled={!email || !password}
                                        className="w-full h-20 rounded-3xl py-6 font-black text-2xl gap-2 shadow-2xl transition-all font-mono italic tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Submit Registration <CheckCircle2 className="w-8 h-8" />
                                    </Button>
                                    <button 
                                        type="button"
                                        onClick={() => setStep(1)} 
                                        className="w-full text-center mt-6 text-slate-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest"
                                    >
                                        Change Persona
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
                </div>
                
                <p className="text-center mt-12 text-slate-500 font-medium">Already have an account? <Link to="/login" className="text-blue-500 font-black hover:underline underline-offset-4 font-mono">AUTHORIZE ACCESS</Link></p>
            </div>
        </main>
    );
};

export default Register;

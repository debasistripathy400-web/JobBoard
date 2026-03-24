import * as React from 'react';
import { Mail, Lock, ShieldCheck, Building2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPending, setIsPending] = React.useState(false);
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Fix: Get redirect path or default home
    const from = (location.state as any)?.from?.pathname || '/';

    const [role, setRole] = React.useState<'seeker' | 'employer'>('seeker');

    const handleLogin = () => {
        if (!email || !password) return;
        login(role, email);
        navigate(from, { replace: true });
    };

    const handleGoogleLogin = async () => {
        setIsPending(true);
        await loginWithGoogle(role);
        setIsPending(false);
        navigate(from, { replace: true });
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-transparent pointer-events-none" />
            
            <div className="max-w-xl w-full px-6 py-20 relative z-10">
                <div className="text-center mb-16">
                   <Link to="/" className="text-3xl font-black italic tracking-tighter mb-8 inline-block">JOB<span className="text-blue-600 font-black">VERSE</span></Link>
                   <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter italic">Welcome <span className="text-blue-600 block leading-[1]">Back.</span></h1>
                   <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
                </div>

                <div className="bg-slate-900/40 backdrop-blur-3xl border border-slate-800 rounded-[3rem] p-12 shadow-3xl">
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                        className="space-y-8"
                    >
                        {/* Role Selector */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { id: 'seeker', label: 'Candidate', icon: Mail },
                                { id: 'employer', label: 'Employer', icon: Building2 }
                            ].map((item) => (
                                <div 
                                    key={item.id}
                                    onClick={() => setRole(item.id as any)}
                                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-center flex flex-col items-center gap-2 ${
                                        role === item.id ? 'border-blue-600 bg-blue-600/10 text-white' : 'border-slate-800 text-slate-500 hover:border-slate-700'
                                    }`}
                                >
                                    <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <label className="text-sm font-black text-slate-500 uppercase tracking-widest pl-1">Credentials</label>
                            <div className="relative group">
                                 <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                 <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Work Email" 
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-3xl py-6 px-16 outline-none focus:border-blue-600 transition-all font-bold text-lg group-hover:bg-slate-950" 
                                 />
                            </div>
                            <div className="relative group">
                                 <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                 <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Pass Phrase" 
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-3xl py-6 px-16 outline-none focus:border-blue-600 transition-all font-bold text-lg group-hover:bg-slate-950" 
                                 />
                            </div>
                        </div>

                        <div className="pt-6 space-y-4">
                            <Button 
                                type="submit"
                                disabled={!email || !password}
                                className="w-full h-20 rounded-3xl py-6 font-black text-2xl gap-2 shadow-2xl transition-all font-mono italic tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Authorize Access <ShieldCheck className="w-8 h-8" />
                            </Button>

                            <div className="flex items-center gap-4 py-4">
                                <div className="h-px flex-1 bg-slate-800" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Protocol Delta</span>
                                <div className="h-px flex-1 bg-slate-800" />
                            </div>

                            <button 
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={isPending}
                                className="w-full h-20 rounded-3xl border border-slate-800 bg-slate-950/50 hover:bg-slate-900 transition-all flex items-center justify-center gap-4 font-black text-xl uppercase tracking-tighter italic group disabled:opacity-50"
                            >
                                {isPending ? (
                                    <span className="flex items-center gap-3 text-blue-500 animate-pulse">
                                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        Authorizing Protocol...
                                    </span>
                                ) : (
                                    <>
                                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                                        Continue with Google
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                
                <p className="text-center mt-12 text-slate-500 font-medium">New recruit? <Link to="/register" className="text-blue-500 font-extrabold hover:underline underline-offset-4 tracking-tighter italic">CREATE CREDENTIALS</Link></p>
            </div>
        </main>
    );
};

export default Login;

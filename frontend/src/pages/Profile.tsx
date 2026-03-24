import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { User, FileText, Briefcase, Settings, Upload, Plus, Trash2, LayoutDashboard, Heart, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = React.useState('Dashboard');
    
    // Get initials for avatar
    const getInitials = (name: string) => {
        const parts = name.trim().split(/\s+/);
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-32">
            <Navbar />

            <div className="pt-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] text-center"
                    >
                        <div className="w-24 h-24 bg-blue-600 rounded-[1.5rem] mx-auto mb-6 flex items-center justify-center text-3xl font-black shadow-2xl shadow-blue-600/20">
                            {user?.name ? getInitials(user.name) : '??'}
                        </div>
                        <h2 className="text-xl md:text-2xl font-black mb-2 break-words leading-tight px-2">
                            {user?.name || 'Anonymous User'}
                        </h2>
                        <p className="text-slate-500 mb-8">{user?.role === 'seeker' ? 'Software Engineer' : 'Lead Architect'}</p>
                        
                        <div className="space-y-2">
                             {[
                                { icon: LayoutDashboard, label: 'Dashboard' },
                                { icon: Heart, label: 'Saved Jobs' },
                                { icon: Bell, label: 'Job Alerts' },
                                { icon: Settings, label: 'Settings' }
                             ].map((item) => (
                                <button 
                                    key={item.label}
                                    onClick={() => setActiveTab(item.label)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                                        activeTab === item.label ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5" /> {item.label}
                                </button>
                             ))}
                        </div>
                    </motion.div>

                    <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] space-y-6">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest text-xs">Profile Strength</h4>
                        <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-[85%] bg-blue-500 shadow-lg shadow-blue-500/50" />
                        </div>
                        <p className="text-sm text-slate-400 text-center font-medium">85% Complete</p>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-12">
                    {activeTab === 'Dashboard' && (
                        <>
                            <motion.section 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem]"
                            >
                                <h3 className="text-3xl font-black mb-10 flex items-center gap-4">Personal Info <User className="w-8 h-8 text-blue-500" /></h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase">Full Name</label>
                                        <input type="text" value={user?.name || ''} readOnly className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 focus:border-blue-500 outline-none font-medium" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase">Email Address</label>
                                        <input type="email" value={user?.email || ''} readOnly className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 focus:border-blue-500 outline-none font-medium" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase">Phone Number</label>
                                        <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 focus:border-blue-500 outline-none font-medium" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-500 uppercase">Location</label>
                                        <input type="text" defaultValue="San Francisco, USA" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 focus:border-blue-500 outline-none font-medium" />
                                    </div>
                                </div>
                                <div className="mt-12 flex justify-end">
                                    <Button 
                                        onClick={() => alert('Profile Updated Successfully!')}
                                        className="px-10 rounded-xl font-bold bg-blue-600 hover:scale-105 shadow-xl shadow-blue-600/20"
                                    >
                                        Save Changes
                                    </Button>
                                </div>
                            </motion.section>

                            <motion.section 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem]"
                            >
                                <h3 className="text-3xl font-black mb-10 flex items-center gap-4">Resume <FileText className="w-8 h-8 text-blue-500" /></h3>
                                <div className="p-8 border-2 border-dashed border-slate-800 rounded-[2rem] text-center group hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer">
                                    <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto mb-6 flex items-center justify-center text-slate-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Upload className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Upload your resume</h4>
                                    <p className="text-slate-500">Support PDF, DOCX up to 10MB</p>
                                </div>
                            </motion.section>

                            <motion.section 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem]"
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <h3 className="text-3xl font-black flex items-center gap-4">Skills & Tools <Briefcase className="w-8 h-8 text-blue-500" /></h3>
                                    <Button variant="ghost" className="flex gap-2">
                                        <Plus className="w-5 h-5" /> Add Multiple
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {['React', 'Django', 'TypeScript', 'PostgreSQL', 'Docker', 'Figma', 'GraphQL', 'AWS'].map((skill) => (
                                        <div key={skill} className="px-6 py-3 bg-slate-950/50 border border-slate-800 rounded-2xl flex items-center gap-3 group hover:border-blue-500 transition-colors">
                                            <span className="font-bold">{skill}</span>
                                            <Trash2 className="w-4 h-4 text-slate-600 hover:text-red-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        </>
                    )}

                    {activeTab === 'Saved Jobs' && (
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem] text-center"
                        >
                            <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black mb-4">No Saved Jobs Yet</h3>
                            <p className="text-slate-400 text-lg mb-10">Start exploring the marketplace to find your dream role.</p>
                            <Button className="px-10 rounded-xl" onClick={() => window.location.href = '/find-jobs'}>Browse Jobs</Button>
                        </motion.section>
                    )}

                    {activeTab === 'Job Alerts' && (
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem] text-center"
                        >
                            <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Bell className="w-10 h-10 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black mb-4">You're all caught up!</h3>
                            <p className="text-slate-400 text-lg mb-10">You'll receive notifications here when new jobs matching your profile are posted.</p>
                            <Button variant="outline" className="px-10 rounded-xl">Adjust Preferences</Button>
                        </motion.section>
                    )}

                    {activeTab === 'Settings' && (
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem]"
                        >
                            <h3 className="text-3xl font-black mb-10 flex items-center gap-4">Account Settings <Settings className="w-8 h-8 text-blue-500" /></h3>
                            <div className="space-y-8">
                                <div className="flex items-center justify-between p-6 bg-slate-950/50 border border-slate-800 rounded-2xl">
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Notifications</h4>
                                        <p className="text-slate-500 text-sm">Receive weekly job recommendations and updates.</p>
                                    </div>
                                    <div className="w-12 h-6 bg-blue-600 rounded-full p-1 cursor-pointer">
                                        <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-6 bg-slate-950/50 border border-slate-800 rounded-2xl">
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Two-Factor Authentication</h4>
                                        <p className="text-slate-500 text-sm">Add an extra layer of security to your account.</p>
                                    </div>
                                    <Button variant="outline" size="sm">Enable</Button>
                                </div>
                                <div className="pt-8 border-t border-slate-800 flex gap-4">
                                    <Button variant="ghost" className="text-red-500 hover:bg-red-500/10 hover:text-red-500">Deactivate Account</Button>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Profile;

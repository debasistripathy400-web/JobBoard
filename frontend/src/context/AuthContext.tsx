import * as React from 'react';

export type UserRole = 'seeker' | 'employer' | null;

interface AuthUser {
    id: string;
    email: string;
    role: UserRole;
    name: string;
}

interface AuthContextType {
    user: AuthUser | null;
    isLoggedIn: boolean;
    login: (role: UserRole, email?: string, name?: string) => void;
    loginWithGoogle: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = React.useState<AuthUser | null>(null);

    const login = (role: UserRole, email: string = 'user@example.com', name?: string) => {
        // Derive name if not provided
        const derivedName = name || email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
        
        setUser({
            id: Math.random().toString(36).substr(2, 9),
            email,
            role,
            name: derivedName
        });
    };

    const loginWithGoogle = (role: UserRole): Promise<void> => {
        // Show simulated "One Tap" or Google Prompt for 1.5s
        console.log("Initializing Google Identity Protocol...");
        
        return new Promise((resolve) => {
            setTimeout(() => {
                login(role, 'google.user@gmail.com', `Google ${role === 'seeker' ? 'Candidate' : 'Partner'}`);
                resolve();
            }, 1500);
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

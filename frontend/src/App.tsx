import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobListing from './pages/JobListing';
import JobDetail from './pages/JobDetail';
import Profile from './pages/Profile';
import Companies from './pages/Companies';
import Salaries from './pages/Salaries';
import PostJob from './pages/PostJob';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes - General */}
          <Route path="/find-jobs" element={<ProtectedRoute><JobListing /></ProtectedRoute>} />
          <Route path="/jobs/:id" element={<ProtectedRoute><JobDetail /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/companies" element={<ProtectedRoute><Companies /></ProtectedRoute>} />
          <Route path="/salaries" element={<ProtectedRoute><Salaries /></ProtectedRoute>} />
          
          {/* Role-Specific Protected Route */}
          <Route path="/post-a-job" element={
            <ProtectedRoute allowedRoles={['employer']}>
              <PostJob />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

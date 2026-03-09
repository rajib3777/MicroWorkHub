import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindJobs from './pages/FindJobs';
import JobDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfileSetup from './pages/ProfileSetup';
import PosterDashboard from './pages/PosterDashboard';
import SeekerDashboard from './pages/SeekerDashboard';
import AdminPanel from './pages/AdminPanel';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<FindJobs />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/setup-profile" element={<ProfileSetup />} />
              <Route path="/dashboard/poster" element={<PosterDashboard />} />
              <Route path="/dashboard/seeker" element={<SeekerDashboard />} />
              <Route path="/dashboard/admin" element={<AdminPanel />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

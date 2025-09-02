// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Login from './components/pages/Auth/Login';
import SignUp from './components/pages/Auth/SignUp';
import LandingPage from './components/pages/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import JobSeekerDashboard from './components/pages/JobSeeker/JobSeekerDashboard';
import JobDetails from './components/pages/JobSeeker/JobDetails';
import Categories from './components/pages/JobSeeker/Categories';
import SavedJobs from './components/pages/JobSeeker/SavedJobs';
import UserProfile from './components/pages/JobSeeker/UserProfile';
import ProtectedRoute from './routes/ProtectedRoute';
import EmployerDashboard from './components/pages/Employer/EmployerDashboard';
import JobPostingForm from './components/pages/Employer/JobPostingForm';
import ManageJobs from './components/pages/Employer/ManageJobs';
import ApplicationViewer from './components/pages/Employer/ApplicationViewer';
import EmployerProfilePage from './components/pages/Employer/EmployerProfilePage';
import Header from './components/pages/LandingPage/components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/find-jobs" element={<JobSeekerDashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/save-jobs" element={<SavedJobs />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute requiredRoles="employer" />}>
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/post-job" element={<JobPostingForm />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/applicants" element={<ApplicationViewer />} />
          <Route path="/company-profile" element={<EmployerProfilePage />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
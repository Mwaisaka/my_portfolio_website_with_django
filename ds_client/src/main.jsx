import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import School from "./components/kindegerten/primary.jsx";
import Highschool from "./components/HSCHOOL/secondary.jsx";
import DonationPage from "./components/donate/donate.jsx";
import ScholarshipPage from "./components/scholarship/scholarship.jsx";
import AdmissionPage from "./components/admissions/admissions.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Gallery from "./components/Portfolio/Gallery.jsx";
import Clock from "./components/Clock/Clock.jsx";
import Weather from "./components/Weather/Weather.jsx";

// import JobsList from "./components/Jobs/Jobs.jsx";
import AccountingRecords from "./components/Dashboard/Accounts/AccountRecords.jsx";
import Admin from "./components/Dashboard/Accounts/admin.jsx";
import Department from "./components/Dashboard/Accounts/Department.jsx";
import StudentInfo from "./components/Dashboard/Accounts/StudentInfo.jsx";

import News from "./components/Registration/News.jsx";
import StudentRegistration from "./components/Registration/StudentRegistration.jsx";
import Dashboard from "./components/SiteAdmin/Dashboard/Dashboard.jsx";
// import Sidebar from "./components/Dashboard/Sidebar.jsx";
import UsersList from "./components/Dashboard/UsersList.jsx";
import AdminLogin from "./components/SiteAdmin/AdminLogin.jsx";
// import ResetPassword from "./components/Login/ResetPassword.jsx";
// import UserRegistration from "./components/Login/UserRegistration.jsx";

import Report from "./components/Dashboard/Report/Report.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

import ToDoWrapper from "./components/Planner/ToDoWrapper.jsx";
import SubscribersList from "./components/SiteAdmin/Dashboard/SubscribersList.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import EditTestimonials from "./components/Testimonials/EditTestimonials.jsx";


function Main() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    fetch("http://127.0.0.1:5555/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="inscription" element={<StudentRegistration />} />
        <Route path="news" element={<News />} />
        <Route path="StudentRegistration" element={<StudentRegistration />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="school" element={<School />} />
        <Route path="secondary" element={<Highschool />} />
        <Route path="donate" element={<DonationPage />} />
        <Route path="scholarship" element={<ScholarshipPage />} />
        <Route path="admissions" element={<AdmissionPage />} />
        <Route
          path="dashboard"
          element={
            <Dashboard
              onLogin={handleLogin}
              onLogout={handleLogout}
              user={user}
            />
          }
        />
        <Route path="/UsersList" element={<UsersList />} />
        <Route path="/SubscribersList" element={<SubscribersList />} />
        <Route
          path="admin-login"
          element={<AdminLogin onLogin={handleLogin} user={user} />}
        />


        <Route path="accounting-records" element={<AccountingRecords />} />
        <Route path="admin" element={<Admin />} />
        <Route path="departments" element={<Department />} />
        <Route path="studentinfo" element={<StudentInfo />} />
        <Route path="reports" element={<Report />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="planner" element={<ToDoWrapper />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="clock" element={<Clock />}/>
        <Route path="weather" element={<Weather />} />
        <Route path="edittestimonials" element={<EditTestimonials />} />
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

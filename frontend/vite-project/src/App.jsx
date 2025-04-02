import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from "./components/RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AboutUs from "./components/about-us/AboutUs";
import UserLoginStore from "./context/Userstore"; 
import Routingerror from "./components/Routingerror";
import Curriculu_home from "./components/curriculum/Curriculum_home/Curriculum_home";
import Syllabus from "./components/curriculum/syllabus/Syllabus";
import Textbooks from "./components/curriculum/Textbooks/Textbooks";
import Attendance_track from "./components/attendance/Attendance_track";
import Dashboard from "./components/dashboard/Dashboard";
import SemI from "./components/curriculum/syllabus/semI";
import SemII from "./components/curriculum/syllabus/semII";
import SemIII from "./components/curriculum/syllabus/semIII";
import SemIV from "./components/curriculum/syllabus/semIV";
import SemV from "./components/curriculum/syllabus/semV";
import SemVI from "./components/curriculum/syllabus/semVI";
import SemVII from "./components/curriculum/syllabus/semVII";
import SemVIII from "./components/curriculum/syllabus/semVIII";


function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<Routingerror />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />, 
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "curriculum_track",
          element:<Curriculu_home />,
        },
        {
          path:"syllabus",
          element:<Syllabus />,
         },
         {
          path:"Textbooks",
          element:<Textbooks />,
         },
        {
          path:"attendance",
          element:<Attendance_track />,
        },
        {
          path:"dashboard",
          element:<Dashboard />,
        },
        {
          path:"semesterI",
          element:<SemI />,
        },
        {
          path:"semesterII",
          element:<SemII />,
        },
        {
          path:"semesterIII",
          element:<SemIII />,
        },
        {
          path:"semesterIV",
          element:<SemIV />,
        },
        {
          path:"semesterV",
          element:<SemV />,
        },
        {
          path:"semesterVI",
          element:<SemVI />,
        },
        {
          path:"semesterVII",
          element:<SemVII />,
        },
        {
          path:"semesterVIII",
          element:<SemVIII />,
        },
      ],
    },
  ]);

  return (
    <UserLoginStore>
      <div className="main">
        <RouterProvider router={browserRouter} />
      </div>
    </UserLoginStore>
  );
}

export default App;

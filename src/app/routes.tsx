import { createBrowserRouter } from "react-router";
import GetStarted from "./pages/GetStarted.jsx";
import GetStartedAlt from "./pages/GetStartedAlt";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Repair from "./pages/Repair";
import Levels from "./pages/Levels";
import Quiz from "./pages/Quiz";
import Report from "./pages/Report";
import Question from "./pages/Question";
import Admin from "./pages/Admin";
import UserProfile from "./pages/UserProfile";
import FraudAnalysis from "./pages/FraudAnalysis";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted />,
  },
  {
    path: "/alt",
    element: <GetStartedAlt />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "repair",
        element: <Repair />,
      },
      {
        path: "levels",
        element: <Levels />,
      },
      {
        path: "quiz/:levelId",
        element: <Quiz />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "fraud-analysis",
        element: <FraudAnalysis />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);
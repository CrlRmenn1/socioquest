import { createBrowserRouter, RouterProvider } from 'react-router'
import { AuthProvider } from './app/contexts/AuthContext.tsx'
import HomePage from './pages/HomePage.jsx'
import Login from './app/pages/Login.tsx'
import Register from './app/pages/Register.tsx'
import Dashboard from './app/pages/Dashboard.tsx'
import Repair from './app/pages/Repair.tsx'
import Levels from './app/pages/Levels.tsx'
import Quiz from './app/pages/Quiz.tsx'
import Report from './app/pages/Report.tsx'
import Question from './app/pages/Question.tsx'
import Admin from './app/pages/Admin.tsx'
import UserProfile from './app/pages/UserProfile.tsx'
import FraudAnalysis from './app/pages/FraudAnalysis.tsx'
import MainLayout from './app/layouts/MainLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'repair',
        element: <Repair />,
      },
      {
        path: 'levels',
        element: <Levels />,
      },
      {
        path: 'quiz/:levelId',
        element: <Quiz />,
      },
      {
        path: 'report',
        element: <Report />,
      },
      {
        path: 'question',
        element: <Question />,
      },
      {
        path: 'fraud-analysis',
        element: <FraudAnalysis />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'profile',
        element: <UserProfile />,
      },
    ],
  },
  { path: '*', element: <HomePage /> },
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App

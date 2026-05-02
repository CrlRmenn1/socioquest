import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { 
  Users, 
  Target, 
  Calendar, 
  Activity, 
  TrendingUp, 
  Shield,
  AlertTriangle,
  CheckCircle2,
  Settings,
  Play,
  Pause
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const departmentStats = [
  { name: "IT Department", users: 24, avgSafety: 85, threats: 12, reports: 18 },
  { name: "Finance", users: 18, avgSafety: 45, threats: 28, reports: 10 },
  { name: "HR", users: 15, avgSafety: 70, threats: 15, reports: 14 },
  { name: "Admin", users: 22, avgSafety: 60, threats: 20, reports: 12 },
  { name: "Operations", users: 30, avgSafety: 90, threats: 8, reports: 25 },
];

const recentActivity = [
  { user: "User #2847", action: "Completed Level 2 Quiz", time: "5 min ago", type: "success", dept: "Finance" },
  { user: "User #1923", action: "Reported phishing email", time: "12 min ago", type: "report", dept: "IT Department" },
  { user: "User #4561", action: "Failed simulation", time: "25 min ago", type: "warning", dept: "HR" },
  { user: "User #2847", action: "Repaired Finance dept", time: "1 hour ago", type: "repair", dept: "Finance" },
  { user: "User #3089", action: "Achieved Level 3", time: "2 hours ago", type: "success", dept: "Operations" },
];

export default function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [simulationActive, setSimulationActive] = useState(true);

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Monitor organization-wide security health and manage simulations.
            </p>
          </div>
          <Button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            variant="outline"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Logout
          </Button>
        </div>

        {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-6">
        <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-5">
          <div className="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-[0.2em]">
            <Users className="w-4 h-4 text-pink-500" />
            Total Users
          </div>
          <p className="mt-4 text-3xl font-semibold">109</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-5">
          <div className="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-[0.2em]">
            <Target className="w-4 h-4 text-pink-500" />
            Active Sims
          </div>
          <p className="mt-4 text-3xl font-semibold">3</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-5">
          <div className="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-[0.2em]">
            <TrendingUp className="w-4 h-4 text-green-500" />
            Avg Safety
          </div>
          <p className="mt-4 text-3xl font-semibold">70%</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-5">
          <div className="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-[0.2em]">
            <Activity className="w-4 h-4 text-pink-500" />
            Reports
          </div>
          <p className="mt-4 text-3xl font-semibold">79</p>
        </div>
      </div>

      {/* Simulation Control */}
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr] mb-6">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-pink-500/20">
                {simulationActive ? (
                  <Play className="w-5 h-5 text-pink-500" />
                ) : (
                  <Pause className="w-5 h-5 text-gray-500" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">Simulation Status</h3>
                <p className="text-sm text-gray-400">
                  {simulationActive
                    ? 'Simulations are currently running'
                    : 'No active simulations'}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setSimulationActive(!simulationActive)}
              variant="outline"
              size="sm"
              className="rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500/10"
            >
              {simulationActive ? 'Stop' : 'Start'}
            </Button>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button className="rounded-3xl bg-pink-500 px-4 py-3 text-sm font-semibold text-white hover:bg-pink-600">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
            <Button variant="outline" className="rounded-3xl border border-gray-700 px-4 py-3 text-sm text-white hover:bg-gray-800">
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Admin Snapshot</h3>
              <p className="text-sm text-gray-500">Everything you need at a glance.</p>
            </div>
            <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">Live</div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-gray-400">Reports this hour</p>
              <p className="text-2xl font-semibold">25</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-gray-400">Active alerts</p>
              <p className="text-2xl font-semibold">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="departments" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900">
          <TabsTrigger value="departments" className="data-[state=active]:bg-pink-500">
            Departments
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-pink-500">
            Activity
          </TabsTrigger>
        </TabsList>

        {/* Departments Tab */}
        <TabsContent value="departments" className="space-y-3">
          {departmentStats.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <Shield className={`w-5 h-5 ${
                    dept.avgSafety >= 80 ? 'text-green-500' :
                    dept.avgSafety >= 60 ? 'text-yellow-500' :
                    dept.avgSafety >= 40 ? 'text-orange-500' :
                    'text-red-500'
                  }`} />
                  <div>
                    <h3 className="font-medium">{dept.name}</h3>
                    <p className="text-xs text-gray-500">{dept.users} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${
                    dept.avgSafety >= 80 ? 'text-green-500' :
                    dept.avgSafety >= 60 ? 'text-yellow-500' :
                    dept.avgSafety >= 40 ? 'text-orange-500' :
                    'text-red-500'
                  }`}>
                    {dept.avgSafety}%
                  </p>
                  <p className="text-xs text-gray-500">Avg Safety</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-800">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Threats Sent</p>
                  <p className="font-medium">{dept.threats}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Reports</p>
                  <p className="font-medium text-pink-500">{dept.reports}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-2">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 ${
                  activity.type === 'success' ? 'text-green-500' :
                  activity.type === 'warning' ? 'text-yellow-500' :
                  activity.type === 'report' ? 'text-blue-500' :
                  'text-pink-500'
                }`}>
                  {activity.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> :
                   activity.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                   activity.type === 'report' ? <Shield className="w-5 h-5" /> :
                   <Activity className="w-5 h-5" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <p className="text-xs text-gray-400">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">
                  {activity.time}
                </span>
              </div>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
}
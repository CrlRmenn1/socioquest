import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "motion/react";
import {
  Activity,
  AlertTriangle,
  Calendar,
  CheckCircle2,
  LogOut,
  Pause,
  Play,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const departmentStats = [
  { name: "IT Department", users: 24, avgSafety: 85, threats: 12, reports: 18 },
  { name: "Finance", users: 18, avgSafety: 45, threats: 28, reports: 10 },
  { name: "HR", users: 15, avgSafety: 70, threats: 15, reports: 14 },
  { name: "Admin", users: 22, avgSafety: 60, threats: 20, reports: 12 },
  { name: "Operations", users: 30, avgSafety: 90, threats: 8, reports: 25 },
];

const recentActivity = [
  { user: "User #2847", action: "Completed Level 2 Quiz", time: "5 min ago", type: "success" },
  { user: "User #1923", action: "Reported phishing email", time: "12 min ago", type: "report" },
  { user: "User #4561", action: "Failed simulation", time: "25 min ago", type: "warning" },
  { user: "User #2847", action: "Repaired Finance dept", time: "1 hour ago", type: "repair" },
  { user: "User #3089", action: "Achieved Level 3", time: "2 hours ago", type: "success" },
];

const getSafetyColor = (safety: number) => {
  if (safety >= 80) return "#22c55e";
  if (safety >= 60) return "#eab308";
  if (safety >= 40) return "#f97316";
  return "#ef4444";
};

export default function Admin() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [simulationActive, setSimulationActive] = useState(true);

  if (!user) return null;

  const stats = [
    { label: "Total Users", value: "109", icon: Users, color: "text-pink-500", bgColor: "bg-pink-500/20" },
    { label: "Active Sims", value: "3", icon: Target, color: "text-blue-500", bgColor: "bg-blue-500/20" },
    { label: "Avg Safety", value: "70%", icon: TrendingUp, color: "text-green-500", bgColor: "bg-green-500/20" },
    { label: "Reports", value: "79", icon: Activity, color: "text-purple-500", bgColor: "bg-purple-500/20" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-[#070b12] to-black p-4 sm:p-6">
      <div className="mx-auto w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-3xl bg-pink-500/20">
              <Shield className="h-6 w-6 text-pink-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold text-white">{user.name}</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin Access</p>
              <p className="text-sm text-slate-300">{user.department}</p>
            </div>
          </div>
        </motion.div>

        <div className="mb-6 grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 backdrop-blur-sm"
            >
              <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Simulation Control</h3>
              <p className="mt-1 text-xs text-slate-500">Manage live training activity</p>
            </div>
            <button
              type="button"
              onClick={() => setSimulationActive(!simulationActive)}
              className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1.5 text-xs font-semibold text-pink-300"
            >
              {simulationActive ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              {simulationActive ? "Running" : "Paused"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-3xl bg-pink-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
            >
              <Calendar className="mr-2 inline h-4 w-4" />
              Schedule
            </button>
            <button
              type="button"
              className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Settings className="mr-2 inline h-4 w-4" />
              Configure
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Department Health</h3>
          <div className="space-y-3">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">{dept.name}</p>
                    <p className="text-xs text-slate-500">{dept.users} users • {dept.threats} threats</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold" style={{ color: getSafetyColor(dept.avgSafety) }}>
                      {dept.avgSafety}%
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {dept.avgSafety >= 80 ? "Secure" : dept.avgSafety >= 60 ? "Stable" : dept.avgSafety >= 40 ? "Warning" : "Critical"}
                    </p>
                  </div>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${dept.avgSafety}%`, backgroundColor: getSafetyColor(dept.avgSafety) }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-slate-500">
                  <span>Threats: {dept.threats}</span>
                  <span>Reports: {dept.reports}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="rounded-2xl border border-slate-700/50 bg-slate-800/20 p-3">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${activity.type === "success" ? "text-green-500" : activity.type === "warning" ? "text-yellow-500" : activity.type === "report" ? "text-blue-500" : "text-pink-500"}`}>
                    {activity.type === "success" ? <CheckCircle2 className="h-5 w-5" /> : activity.type === "warning" ? <AlertTriangle className="h-5 w-5" /> : activity.type === "report" ? <Shield className="h-5 w-5" /> : <Activity className="h-5 w-5" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{activity.user}</p>
                    <p className="text-xs text-slate-400">{activity.action}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs text-slate-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-red-500/15 to-orange-500/15 py-4 font-semibold text-white transition hover:border-red-400/30 hover:from-red-500/25 hover:to-orange-500/25"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </motion.button>
      </div>
    </div>
  );
}

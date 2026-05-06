import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Trophy, Target, Award, Shield, LogOut } from "lucide-react";
import { motion } from "motion/react";
import { Progress } from "../components/ui/progress";

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) return null;

  const stats = [
    { label: "Total Points", value: user.points, icon: Trophy, color: "text-pink-500", bgColor: "bg-pink-500/20" },
    { label: "Level", value: "2", icon: Target, color: "text-blue-500", bgColor: "bg-blue-500/20" },
    { label: "Completed Quizzes", value: "3", icon: Award, color: "text-green-500", bgColor: "bg-green-500/20" },
    { label: "Threats Reported", value: "12", icon: Shield, color: "text-purple-500", bgColor: "bg-purple-500/20" },
  ];

  const achievements = [
    { id: 1, title: "First Report", description: "Reported your first threat", unlocked: true },
    { id: 2, title: "Quiz Master", description: "Completed 5 quizzes", unlocked: true },
    { id: 3, title: "Department Guardian", description: "Maintained 80% safety for 7 days", unlocked: false },
    { id: 4, title: "Cyber Sentinel", description: "Reached Level 5", unlocked: false },
  ];

  const recentActivity = [
    { action: "Completed Level 2 Quiz", points: "+100", time: "2 hours ago" },
    { action: "Reported phishing email", points: "+50", time: "5 hours ago" },
    { action: "Repaired Finance department", points: "-300", time: "1 day ago" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-[#070b12] to-black p-4 sm:p-6">
      <div className="mx-auto w-full max-w-md">
        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-3xl bg-pink-500/20">
              <span className="text-xl font-bold text-pink-400">{user.name.charAt(0)}</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold text-white">{user.name}</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Assigned</p>
              <p className="text-sm text-slate-300">{user.department}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid - 2x2 */}
        <div className="mb-6 grid gap-3 grid-cols-2">
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

        {/* Level Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em]">Level Progress</h3>
              <p className="text-xs text-slate-500 mt-1">Current XP</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-pink-500/20 px-3 py-1 text-sm font-semibold text-pink-400">
              Level 2
            </span>
          </div>
          <div className="space-y-3">
            <Progress value={(175 / 300) * 100} className="h-2.5 rounded-full bg-slate-800" />
            <p className="text-right text-xs font-semibold text-slate-300">175 / 300</p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-[0.2em]">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-2xl border p-3 transition ${
                  achievement.unlocked
                    ? "border-pink-500/30 bg-pink-500/10 hover:border-pink-500/50"
                    : "border-slate-700/50 bg-slate-800/30 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg ${
                      achievement.unlocked ? "bg-pink-500/30" : "bg-slate-700/50"
                    }`}
                  >
                    <Award className={`h-4 w-4 ${achievement.unlocked ? "text-pink-400" : "text-slate-500"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium ${achievement.unlocked ? "text-white" : "text-slate-400"}`}>
                      {achievement.title}
                    </p>
                    <p className={`text-xs ${achievement.unlocked ? "text-slate-400" : "text-slate-500"}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-[0.2em]">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="rounded-2xl border border-slate-700/50 bg-slate-800/20 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{activity.action}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                  <span
                    className={`text-sm font-semibold flex-shrink-0 ${
                      activity.points.startsWith("+") ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {activity.points}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logout Button - At Bottom */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          type="button"
          onClick={handleLogout}
          className="w-full rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-red-500/15 to-orange-500/15 py-4 font-semibold text-white transition hover:border-red-400/30 hover:from-red-500/25 hover:to-orange-500/25 hover:shadow-[0_0_24px_rgba(239,68,68,0.15)] flex items-center justify-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </motion.button>
      </div>
    </div>
  );
}

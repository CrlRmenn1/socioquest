import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { User, Building, Mail, Trophy, Target, Award, Shield } from "lucide-react";
import { motion } from "motion/react";
import { Progress } from "../components/ui/progress";

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) return null;

  const stats = [
    { label: "Total Points", value: user.points, icon: Trophy, color: "text-pink-500" },
    { label: "Level", value: "2", icon: Target, color: "text-blue-500" },
    { label: "Completed Quizzes", value: "3", icon: Award, color: "text-green-500" },
    { label: "Threats Reported", value: "12", icon: Shield, color: "text-purple-500" },
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

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Track your cyber-defense progress and achievements.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6">
          {/* Profile Summary */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-pink-500/15">
                  <User className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{user.name}</h2>
                  <div className="mt-2 space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{user.department}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-pink-500/20 bg-pink-500/10 px-4 py-3 text-sm text-pink-200">
                <p className="font-medium">Current Rank</p>
                <p className="text-lg font-semibold">Defender</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-gray-900/90 p-5"
              >
                <div className="flex items-center gap-3">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">{stat.label}</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold">Level Progress</h3>
                  <p className="text-sm text-gray-500">Keep pushing toward the next milestone.</p>
                </div>
                <span className="rounded-full bg-pink-500/15 px-3 py-1 text-sm text-pink-400">Level 2</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Current XP</span>
                  <span className="text-white">175 / 300</span>
                </div>
                <Progress value={(175 / 300) * 100} className="h-3 rounded-full bg-white/10" />
                <p className="text-xs text-gray-500">125 XP needed for Level 3</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold">Achievements</h3>
                <span className="text-sm text-gray-400">4 total</span>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`rounded-3xl border p-4 ${achievement.unlocked ? 'border-pink-500/20 bg-pink-500/10' : 'border-gray-800 bg-gray-900/80 opacity-90'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-2xl ${achievement.unlocked ? 'bg-pink-500/20' : 'bg-gray-800'}`}>
                        <Award className={`w-5 h-5 ${achievement.unlocked ? 'text-pink-500' : 'text-gray-500'}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white">{achievement.title}</p>
                        <p className="text-xs text-gray-500">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gray-900/95 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <span className="text-sm text-gray-500">Latest events</span>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-800 bg-black/50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <span className={`text-sm font-semibold ${activity.points.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {activity.points}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Outlet, useNavigate, useLocation } from "react-router";
import { Shield, Home, Wrench, Trophy, FileText, Settings, Coins, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  // Different nav items for admin vs user
  const adminNavItems = [
    { icon: Home, label: "Map", path: "/app" },
    { icon: Settings, label: "Admin", path: "/app/admin" },
  ];

  const userNavItems = [
    { icon: Home, label: "Map", path: "/app" },
    { icon: Wrench, label: "Repair", path: "/app/repair" },
    { icon: Trophy, label: "Levels", path: "/app/levels" },
    { icon: FileText, label: "Report", path: "/app/report" },
    { icon: User, label: "Profile", path: "/app/profile" },
  ];

  const navItems = user.isAdmin ? adminNavItems : userNavItems;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-4 z-50 px-4">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-slate-950/70 px-4 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
              <Shield className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">SOCIOQUEST</p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Secure training</span>
                {user.isAdmin && (
                  <span className="rounded-full bg-pink-500/15 px-2.5 py-0.5 text-pink-300">
                    Admin
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white shadow-sm">
            <Coins className="w-4 h-4 text-pink-400" />
            <span className="font-semibold">{user.points}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-black">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-4 z-40 px-4">
        <div className="mx-auto flex max-w-3xl items-center justify-evenly rounded-3xl border border-white/10 bg-slate-950/70 px-3 py-3 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => navigate(item.path)}
                aria-label={item.label}
                title={item.label}
                className={`grid h-11 w-11 place-items-center rounded-2xl transition-all ${
                  isActive
                    ? 'bg-white/10 text-pink-400 shadow-inner shadow-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
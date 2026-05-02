import { useNavigate } from "react-router";
import { 
  Shield, Lock, Target, Brain, Zap, Users, 
  TrendingUp, Award, AlertTriangle, CheckCircle, 
  Sparkles, ArrowRight, Cpu, Radio, Globe,
  Crosshair, Activity, ShieldAlert
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function GetStartedAlt() {
  const navigate = useNavigate();
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeTab, setActiveTab] = useState("detect");

  // Glitch effect on interval
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const modules = {
    detect: {
      title: "Real-Time Threat Detection",
      description: "Intercept phishing attacks before they breach your defenses",
      features: [
        "Email phishing simulations",
        "SMS scam scenarios",
        "Voice call impersonation",
        "Instant threat alerts"
      ],
      icon: AlertTriangle,
      color: "red"
    },
    analyze: {
      title: "Glitch Marker Analysis",
      description: "Master the art of identifying social engineering tactics",
      features: [
        "Suspicious sender detection",
        "URL analysis tools",
        "Urgency pattern recognition",
        "Credential request flags"
      ],
      icon: Brain,
      color: "purple"
    },
    defend: {
      title: "Department Defense System",
      description: "Build and maintain your organizational fortress",
      features: [
        "2D siege map visualization",
        "Health & safety monitoring",
        "Resilience point allocation",
        "Repair & strengthen modules"
      ],
      icon: Shield,
      color: "pink"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Version Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="border-pink-500/30 text-pink-500 hover:bg-pink-500/10 text-xs"
        >
          View Main Version
        </Button>
      </div>

      {/* Cyber Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(219, 39, 119, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(219, 39, 119, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2">
                  <Radio className="w-4 h-4 text-pink-500 animate-pulse" />
                  <span className="text-pink-500 text-sm font-medium">SYSTEM ONLINE</span>
                </div>
              </div>
              
              <h1 className={`text-6xl md:text-7xl font-black mb-4 transition-all ${
                glitchActive ? 'blur-sm' : ''
              }`}>
                SOCIO<span className="text-pink-500">QUEST</span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-transparent mb-6" />
              
              <p className="text-xl text-gray-300 mb-4">
                AI-Powered Cyber Defense Training
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                Transform your organization into an impenetrable human firewall. 
                Our gamified behavioral simulation platform trains teams to detect, 
                analyze, and neutralize social engineering attacks in real-time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/login")}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg font-bold group"
                >
                  DEPLOY NOW
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-500/10 px-8 py-6 text-lg font-bold"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  START TRAINING
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - 3D-ish Shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-pink-500/30 border-dashed"
              />
              
              {/* Inner Circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/50 flex items-center justify-center backdrop-blur-sm">
                <div className="relative">
                  <Shield className="w-40 h-40 text-pink-500" strokeWidth={1} />
                  <Lock className="w-16 h-16 text-pink-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  
                  {/* Pulse Rings */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border-2 border-pink-500 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 border-2 border-pink-500 rounded-full"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              {[
                { icon: Target, position: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
                { icon: Brain, position: "right-0 top-1/2 -translate-y-1/2", delay: 0.2 },
                { icon: Zap, position: "bottom-0 left-1/2 -translate-x-1/2", delay: 0.4 },
                { icon: Cpu, position: "left-0 top-1/2 -translate-y-1/2", delay: 0.6 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + item.delay }}
                  className={`absolute ${item.position}`}
                >
                  <div className="bg-black border border-pink-500/50 rounded-lg p-3">
                    <item.icon className="w-6 h-6 text-pink-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section className="relative py-8 px-6 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border-y border-pink-500/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Activity, label: "Active Defense", value: "24/7", color: "text-green-500" },
              { icon: Users, label: "Protected Users", value: "10K+", color: "text-blue-500" },
              { icon: ShieldAlert, label: "Threats Blocked", value: "99.9%", color: "text-pink-500" },
              { icon: Award, label: "Success Rate", value: "95%", color: "text-purple-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules - Tabbed Interface */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              CORE TRAINING <span className="text-pink-500">MODULES</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Three pillars of cyber-resilience defense
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(modules).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-bold uppercase text-sm transition-all ${
                  activeTab === key
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  modules[activeTab as keyof typeof modules].color === 'red' ? 'bg-red-500/20' :
                  modules[activeTab as keyof typeof modules].color === 'purple' ? 'bg-purple-500/20' :
                  'bg-pink-500/20'
                }`}>
                  {(() => {
                    const Icon = modules[activeTab as keyof typeof modules].icon;
                    return <Icon className={`w-12 h-12 ${
                      modules[activeTab as keyof typeof modules].color === 'red' ? 'text-red-500' :
                      modules[activeTab as keyof typeof modules].color === 'purple' ? 'text-purple-500' :
                      'text-pink-500'
                    }`} />;
                  })()}
                </div>
                
                <h3 className="text-3xl font-bold mb-4">
                  {modules[activeTab as keyof typeof modules].title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  {modules[activeTab as keyof typeof modules].description}
                </p>

                <ul className="space-y-3">
                  {modules[activeTab as keyof typeof modules].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl border border-pink-500/30 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Crosshair className="w-24 h-24 text-pink-500 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-400 text-sm">
                      Interactive Training Environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gamification Features */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="text-purple-500 text-sm font-medium uppercase tracking-wider">Gamified Learning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LEVEL UP YOUR <span className="text-pink-500">DEFENSE</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Progress through ranks, earn achievements, and compete for top defender status
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Point System",
                description: "Earn points for every correct threat identification and strategic defense decision",
                gradient: "from-pink-500/20 to-red-500/20",
                border: "border-pink-500/30"
              },
              {
                icon: TrendingUp,
                title: "Level Progression",
                description: "Advance through security tiers from Novice to Expert Defender with challenging quizzes",
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30"
              },
              {
                icon: Award,
                title: "Achievements",
                description: "Unlock badges and rewards for completing missions and mastering security concepts",
                gradient: "from-blue-500/20 to-purple-500/20",
                border: "border-blue-500/30"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} border ${item.border} rounded-xl p-8 hover:scale-105 transition-transform`}
              >
                <item.icon className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                ENTERPRISE-GRADE <span className="text-pink-500">SECURITY</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Built for organizations that take cyber-resilience seriously
              </p>

              <div className="space-y-6">
                {[
                  { icon: Users, title: "Role-Based Access Control", desc: "Separate admin and user interfaces with granular permissions" },
                  { icon: Globe, title: "Department Segmentation", desc: "Monitor and strengthen individual teams with targeted training" },
                  { icon: Lock, title: "Privacy-First Design", desc: "Anonymous user IDs protect sensitive personal information" },
                  { icon: Activity, title: "Real-Time Analytics", desc: "Track performance metrics and organizational threat readiness" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-pink-500/20 rounded-lg p-3 h-fit">
                      <feature.icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl border-2 border-pink-500/30 p-8 relative overflow-hidden">
                {/* Simulated Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-32 bg-pink-500/30 rounded" />
                    <div className="h-3 w-16 bg-purple-500/30 rounded" />
                  </div>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                      <div className="h-2 w-3/4 bg-gray-700 rounded mb-2" />
                      <div className="h-2 w-1/2 bg-gray-800 rounded" />
                    </div>
                  ))}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTksIDM5LCAxMTksIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              SECURE YOUR <span className="text-pink-500">FUTURE</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join the cyber-resilience revolution. Train your team to become an unbreakable human firewall.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={() => navigate("/register")}
                className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-7 text-xl font-black"
              >
                BEGIN MISSION
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-10 py-7 text-xl font-black"
              >
                ACCESS SYSTEM
              </Button>
            </div>

            <p className="text-gray-500 text-sm">
              Davao del Norte State College • Institute of Computing
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
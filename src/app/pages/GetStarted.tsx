import { useNavigate } from "react-router";
import { 
  Shield, Lock, Target, Brain, Zap, Users, 
  TrendingUp, Award, AlertTriangle, CheckCircle, 
  Sparkles, ArrowRight, Play, ChevronDown, Crosshair,
  BarChart3, MessageSquare, FileText, Settings, 
  Smartphone, Mail, Phone, UserCheck, Database,
  Layers, Clock, Star, Download, HelpCircle
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";

export default function GetStarted() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState("detect");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const features = [
    {
      icon: Target,
      title: "Siege Map Defense",
      description: "Protect departments with strategic resource allocation",
      detail: "Visualize your organization as a fortress. Monitor department safety levels, track health bars, and allocate resilience points to strengthen defenses.",
      color: "pink"
    },
    {
      icon: AlertTriangle,
      title: "Glitch Marker Detection",
      description: "Identify fraud factors in phishing attempts",
      detail: "Learn to spot the red flags: suspicious senders, urgency tactics, fake links, and more. Earn points for every threat indicator you correctly identify.",
      color: "purple"
    },
    {
      icon: Brain,
      title: "AI-Powered Simulations",
      description: "Real-world social engineering scenarios",
      detail: "Experience authentic phishing emails, SMS scams, and voice calls. Practice detection in a safe, controlled environment with immediate feedback.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Level Progression",
      description: "Advance through security certification tiers",
      detail: "Complete quizzes and challenges to level up. Track your progress from novice to expert in social engineering defense.",
      color: "green"
    }
  ];

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

  const stats = [
    { value: "99%", label: "Threat Detection Rate" },
    { value: "500+", label: "Training Scenarios" },
    { value: "24/7", label: "Active Monitoring" },
    { value: "100%", label: "Gamified Learning" }
  ];

  const heroHighlights = [
    {
      icon: Sparkles,
      title: "Immersive Simulations",
      description: "Email, SMS and voice attack training built to mirror real social engineering threats.",
      color: "bg-pink-500/10 text-pink-400",
    },
    {
      icon: Users,
      title: "Team-Based Defense",
      description: "Department-centered missions encourage collaboration and accountability across every team.",
      color: "bg-purple-500/10 text-purple-400",
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Instant progress metrics and risk analytics help you adapt training fast.",
      color: "bg-blue-500/10 text-blue-400",
    },
  ];

  const faqItems = [
    {
      q: "What types of attacks does SOCIOQUEST simulate?",
      a: "SOCIOQUEST simulates email phishing, SMS scams, voice call impersonation, and multi-channel social engineering attacks. Our AI-powered engine creates realistic scenarios that mirror actual threats your organization might face.",
    },
    {
      q: "How does the department-based system work?",
      a: "Each user is assigned to a specific department and can only repair or strengthen their own department's defenses. This creates focused accountability and allows admins to track which teams are most vulnerable to attacks.",
    },
    {
      q: "Is user data kept private and secure?",
      a: "Yes. SOCIOQUEST uses anonymous user IDs to protect personal information. All data is securely stored and handled with privacy-first design principles.",
    },
    {
      q: "Can I customize the difficulty of simulations?",
      a: "Absolutely. Admins have full control over simulation difficulty, attack types, and deployment schedules. You can scale complexity based on your team's current skill level and training goals.",
    },
    {
      q: "What’s the difference between admin and user access?",
      a: "Admins can create simulations, manage users, view analytics, and monitor departments. Users access training modules, participate in simulations, complete quizzes, repair their department, and track progress.",
    },
    {
      q: "How does the point and leveling system work?",
      a: "Users earn points by identifying threats, completing quizzes, and making strong defense decisions. Points unlock levels and can be spent to repair department defenses.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Simple Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-6 h-6 text-pink-500" />
            <span className="font-bold text-lg">
              SOCIO<span className="text-pink-500">QUEST</span>
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
            >
              Modules
            </button>
            <button
              onClick={() => document.getElementById('included')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
            >
              What's Included
            </button>
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => navigate("/login")}
              className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-6 py-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => navigate("/login")}
            className="md:hidden bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2"
          >
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden pt-20">{/* added pt-20 for navbar spacing */}
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative w-full max-w-4xl space-y-8 text-center z-10">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative">
              <Shield className="w-24 h-24 text-pink-500" strokeWidth={1.5} />
              <Lock className="w-10 h-10 text-pink-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              SOCIO<span className="text-pink-500">QUEST</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              AI-Driven Behavioral Simulation
            </p>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              The ultimate cyber-resilience framework for social engineering defense. 
              Train your team to detect, analyze, and neutralize phishing threats through gamified simulations.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              onClick={() => navigate("/login")}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-base font-medium group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-pink-500/30 text-pink-500 hover:bg-pink-500/10 px-8 py-6 text-base font-medium"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-2xl ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Mail, title: 'Email Phishing', label: 'Realistic inbox threats' },
              { icon: Smartphone, title: 'SMS Scams', label: 'Mobile text simulations' },
              { icon: Phone, title: 'Voice Fraud', label: 'Impersonation call drills' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + 0.05 * index }}
                className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, duration: 2 }}
            className="pt-12"
          >
            <ChevronDown className="w-6 h-6 text-gray-600 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-pink-500 text-sm font-medium">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build a Human Firewall
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive training modules designed to transform your team into cyber-aware defenders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveFeature(index)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  activeFeature === index
                    ? 'border-pink-500 bg-pink-500/5'
                    : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  feature.color === 'pink' ? 'bg-pink-500/20' :
                  feature.color === 'purple' ? 'bg-purple-500/20' :
                  feature.color === 'blue' ? 'bg-blue-500/20' :
                  'bg-green-500/20'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'pink' ? 'text-pink-500' :
                    feature.color === 'purple' ? 'text-purple-500' :
                    feature.color === 'blue' ? 'text-blue-500' :
                    'text-green-500'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Training Modules - Tabbed Interface */}
      <section id="modules" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Training <span className="text-pink-500">Modules</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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

      {/* What's Included Section */}
      <section id="included" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's <span className="text-pink-500">Included</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A focused training platform built for users and teams to defend against social engineering attacks.
            </p>
          </motion.div>

          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <UserCheck className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">User Training Platform</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Interactive 2D siege map dashboard",
                  "Department-specific repair missions",
                  "Level progression with quizzes",
                  "Real-time phishing attack simulations",
                  "Glitch marker identification challenges",
                  "Personal profile with achievements",
                  "Point-based reward system",
                  "Mobile-optimized interface"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Platform Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Mail, title: "Email Simulations", desc: "Realistic phishing emails" },
              { icon: Smartphone, title: "SMS Scenarios", desc: "Text message scams" },
              { icon: Phone, title: "Voice Calls", desc: "Phone impersonation" },
              { icon: BarChart3, title: "Analytics", desc: "Detailed metrics" },
              { icon: Database, title: "Secure Storage", desc: "Data protection" },
              { icon: Layers, title: "Multi-Department", desc: "Team segmentation" },
              { icon: Clock, title: "24/7 Access", desc: "Always available" },
              { icon: FileText, title: "Reports", desc: "Export capabilities" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-pink-500/30 transition-all"
              >
                <item.icon className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4 text-pink-500" />
              <span className="text-pink-500 text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-pink-500">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-sm shadow-black/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-gray-100 hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-pink-500 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-300 ${openFaqIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-y border-pink-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Human Firewall?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the next generation of cyber-aware organizations. Start training your team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/register")}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-base font-medium"
              >
                Create Account
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">
            Davao del Norte State College • Institute of Computing
          </p>
          <p>
            &copy; 2026 SOCIOQUEST. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
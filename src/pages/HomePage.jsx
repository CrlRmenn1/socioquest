import { useState } from 'react'
import {
  Shield,
  Lock,
  Target,
  Brain,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Crosshair,
  BarChart3,
  FileText,
  Settings,
  Smartphone,
  Mail,
  Phone,
  UserCheck,
  Database,
  Layers,
  Clock,
  Download,
  HelpCircle,
} from 'lucide-react'
import { motion } from 'motion/react'
import detectModel from '../assets/detect_upscayl.png'
import analyzeModel from '../assets/analyze_upscayl.png'
import defendModel from '../assets/defend_upscay.png'

function Button({ children, className = '', variant = 'default', ...props }) {
  const baseClass = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50'
  const variantClass =
    variant === 'outline'
      ? 'border bg-transparent text-white hover:bg-white/10'
      : 'bg-pink-500 text-white hover:bg-pink-600'

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

function ModulePreview({ variant }) {
  const sourceMap = {
    detect: detectModel,
    analyze: analyzeModel,
    defend: defendModel,
  }

  const imageSrc = sourceMap[variant]

  if (variant === 'analyze') {
    return (
      <div className="mx-auto w-full max-w-[280px] rotate-[-8deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
        <img src={imageSrc} alt="Glitch Marker Detection screen" className="mx-auto h-auto w-[108%] select-none" draggable="false" />
      </div>
    )
  }

  if (variant === 'defend') {
    return (
      <div className="mx-auto w-full max-w-[280px] rotate-[8deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
        <img src={imageSrc} alt="Department Defense System screen" className="mx-auto h-auto w-[104%] select-none" draggable="false" />
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-[280px] rotate-[-10deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
      <img src={imageSrc} alt="Report simulation screen" className="mx-auto h-auto w-[96%] select-none" draggable="false" />
    </div>
  )
}

function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeModule, setActiveModule] = useState(0)

  const features = [
    {
      icon: Target,
      title: 'Siege Map Defense',
      description: 'Protect departments with strategic resource allocation',
      detail:
        'Visualize your organization as a fortress. Monitor department safety levels, track health bars, and allocate resilience points to strengthen defenses.',
      color: 'pink',
    },
    {
      icon: AlertTriangle,
      title: 'Glitch Marker Detection',
      description: 'Identify fraud factors in phishing attempts',
      detail:
        'Learn to spot the red flags: suspicious senders, urgency tactics, fake links, and more. Earn points for every threat indicator you correctly identify.',
      color: 'purple',
    },
    {
      icon: Brain,
      title: 'AI-Powered Simulations',
      description: 'Real-world social engineering scenarios',
      detail:
        'Experience authentic phishing emails, SMS scams, and voice calls. Practice detection in a safe, controlled environment with immediate feedback.',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Level Progression',
      description: 'Advance through security certification tiers',
      detail:
        'Complete quizzes and challenges to level up. Track your progress from novice to expert in social engineering defense.',
      color: 'green',
    },
  ]

  const modules = [
    {
      key: 'detect',
      badge: 'DETECT',
      title: 'Real-Time Threat Detection',
      description: 'Intercept phishing attacks before they breach your defenses',
      features: ['Email phishing simulations', 'SMS scam scenarios', 'Voice call impersonation', 'Instant threat alerts'],
      icon: AlertTriangle,
      color: 'red',
      model: 'detect',
      reverse: false,
    },
    {
      key: 'analyze',
      badge: 'ANALYZE',
      title: 'Glitch Marker Analysis',
      description: 'Master the art of identifying social engineering tactics',
      features: ['Suspicious sender detection', 'URL analysis tools', 'Urgency pattern recognition', 'Credential request flags'],
      icon: Brain,
      color: 'purple',
      model: 'analyze',
      reverse: false,
    },
    {
      key: 'defend',
      badge: 'DEFEND',
      title: 'Department Defense System',
      description: 'Build and maintain your organizational fortress',
      features: ['2D siege map visualization', 'Health & safety monitoring', 'Resilience point allocation', 'Repair & strengthen modules'],
      icon: Shield,
      color: 'pink',
      model: 'defend',
      reverse: false,
    },
  ]

  const stats = [
    { value: '99%', label: 'Threat Detection Rate' },
    { value: '500+', label: 'Training Scenarios' },
    { value: '24/7', label: 'Active Monitoring' },
    { value: '100%', label: 'Gamified Learning' },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-6 h-6 text-pink-500" />
            <span className="font-bold text-lg">
              SOCIO<span className="text-pink-500">QUEST</span>
            </span>
          </button>

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
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm px-6 py-2"
            >
              Get Started
            </Button>
          </div>

          <Button
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="md:hidden text-sm px-4 py-2"
          >
            Login
          </Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] animate-pulse delay-700" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] animate-pulse delay-500" />
        </div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 w-32 h-32 border border-pink-500/30 rounded-lg"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-32 right-20 w-40 h-40 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/2 right-1/4 w-24 h-24 border border-pink-400/20 rounded-lg"
          />
        </div>

        <div className="relative w-full max-w-4xl space-y-8 text-center z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex justify-center"
          >
            <div className="relative">
              <Shield className="w-24 h-24 text-pink-500" strokeWidth={1.5} />
              <Lock className="w-10 h-10 text-pink-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              SOCIO<span className="text-pink-500">QUEST</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">AI-Driven Behavioral Simulation</p>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              The ultimate cyber-resilience framework for social engineering defense. Train your team to detect, analyze, and neutralize phishing threats through gamified simulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-base font-medium group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

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
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Build a Human Firewall</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive training modules designed to transform your team into cyber-aware defenders</p>
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
                  activeFeature === index ? 'border-pink-500 bg-pink-500/5' : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${
                    feature.color === 'pink'
                      ? 'bg-pink-500/20'
                      : feature.color === 'purple'
                        ? 'bg-purple-500/20'
                        : feature.color === 'blue'
                          ? 'bg-blue-500/20'
                          : 'bg-green-500/20'
                  }`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      feature.color === 'pink'
                        ? 'text-pink-500'
                        : feature.color === 'purple'
                          ? 'text-purple-500'
                          : feature.color === 'blue'
                            ? 'text-blue-500'
                            : 'text-green-500'
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Training <span className="text-pink-500">Modules</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three pillars of cyber-resilience defense</p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-2xl border border-white/10 bg-[#0c1220] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {modules.map((module, index) => {
                const isActive = activeModule === index

                return (
                  <button
                    key={module.key}
                    onClick={() => setActiveModule(index)}
                    className={`rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all md:px-8 ${
                      isActive
                        ? 'bg-pink-500 text-white shadow-[0_12px_30px_rgba(236,72,153,0.35)]'
                        : 'bg-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    {module.badge}
                  </button>
                )
              })}
            </div>
          </div>

          {modules.map((module, index) => {
            if (activeModule !== index) return null

            const Icon = module.icon

            return (
              <motion.section
                key={module.key}
                id={module.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0c1220] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-10"
              >
                <div className={`grid items-center gap-4 lg:grid-cols-2 lg:gap-5 ${module.reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                  <div className={module.reverse ? 'lg:text-right' : ''}>
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${module.color === 'red' ? 'bg-red-500/20' : module.color === 'purple' ? 'bg-purple-500/20' : 'bg-pink-500/20'}`}>
                      <Icon className={`w-12 h-12 ${module.color === 'red' ? 'text-red-500' : module.color === 'purple' ? 'text-purple-500' : 'text-pink-500'}`} />
                    </div>

                    <h3 className="text-3xl font-bold mb-4">{module.title}</h3>
                    <p className="text-gray-400 mb-6 text-lg">{module.description}</p>

                    <ul className={`space-y-3 ${module.reverse ? 'lg:ml-auto' : ''}`}>
                      {module.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: module.reverse ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.08 }}
                          className={`flex items-center gap-3 ${module.reverse ? 'lg:justify-end' : ''}`}
                        >
                          {!module.reverse && <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                          <span className="text-gray-300">{feature}</span>
                          {module.reverse && <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className={module.reverse ? 'lg:justify-self-end' : 'lg:justify-self-center'}>
                    <ModulePreview variant={module.model} />
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>
      </section>

      <section id="included" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
              <Download className="w-4 h-4 text-pink-500" />
              <span className="text-pink-500 text-sm font-medium">COMPLETE PACKAGE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's <span className="text-pink-500">Included</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive cyber-resilience training platform with everything you need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 border border-pink-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <Settings className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold">Admin Control Panel</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Full user management system',
                  'Create and deploy phishing simulations',
                  'Monitor all department health metrics',
                  'Track organization-wide statistics',
                  'Generate detailed performance reports',
                  'Customize simulation difficulty levels',
                  'Manage resilience point economy',
                  'View real-time threat response data',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <UserCheck className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">User Training Platform</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Interactive 2D siege map dashboard',
                  'Department-specific repair missions',
                  'Level progression with quizzes',
                  'Real-time phishing attack simulations',
                  'Glitch marker identification challenges',
                  'Personal profile with achievements',
                  'Point-based reward system',
                  'Mobile-optimized interface',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Mail, title: 'Email Simulations', desc: 'Realistic phishing emails' },
              { icon: Smartphone, title: 'SMS Scenarios', desc: 'Text message scams' },
              { icon: Phone, title: 'Voice Calls', desc: 'Phone impersonation' },
              { icon: BarChart3, title: 'Analytics', desc: 'Detailed metrics' },
              { icon: Database, title: 'Secure Storage', desc: 'Data protection' },
              { icon: Layers, title: 'Multi-Department', desc: 'Team segmentation' },
              { icon: Clock, title: '24/7 Access', desc: 'Always available' },
              { icon: FileText, title: 'Reports', desc: 'Export capabilities' },
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

          <div className="space-y-4">
            {[
              {
                q: 'What types of attacks does SOCIOQUEST simulate?',
                a: 'SOCIOQUEST simulates email phishing, SMS scams, voice call impersonation, and multi-channel social engineering attacks. Our AI-powered engine creates realistic scenarios that mirror actual threats your organization might face.',
              },
              {
                q: 'How does the department-based system work?',
                a: "Each user is assigned to a specific department and can only repair/strengthen their own department's defenses. This creates focused accountability and allows admins to track which teams are most vulnerable to attacks.",
              },
              {
                q: 'Is user data kept private and secure?',
                a: 'Yes. SOCIOQUEST uses anonymous user IDs to protect personal information. All data is securely stored with enterprise-grade encryption, and we follow strict privacy-first design principles.',
              },
              {
                q: 'Can I customize the difficulty of simulations?',
                a: "Absolutely. Admins have full control over simulation difficulty, attack types, and deployment schedules. You can scale complexity based on your team's current skill level and training goals.",
              },
              {
                q: "What's the difference between admin and user access?",
                a: 'Admins can create simulations, manage users, view organization-wide analytics, and monitor all departments. Users access training modules, participate in simulations, complete quizzes, repair their department, and track personal progress.',
              },
              {
                q: 'How does the point and leveling system work?',
                a: 'Users earn points by correctly identifying threats, completing quizzes, and making smart defense decisions. Points unlock new levels and can be spent as resilience tokens to repair department defenses. Incorrect actions result in point penalties.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/30 transition-all"
              >
                <h3 className="font-bold text-lg mb-3 text-pink-500">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 px-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-y border-pink-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Human Firewall?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join the next generation of cyber-aware organizations. Start training your team today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-base font-medium">Create Account</Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium">
                Sign In
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">Davao del Norte State College • Institute of Computing</p>
          <p>&copy; 2026 SOCIOQUEST. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
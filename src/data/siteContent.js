import {
  AlertTriangle,
  BarChart3,
  Brain,
  FileText,
  HeartPulse,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Wrench,
  MessageSquareWarning,
  BadgeCheck,
} from 'lucide-react'

export const heroStats = [
  { value: '99%', label: 'Threat detection rate' },
  { value: '500+', label: 'Training scenarios' },
  { value: '24/7', label: 'Active monitoring' },
  { value: '100%', label: 'Gamified learning' },
]

export const homeFeatureCards = [
  {
    icon: Target,
    title: 'Siege Map Defense',
    description: 'Protect departments with strategic resource allocation and live safety monitoring.',
  },
  {
    icon: AlertTriangle,
    title: 'Glitch Marker Detection',
    description: 'Identify fraud signals in phishing attempts, suspicious links, and urgency tactics.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Simulations',
    description: 'Practice with realistic social engineering scenarios and get instant feedback.',
  },
  {
    icon: TrendingUp,
    title: 'Level Progression',
    description: 'Advance through training tiers and track your security maturity over time.',
  },
]

export const moduleTabs = {
  detect: {
    title: 'Real-Time Threat Detection',
    description: 'Intercept phishing attacks before they breach your defenses.',
    features: ['Email phishing simulations', 'SMS scam scenarios', 'Voice call impersonation', 'Instant threat alerts'],
    icon: AlertTriangle,
  },
  analyze: {
    title: 'Glitch Marker Analysis',
    description: 'Train your eye to catch the tiny details that expose social engineering.',
    features: ['Suspicious sender detection', 'URL analysis tools', 'Urgency pattern recognition', 'Credential request flags'],
    icon: Brain,
  },
  defend: {
    title: 'Department Defense System',
    description: 'Build and maintain the organization’s resilience layer with repair tools.',
    features: ['2D siege map visualization', 'Health monitoring', 'Resilience point allocation', 'Repair modules'],
    icon: Shield,
  },
}

export const departmentData = [
  { id: 1, name: 'IT Department', safety: 86, x: 50, y: 20, tone: 'safe' },
  { id: 2, name: 'Finance', safety: 45, x: 20, y: 52, tone: 'critical' },
  { id: 3, name: 'HR', safety: 71, x: 81, y: 50, tone: 'warning' },
  { id: 4, name: 'Admin', safety: 61, x: 35, y: 76, tone: 'watch' },
  { id: 5, name: 'Operations', safety: 91, x: 66, y: 76, tone: 'safe' },
]

export const featureScreens = {
  repair: {
    badge: 'Repair Bay',
    title: 'Repair & Fortify',
    description: 'Patch weak points, rebalance defenses, and restore the department map after each attack wave.',
    icon: Wrench,
    accent: 'rose',
    metrics: [
      { label: 'Open fixes', value: '12' },
      { label: 'Safe zones', value: '4' },
      { label: 'Shield uptime', value: '98%' },
    ],
    bullets: ['Inspect exposed nodes', 'Deploy patches to weak sectors', 'Re-run threat simulations'],
  },
  levels: {
    badge: 'Training Ladder',
    title: 'Level Progression',
    description: 'Move through structured tiers from novice awareness to advanced incident response.',
    icon: TrendingUp,
    accent: 'violet',
    metrics: [
      { label: 'Current tier', value: 'Level 3' },
      { label: 'XP progress', value: '72%' },
      { label: 'Badges earned', value: '14' },
    ],
    bullets: ['Complete scenario quizzes', 'Unlock harder simulations', 'Track momentum across modules'],
  },
  report: {
    badge: 'Incident Report',
    title: 'Security Reporting',
    description: 'Review flagged events, summarize findings, and export training results for stakeholders.',
    icon: FileText,
    accent: 'slate',
    metrics: [
      { label: 'Incidents', value: '08' },
      { label: 'Resolved', value: '06' },
      { label: 'Exports', value: '03' },
    ],
    bullets: ['Review event timelines', 'Attach evidence notes', 'Share the final summary'],
  },
  profile: {
    badge: 'Account',
    title: 'User Profile',
    description: 'Keep track of your department, role, and current learning status inside the platform.',
    icon: UserRound,
    accent: 'emerald',
    metrics: [
      { label: 'Role', value: 'Analyst' },
      { label: 'Department', value: 'IT' },
      { label: 'Points', value: '1,240' },
    ],
    bullets: ['Update personal details', 'View earned certifications', 'Check notification preferences'],
  },
  admin: {
    badge: 'Admin Console',
    title: 'Fraud Analysis',
    description: 'Scan the organization, monitor attack patterns, and coordinate active defense drills.',
    icon: BarChart3,
    accent: 'red',
    metrics: [
      { label: 'Alerts', value: '21' },
      { label: 'At risk', value: '2' },
      { label: 'Coverage', value: '94%' },
    ],
    bullets: ['Review active alerts', 'Escalate critical departments', 'Audit response readiness'],
  },
}

export const footerChips = [
  { label: 'SOCIOQUEST', icon: Shield },
  { label: 'Training', icon: Sparkles },
  { label: 'Defense', icon: BadgeCheck },
  { label: 'Alerts', icon: MessageSquareWarning },
  { label: 'Reports', icon: FileText },
  { label: 'Points', icon: HeartPulse },
  { label: 'Account', icon: UserRound },
]
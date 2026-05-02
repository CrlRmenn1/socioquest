import { useNavigate } from "react-router";
import { Trophy, Lock, CheckCircle2, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { Progress } from "../components/ui/progress";

const levels = [
  {
    id: 1,
    title: "Novice Defender",
    description: "Basic phishing detection",
    xp: 100,
    maxXp: 100,
    completed: true,
    unlocked: true,
    stars: 3,
  },
  {
    id: 2,
    title: "Social Engineer Scout",
    description: "Identify psychological triggers",
    xp: 75,
    maxXp: 150,
    completed: false,
    unlocked: true,
    stars: 2,
  },
  {
    id: 3,
    title: "Threat Analyst",
    description: "Advanced fraud factor analysis",
    xp: 0,
    maxXp: 200,
    completed: false,
    unlocked: true,
    stars: 0,
  },
  {
    id: 4,
    title: "Cyber Guardian",
    description: "Multi-channel attack detection",
    xp: 0,
    maxXp: 250,
    completed: false,
    unlocked: false,
    stars: 0,
  },
  {
    id: 5,
    title: "Resilience Master",
    description: "Expert-level defense simulation",
    xp: 0,
    maxXp: 300,
    completed: false,
    unlocked: false,
    stars: 0,
  },
];

export default function Levels() {
  const navigate = useNavigate();
  const currentLevel = 2;
  const totalXp = 175;
  const nextLevelXp = 300;

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Level Progression</h1>
        <p className="text-gray-400 text-sm">
          Track your cyber-resilience training journey
        </p>
      </div>

      {/* Overall Progress Card */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-5 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Current Level</p>
            <h2 className="text-3xl font-bold text-pink-500">Level {currentLevel}</h2>
          </div>
          <div className="bg-pink-500/20 p-3 rounded-full">
            <Trophy className="w-6 h-6 text-pink-500" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Total XP</span>
            <span className="text-pink-400 font-medium">{totalXp} / {nextLevelXp}</span>
          </div>
          <Progress value={(totalXp / nextLevelXp) * 100} className="h-2" />
          <p className="text-xs text-gray-500">
            {nextLevelXp - totalXp} XP needed for next level
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-900 rounded-lg p-4 text-center">
          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-2" />
          <p className="text-xl font-bold">1</p>
          <p className="text-xs text-gray-400">Completed</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 text-center">
          <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
          <p className="text-xl font-bold">5</p>
          <p className="text-xs text-gray-400">Total Stars</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 text-center">
          <Trophy className="w-5 h-5 text-pink-500 mx-auto mb-2" />
          <p className="text-xl font-bold">175</p>
          <p className="text-xs text-gray-400">Total XP</p>
        </div>
      </div>

      {/* Level Cards */}
      <div className="space-y-4">
        {levels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gray-900 border ${
              level.completed
                ? "border-green-500/30"
                : level.unlocked
                ? "border-gray-800"
                : "border-gray-800 opacity-60"
            } rounded-lg p-4`}
          >
            <div className="flex items-start gap-4">
              {/* Level Number */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  level.completed
                    ? "bg-green-500/20 text-green-500"
                    : level.unlocked
                    ? "bg-pink-500/20 text-pink-500"
                    : "bg-gray-800 text-gray-600"
                }`}
              >
                {level.unlocked ? level.id : <Lock className="w-5 h-5" />}
              </div>

              {/* Level Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium">{level.title}</h3>
                    <p className="text-xs text-gray-500">{level.description}</p>
                  </div>
                  {level.completed && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  )}
                </div>

                {/* Stars */}
                {level.unlocked && (
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= level.stars
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Progress */}
                {level.unlocked && !level.completed && (
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-pink-400">
                        {level.xp} / {level.maxXp} XP
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-500"
                        style={{ width: `${(level.xp / level.maxXp) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action Button */}
                {level.unlocked && (
                  <Button
                    onClick={() => navigate(`/app/quiz/${level.id}`)}
                    disabled={level.completed}
                    className={`w-full ${
                      level.completed
                        ? "bg-gray-800 text-gray-500"
                        : "bg-pink-500 hover:bg-pink-600 text-white"
                    }`}
                    size="sm"
                  >
                    {level.completed ? "Completed" : "Start Quiz"}
                  </Button>
                )}

                {!level.unlocked && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    <span>Complete previous level to unlock</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

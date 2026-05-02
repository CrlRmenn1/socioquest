import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CheckCircle2, XCircle, ArrowRight, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { Progress } from "../components/ui/progress";

const quizQuestions = [
  {
    id: 1,
    question: "You receive an email asking you to verify your account immediately. What is the first red flag?",
    options: [
      "Sense of urgency",
      "Professional formatting",
      "Company logo included",
      "Proper grammar",
    ],
    correct: 0,
    explanation: "Creating a sense of urgency is a common social engineering tactic to pressure victims into acting without thinking.",
  },
  {
    id: 2,
    question: "Which of these is a common indicator of a phishing SMS?",
    options: [
      "Message from known sender",
      "Suspicious links or URLs",
      "Clear sender identification",
      "No spelling errors",
    ],
    correct: 1,
    explanation: "Phishing messages often contain suspicious shortened URLs or links that lead to fraudulent websites.",
  },
  {
    id: 3,
    question: "A caller claims to be from IT and asks for your password. What should you do?",
    options: [
      "Provide the password",
      "Ask for verification",
      "Hang up immediately",
      "Change password first",
    ],
    correct: 2,
    explanation: "Legitimate IT departments will never ask for your password. This is a vishing (voice phishing) attempt.",
  },
];

export default function Quiz() {
  const navigate = useNavigate();
  const { levelId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correct;
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setScore(score + 100);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const totalQuestions = quizQuestions.length;
    const correctAnswers = answers.filter(a => a).length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const passed = percentage >= 70;

    return (
      <div className="min-h-full bg-gradient-to-b from-gray-950 to-black py-6 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
              passed ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}>
              {passed ? (
                <Trophy className="w-10 h-10 text-green-500" />
              ) : (
                <XCircle className="w-10 h-10 text-red-500" />
              )}
            </div>

            <h2 className="text-2xl font-bold mb-2">
              {passed ? "Quiz Passed!" : "Quiz Failed"}
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              {passed 
                ? "Great job! You've strengthened your cyber-resilience."
                : "Don't worry, review the material and try again."
              }
            </p>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-pink-500">{correctAnswers}/{totalQuestions}</p>
                  <p className="text-xs text-gray-400 mt-1">Correct Answers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-500">{score}</p>
                  <p className="text-xs text-gray-400 mt-1">Points Earned</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                onClick={() => navigate("/app/levels")}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              >
                Back to Levels
              </Button>
              {!passed && (
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="w-full border-gray-700 text-white hover:bg-gray-800"
                >
                  Retry Quiz
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Level {levelId} Quiz</h1>
          <span className="text-sm text-gray-400">
            Question {currentQuestion + 1}/{quizQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6"
      >
        <h2 className="text-lg font-medium mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? "border-pink-500 bg-pink-500/10"
                  : "border-gray-800 bg-gray-800 hover:border-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? "border-pink-500 bg-pink-500"
                      : "border-gray-600"
                  }`}
                >
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-sm">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Explanation */}
      {selectedAnswer !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`border rounded-lg p-4 mb-6 ${
            selectedAnswer === question.correct
              ? "bg-green-500/10 border-green-500/30"
              : "bg-red-500/10 border-red-500/30"
          }`}
        >
          <div className="flex gap-3">
            {selectedAnswer === question.correct ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <h3 className={`font-medium text-sm mb-1 ${
                selectedAnswer === question.correct ? "text-green-500" : "text-red-500"
              }`}>
                {selectedAnswer === question.correct ? "Correct!" : "Incorrect"}
              </h3>
              <p className="text-xs text-gray-300">{question.explanation}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Next Button */}
      <Button
        onClick={handleNext}
        disabled={selectedAnswer === null}
        className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-700 disabled:text-gray-500 text-white py-6"
      >
        {currentQuestion < quizQuestions.length - 1 ? (
          <>
            Next Question
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        ) : (
          "View Results"
        )}
      </Button>
    </div>
  );
}

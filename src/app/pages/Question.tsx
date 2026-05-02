import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, XCircle, Coins, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { toast } from "sonner";

const fraudFactors = [
  {
    id: 1,
    factor: "Sense of Urgency",
    description: "Creates pressure to act immediately without thinking",
    isPresent: true,
  },
  {
    id: 2,
    factor: "Suspicious Sender",
    description: "Email address or phone number doesn't match official sources",
    isPresent: true,
  },
  {
    id: 3,
    factor: "Generic Greeting",
    description: "Uses impersonal greetings like 'Dear User' instead of your name",
    isPresent: false,
  },
  {
    id: 4,
    factor: "Spelling/Grammar Errors",
    description: "Contains obvious typos or grammatical mistakes",
    isPresent: false,
  },
  {
    id: 5,
    factor: "Suspicious Links",
    description: "Contains shortened URLs or links to unfamiliar domains",
    isPresent: true,
  },
  {
    id: 6,
    factor: "Request for Credentials",
    description: "Asks for passwords, PINs, or sensitive information",
    isPresent: false,
  },
  {
    id: 7,
    factor: "Too Good to Be True",
    description: "Promises unrealistic rewards or benefits",
    isPresent: true,
  },
];

export default function Question() {
  const navigate = useNavigate();
  const [selectedFactors, setSelectedFactors] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);

  const toggleFactor = (id: number) => {
    if (showResults) return;
    
    setSelectedFactors(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const correctFactors = fraudFactors.filter(f => f.isPresent).map(f => f.id);
    const correctSelections = selectedFactors.filter(id => 
      correctFactors.includes(id)
    );
    
    const points = correctSelections.length * 50;
    setPointsEarned(points);
    setShowResults(true);
    
    if (points > 0) {
      toast.success(`You earned ${points} points!`);
    }
  };

  const handleContinue = () => {
    navigate("/app");
    toast.success("Department safety increased!");
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Fraud Factor Analysis</h1>
        <p className="text-gray-400 text-sm">
          Identify the indicators that make this message fraudulent
        </p>
      </div>

      {/* Message Preview */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-medium mb-1">Reported Message</h3>
            <p className="text-xs text-gray-500">From: security@dnsc-verify.com</p>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <p className="text-sm text-gray-300 leading-relaxed">
            Dear valued user,
            <br /><br />
            We've detected unusual activity on your account. You must verify your identity immediately by clicking the link below to avoid permanent account suspension within 24 hours.
            <br /><br />
            Click here: bit.ly/verify-now
            <br /><br />
            DNSC Security Team
          </p>
        </div>
      </div>

      {/* Instructions */}
      {!showResults && (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
          <h3 className="text-blue-500 font-medium text-sm mb-1">Instructions</h3>
          <p className="text-blue-400 text-xs">
            Select all fraud factors present in the message above. You earn 50 points for each correct identification.
          </p>
        </div>
      )}

      {/* Fraud Factors */}
      <div className="space-y-3 mb-6">
        {fraudFactors.map((factor, index) => {
          const isSelected = selectedFactors.includes(factor.id);
          const isCorrect = factor.isPresent;
          const showCorrectness = showResults && isSelected;

          return (
            <motion.button
              key={factor.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => toggleFactor(factor.id)}
              disabled={showResults}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                showResults
                  ? isSelected && isCorrect
                    ? "border-green-500 bg-green-500/10"
                    : isSelected && !isCorrect
                    ? "border-red-500 bg-red-500/10"
                    : !isSelected && isCorrect
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-gray-800 bg-gray-900 opacity-50"
                  : isSelected
                  ? "border-pink-500 bg-pink-500/10"
                  : "border-gray-800 bg-gray-900 hover:border-gray-700"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {showResults ? (
                    isSelected && isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : isSelected && !isCorrect ? (
                      <XCircle className="w-5 h-5 text-red-500" />
                    ) : !isSelected && isCorrect ? (
                      <div className="w-5 h-5 border-2 border-yellow-500 rounded-full" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-700 rounded-full" />
                    )
                  ) : (
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        isSelected
                          ? "border-pink-500 bg-pink-500"
                          : "border-gray-600"
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm mb-1">{factor.factor}</h3>
                  <p className="text-xs text-gray-500">{factor.description}</p>
                  
                  {showResults && !isSelected && isCorrect && (
                    <p className="text-xs text-yellow-500 mt-2">
                      ⚠️ This factor was present but not selected
                    </p>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Results */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-5 mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-pink-500/20 p-3 rounded-full">
              <Coins className="w-6 h-6 text-pink-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Analysis Complete</h3>
              <p className="text-2xl font-bold text-pink-500">+{pointsEarned} Points</p>
              <p className="text-xs text-gray-400 mt-1">
                {selectedFactors.filter(id => 
                  fraudFactors.find(f => f.id === id)?.isPresent
                ).length} / {fraudFactors.filter(f => f.isPresent).length} factors identified correctly
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Button */}
      {!showResults ? (
        <Button
          onClick={handleSubmit}
          disabled={selectedFactors.length === 0}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-700 disabled:text-gray-500 text-white py-6"
        >
          Submit Analysis
        </Button>
      ) : (
        <Button
          onClick={handleContinue}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-6"
        >
          Continue to Dashboard
        </Button>
      )}
    </div>
  );
}

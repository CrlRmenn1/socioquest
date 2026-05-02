import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { CheckCircle2, XCircle, Coins, AlertTriangle, ShieldAlert, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { toast } from "sonner";

// Fraud factors database with different scenarios
const fraudFactorsByType: Record<string, Array<{
  id: number;
  factor: string;
  description: string;
  isPresent: boolean;
}>> = {
  email: [
    {
      id: 1,
      factor: "Sense of Urgency",
      description: "Creates pressure to act immediately without thinking",
      isPresent: true,
    },
    {
      id: 2,
      factor: "Suspicious Sender",
      description: "Email address doesn't match official domain",
      isPresent: true,
    },
    {
      id: 3,
      factor: "Generic Greeting",
      description: "Uses impersonal greetings like 'Dear User'",
      isPresent: true,
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
      factor: "Threats of Account Suspension",
      description: "Threatens negative consequences to create fear",
      isPresent: true,
    },
  ],
  sms: [
    {
      id: 1,
      factor: "Too Good to Be True",
      description: "Promises unrealistic rewards or benefits",
      isPresent: true,
    },
    {
      id: 2,
      factor: "Unknown Sender",
      description: "Message from an unverified or suspicious number",
      isPresent: true,
    },
    {
      id: 3,
      factor: "Shortened URLs",
      description: "Uses URL shorteners to hide the real destination",
      isPresent: true,
    },
    {
      id: 4,
      factor: "Sense of Urgency",
      description: "Pressure to act immediately (limited time offer)",
      isPresent: true,
    },
    {
      id: 5,
      factor: "Request for Personal Info",
      description: "Asks for sensitive information via text",
      isPresent: false,
    },
    {
      id: 6,
      factor: "Unsolicited Prize/Lottery",
      description: "Claims you won something you never entered",
      isPresent: true,
    },
    {
      id: 7,
      factor: "Poor Grammar",
      description: "Contains spelling or grammar errors",
      isPresent: false,
    },
  ],
};

export default function FraudAnalysis() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get state passed from Report page
  const { success, simulation } = location.state || { 
    success: true, 
    simulation: { 
      type: "email", 
      title: "Suspicious Message",
      sender: "unknown@sender.com",
      content: "Sample phishing content"
    } 
  };

  const fraudFactors = fraudFactorsByType[simulation.type] || fraudFactorsByType.email;
  
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
    
    // Calculate points: base points per correct factor
    const basePoints = correctSelections.length * 50;
    
    // Bonus points if user successfully reported (didn't click the link)
    const bonusPoints = success ? 100 : 0;
    
    // Penalty if they clicked the phishing link
    const penalty = success ? 0 : -50;
    
    const totalPoints = Math.max(0, basePoints + bonusPoints + penalty);
    setPointsEarned(totalPoints);
    setShowResults(true);
    
    if (totalPoints > 0) {
      toast.success(`You earned ${totalPoints} points!`);
    } else {
      toast.error("No points earned. Study the fraud factors!");
    }
  };

  const handleContinue = () => {
    navigate("/app");
    if (success) {
      toast.success("Threat neutralized! Department safety increased!");
    } else {
      toast.warning("Remember to report suspicious messages!");
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black py-6">
      {/* Header with Success/Failure Indicator */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 ${
          success 
            ? 'bg-green-500/20 border border-green-500/30' 
            : 'bg-red-500/20 border border-red-500/30'
        }`}>
          {success ? (
            <>
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-green-500 text-xs font-medium">Threat Reported</span>
            </>
          ) : (
            <>
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-xs font-medium">Clicked Phishing Link</span>
            </>
          )}
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Glitch Marker Detection</h1>
        <p className="text-gray-400 text-sm">
          {success 
            ? "Great job reporting! Now identify the fraud factors to earn bonus points."
            : "You clicked a phishing link! Learn to identify these fraud factors to protect yourself."
          }
        </p>
      </div>

      {/* Impact Warning (only if they failed) */}
      {!success && !showResults && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-500 font-medium text-sm mb-1">Security Breach!</h3>
              <p className="text-red-400 text-xs">
                By clicking the link, you would have exposed your department to a cyber attack. 
                Analyze the message to understand what went wrong.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Message Preview */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-medium mb-1">{simulation.title}</h3>
            <p className="text-xs text-gray-500">From: {simulation.sender}</p>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <p className="text-sm text-gray-300 leading-relaxed">
            {simulation.content}
            {simulation.link && (
              <span className="text-blue-400 ml-1">{simulation.link}</span>
            )}
          </p>
        </div>
      </div>

      {/* Instructions */}
      {!showResults && (
        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 mb-6">
          <h3 className="text-pink-500 font-medium text-sm mb-1">
            Instructions
          </h3>
          <p className="text-pink-400 text-xs mb-2">
            Select all "glitch markers" (fraud factors) present in the message above. 
          </p>
          <div className="flex items-start gap-2 text-xs text-pink-400/80">
            <Coins className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
            <span>
              Earn 50 points per correct factor {success && "+ 100 bonus for reporting"}
              {!success && " (50 point penalty for clicking link)"}
            </span>
          </div>
        </div>
      )}

      {/* Fraud Factors */}
      <div className="space-y-3 mb-6">
        {fraudFactors.map((factor, index) => {
          const isSelected = selectedFactors.includes(factor.id);
          const isCorrect = factor.isPresent;

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
                  : "border-gray-800 bg-gray-900 hover:border-gray-700 active:scale-[0.98]"
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
                      <div className="w-5 h-5 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-700 rounded-full" />
                    )
                  ) : (
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
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
                    <p className="text-xs text-yellow-500 mt-2 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      This glitch marker was present but not selected
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
          className={`rounded-lg p-5 mb-6 border ${
            pointsEarned > 0
              ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500/30'
              : 'bg-gradient-to-r from-gray-700/20 to-gray-600/20 border-gray-600/30'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${
              pointsEarned > 0 ? 'bg-pink-500/20' : 'bg-gray-700/20'
            }`}>
              <Coins className={`w-6 h-6 ${
                pointsEarned > 0 ? 'text-pink-500' : 'text-gray-500'
              }`} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Analysis Complete</h3>
              <p className={`text-2xl font-bold ${
                pointsEarned > 0 ? 'text-pink-500' : 'text-gray-400'
              }`}>
                {pointsEarned > 0 ? '+' : ''}{pointsEarned} Points
              </p>
              <div className="text-xs text-gray-400 mt-1 space-y-0.5">
                <p>
                  {selectedFactors.filter(id => 
                    fraudFactors.find(f => f.id === id)?.isPresent
                  ).length} / {fraudFactors.filter(f => f.isPresent).length} glitch markers identified
                </p>
                {success && (
                  <p className="text-green-500">+100 bonus for reporting the threat!</p>
                )}
                {!success && (
                  <p className="text-red-400">-50 penalty for clicking phishing link</p>
                )}
              </div>
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

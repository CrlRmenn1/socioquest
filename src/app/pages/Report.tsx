import { useState } from "react";
import { useNavigate } from "react-router";
import { AlertTriangle, Mail, MessageSquare, Phone, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

export default function Report() {
  const navigate = useNavigate();
  const [simulationActive, setSimulationActive] = useState(true);

  const activeSimulations = [
    {
      id: 1,
      type: "email",
      title: "Urgent: Verify Your Account",
      sender: "security@dnsc-verify.com",
      time: "2 minutes ago",
      icon: Mail,
      content: "Dear valued user, We've detected unusual activity on your account. Please verify your identity immediately by clicking the link below to avoid account suspension...",
      link: "bit.ly/verify-now",
    },
    {
      id: 2,
      type: "sms",
      title: "You won a prize! Click to claim",
      sender: "+63 917 XXX XXXX",
      time: "15 minutes ago",
      icon: MessageSquare,
      content: "Congratulations! You've been selected as our lucky winner. Claim your ₱50,000 prize now by visiting: ",
      link: "bit.ly/claim-prize-now",
    },
  ];

  const handlePhishingClick = (simulation: typeof activeSimulations[0]) => {
    // User clicked on phishing link - they failed!
    navigate("/app/fraud-analysis", { 
      state: { 
        success: false, 
        simulation: {
          id: simulation.id,
          type: simulation.type,
          title: simulation.title,
          sender: simulation.sender,
          content: simulation.content,
          link: simulation.link,
        }
      } 
    });
  };

  const handleReport = (simulation: typeof activeSimulations[0]) => {
    // User reported the threat - they succeeded!
    navigate("/app/fraud-analysis", { 
      state: { 
        success: true, 
        simulation: {
          id: simulation.id,
          type: simulation.type,
          title: simulation.title,
          sender: simulation.sender,
          content: simulation.content,
          link: simulation.link,
        }
      } 
    });
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Report Simulation</h1>
        <p className="text-gray-400 text-sm">
          Identify and report suspicious communications
        </p>
      </div>

      {/* Simulation Status */}
      <div className={`rounded-lg p-5 mb-6 ${
        simulationActive 
          ? 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30' 
          : 'bg-gray-900 border border-gray-800'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${
            simulationActive ? 'bg-red-500/20' : 'bg-gray-800'
          }`}>
            {simulationActive ? (
              <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
            ) : (
              <Shield className="w-6 h-6 text-green-500" />
            )}
          </div>
          <div className="flex-1">
            <h3 className={`font-medium mb-1 ${
              simulationActive ? 'text-red-500' : 'text-green-500'
            }`}>
              {simulationActive ? 'Simulation In Progress' : 'All Clear'}
            </h3>
            <p className="text-sm text-gray-400">
              {simulationActive 
                ? `${activeSimulations.length} active threats detected. Review and report suspicious messages.`
                : 'No active simulations at this time. Stay vigilant!'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
        <h3 className="text-blue-500 font-medium text-sm mb-2">How to Report</h3>
        <ol className="text-xs text-blue-400 space-y-1 list-decimal list-inside">
          <li>Review the suspicious message carefully</li>
          <li>Click "Report This Threat" to flag it</li>
          <li>Analyze fraud factors to earn points</li>
          <li>Get immediate feedback on your detection skills</li>
        </ol>
      </div>

      {/* Active Simulations */}
      {simulationActive && (
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Suspicious Messages</h2>
          
          {activeSimulations.map((sim, index) => (
            <motion.div
              key={sim.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  sim.type === 'email' ? 'bg-blue-500/20' :
                  sim.type === 'sms' ? 'bg-green-500/20' :
                  'bg-purple-500/20'
                }`}>
                  <sim.icon className={`w-5 h-5 ${
                    sim.type === 'email' ? 'text-blue-500' :
                    sim.type === 'sms' ? 'text-green-500' :
                    'text-purple-500'
                  }`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium">{sim.title}</h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      {sim.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">From: {sim.sender}</p>
                  <span className="inline-block text-xs px-2 py-1 bg-gray-800 rounded text-gray-400 uppercase">
                    {sim.type}
                  </span>
                </div>
              </div>

              {/* Message Preview with Clickable Link */}
              <div className="bg-gray-800 rounded-lg p-3 mb-4 border border-gray-700">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {sim.content}
                  <button
                    onClick={() => handlePhishingClick(sim)}
                    className="text-blue-400 underline hover:text-blue-300 ml-1 transition-colors"
                  >
                    {sim.link}
                  </button>
                </p>
              </div>

              {/* Report Button */}
              <Button
                onClick={() => handleReport(sim)}
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report This Threat
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      {/* No Simulations */}
      {!simulationActive && (
        <div className="text-center py-12">
          <Shield className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-400 mb-2">
            No Active Simulations
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Check back later or complete other training modules
          </p>
          <Button
            onClick={() => navigate("/app/levels")}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            Go to Levels
          </Button>
        </div>
      )}
    </div>
  );
}
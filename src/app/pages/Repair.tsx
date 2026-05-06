import { useState } from "react";
import { Shield, Wrench, Coins, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";

const allDepartments = [
  { id: 1, name: "IT Department", safety: 85, repairCost: 100 },
  { id: 2, name: "Finance", safety: 45, repairCost: 300 },
  { id: 3, name: "HR", safety: 70, repairCost: 150 },
  { id: 4, name: "Admin", safety: 60, repairCost: 200 },
  { id: 5, name: "Operations", safety: 90, repairCost: 50 },
];

export default function Repair() {
  const { user } = useAuth();
  const [deptSafety, setDeptSafety] = useState(allDepartments);

  if (!user) return null;

  // Filter to show only user's department
  const userDepartments = deptSafety.filter(dept => dept.name === user.department);

  const getSafetyColor = (safety: number) => {
    if (safety >= 80) return "text-green-500";
    if (safety >= 60) return "text-yellow-500";
    if (safety >= 40) return "text-orange-500";
    return "text-red-500";
  };

  const getSafetyBg = (safety: number) => {
    if (safety >= 80) return "bg-green-500";
    if (safety >= 60) return "bg-yellow-500";
    if (safety >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  const handleRepair = (deptId: number, cost: number) => {
    if (user.points < cost) {
      toast.error("Insufficient points!");
      return;
    }

    setDeptSafety(deptSafety.map(dept => {
      if (dept.id === deptId) {
        const newSafety = Math.min(100, dept.safety + 15);
        toast.success(`${dept.name} repaired! Safety: ${newSafety}%`);
        return { ...dept, safety: newSafety };
      }
      return dept;
    }));
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-950 to-black p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Repair Department</h1>
        <p className="text-gray-400 text-sm">
          Use resilience points to strengthen your department's defenses
        </p>
      </div>

      {/* Points Display */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-pink-500/20 p-3 rounded-full">
              <Coins className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Available Points</p>
              <p className="text-2xl font-bold text-pink-500">{user.points}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Earn More</p>
            <p className="text-xs text-pink-400">Complete quizzes →</p>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-blue-500 font-medium text-sm mb-1">How Repair Works</h3>
          <p className="text-blue-400 text-xs leading-relaxed">
            Each repair increases your department safety by +15%. Maintain high safety levels to strengthen your organization's human firewall. You can only repair your assigned department.
          </p>
        </div>
      </div>

      {/* Department Cards */}
      <div className="space-y-3">
        {userDepartments.map((dept, index) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${dept.safety >= 80 ? 'bg-green-500/20' : dept.safety >= 60 ? 'bg-yellow-500/20' : dept.safety >= 40 ? 'bg-orange-500/20' : 'bg-red-500/20'}`}>
                  <Shield className={`w-5 h-5 ${getSafetyColor(dept.safety)}`} />
                </div>
                <div>
                  <h3 className="font-medium">{dept.name}</h3>
                  <p className="text-xs text-gray-500">Your Department</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${getSafetyColor(dept.safety)}`}>
                  {dept.safety}%
                </p>
                <p className="text-xs text-gray-500">Safety</p>
              </div>
            </div>

            {/* Safety Progress Bar */}
            <div className="mb-4">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getSafetyBg(dept.safety)} transition-all duration-500`}
                  style={{ width: `${dept.safety}%` }}
                />
              </div>
            </div>

            {/* Repair Button */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Wrench className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Repair Cost:</span>
                <span className="font-medium text-pink-500">{dept.repairCost}</span>
                <Coins className="w-4 h-4 text-pink-500" />
              </div>
              <Button
                onClick={() => handleRepair(dept.id, dept.repairCost)}
                disabled={user.points < dept.repairCost || dept.safety >= 100}
                className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-700 disabled:text-gray-500 text-white px-6"
              >
                {dept.safety >= 100 ? "Max Level" : "Repair"}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// /src/components/OrderTracking.jsx
import { motion } from "framer-motion";
export default function OrderTracking({ status, userName }) {
  const stages = ["Preparing", "Ready for Pickup"];
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Hi {userName}, here is your order status:</h1>
      <div className="flex space-x-4 mt-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage}
            className={`flex-1 p-2 text-center rounded-lg ${index <= status ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {stage}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

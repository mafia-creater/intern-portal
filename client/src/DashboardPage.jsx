import React, { useState, useEffect, useRef } from 'react'; // Added useState
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import { Gift, Code, ArrowRight, IndianRupee } from 'lucide-react';


// Animated Counter Component
function Counter({ from, to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(from, to, {
        duration: 1.5,
        onUpdate: (value) => {
          if (ref.current) {
            // CHANGED: Using en-IN for Indian number formatting
            ref.current.textContent = value.toLocaleString('en-IN', {
              maximumFractionDigits: 0,
            });
          }
        },
      });
    }
  }, [isInView, from, to]);

  return <span ref={ref} />;
}


function DashboardPage() {
  // Use useState directly
  const [dashboardData, setDashboardData] = useState(null);

  // Simplified useEffect for fetching data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/api/dashboard`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []); // The empty array ensures this runs only once on mount

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Loading state: shows a spinner while dashboardData is null
  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
          <p className="text-lg text-gray-600 mt-4">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, <span className="text-indigo-600">{dashboardData.name}</span>!
          </h1>
          <Link to="/leaderboard" className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
            Leaderboard <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <main className="py-10">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {/* Total Funds Raised Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-500">Total Funds Raised</h3>
              </div>
              <p className="mt-4 text-5xl font-bold text-gray-900">
                ₹<Counter from={0} to={dashboardData.totalDonations} />
              </p>
            </div>
          </motion.div>

          {/* Referral Code Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-500">Your Referral Code</h3>
              </div>
              <p className="mt-4 text-3xl font-mono text-gray-900 bg-gray-100 p-3 rounded-md inline-block">
                {dashboardData.referralCode}
              </p>
            </div>
          </motion.div>

          {/* Rewards Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Gift className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-500">Rewards & Unlockables</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {dashboardData.rewards && dashboardData.rewards.length > 0 ? (
                  dashboardData.rewards.map((reward) => (
                    <li key={reward.name} className={`flex items-center gap-3 p-3 rounded-md transition ${reward.unlocked ? 'bg-green-50 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                      <span className={!reward.unlocked ? 'opacity-50' : ''}>{reward.unlocked ? '✅' : '🔒'}</span>
                      <span className={`font-medium ${!reward.unlocked ? 'line-through' : ''}`}>{reward.name}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">No rewards yet.</li>
                )}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default DashboardPage;

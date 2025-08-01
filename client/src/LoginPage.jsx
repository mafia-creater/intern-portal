import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { Mail, Lock, CheckSquare } from 'lucide-react'; 

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  // Animation variants for Framer Motion
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
      {/* Left Panel: Image Section without Animation */}
      <div className="relative hidden md:block">
        <img 
          className="absolute inset-0 h-full w-full object-cover" 
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" 
          alt="Fundraising event" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="relative flex flex-col justify-end h-full p-12 text-white">
          <h2 className="text-4xl font-bold leading-tight">Join Our Mission</h2>
          <p className="mt-4 text-lg">Your efforts make a world of difference. Welcome to the team.</p>
        </div>
      </div>

      {/* Right Panel: Form Section with Animation */}
      <motion.div 
        className="flex items-center justify-center p-8 md:p-12 bg-gray-50"
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.div 
          className="mx-auto w-full max-w-md"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-bold text-gray-800">Welcome Back!</motion.h1>
          <motion.p variants={itemVariants} className="mt-3 text-gray-600">Please enter your details to access your portal.</motion.p>

          <motion.form onSubmit={handleLogin} className="mt-8 space-y-6">
            {/* Email Input */}
            <motion.div variants={itemVariants} className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="email" placeholder="Email" defaultValue="intern@example.com" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants} className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="password" placeholder="Password" defaultValue="password" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform hover:scale-105">
                Sign In
              </button>
            </motion.div>
          </motion.form>

          <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-gray-600">
            Not a member yet?{' '}
            <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Start your journey here
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
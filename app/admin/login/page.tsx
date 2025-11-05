"use client";

import { useState } from "react";
import { login } from "@/app/actions/auth";
import { Lock, User } from "lucide-react";

const AdminLoginPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-50 mb-2">
            Admin Login
          </h1>
          <p className="text-amber-50/60">
            Sign in to access the admin dashboard
          </p>
        </div>

        <div className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-amber-50 mb-2"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-amber-50/40" />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 placeholder-amber-50/40 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-amber-50 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-amber-50/40" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 placeholder-amber-50/40 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#800020] text-amber-50 py-3 px-4 rounded-lg font-semibold hover:bg-[#600018] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-amber-50/60">
            <p>Default credentials:</p>
            <p className="font-mono">Username: admin | Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

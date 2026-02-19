"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ForgotPasswordPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
    if (success) setSuccess(false);
  };

  const validate = () => {
    if (!email.trim()) {
      setError(getTranslation(language, "auth.emailRequired"));
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(getTranslation(language, "auth.invalidEmail"));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.detail || getTranslation(language, "auth.forgotPasswordError"));
      }
    } catch {
      setError(getTranslation(language, "auth.connectionError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo />
            </Link>
            <Link
              href="/login"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="hidden sm:inline">{getTranslation(language, "auth.alreadyHaveAccount")}</span>
              <span className="font-semibold">{getTranslation(language, "auth.login")}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{getTranslation(language, "auth.backToLogin")}</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {getTranslation(language, "auth.forgotPasswordTitle")}
              </h1>
              <p className="text-gray-600">
                {getTranslation(language, "auth.forgotPasswordDesc")}
              </p>
            </div>

            {success ? (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-sm text-green-600">
                    {getTranslation(language, "auth.forgotPasswordSuccess")}
                  </p>
                </div>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {getTranslation(language, "auth.backToLogin")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {getTranslation(language, "auth.email")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                        error ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                      }`}
                      placeholder="example@mail.com"
                      disabled={isLoading}
                    />
                  </div>
                  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gradient-primary text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-medium hover:shadow-large hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{getTranslation(language, "auth.sendingLink")}</span>
                    </>
                  ) : (
                    <>
                      <span>{getTranslation(language, "auth.sendResetLink")}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {!success && (
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  {getTranslation(language, "auth.alreadyHaveAccount")}{" "}
                  <Link href="/login" className="text-primary font-semibold hover:underline">
                    {getTranslation(language, "auth.signIn")}
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

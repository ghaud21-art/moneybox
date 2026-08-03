"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/client";
import { useAuth } from "@/lib/auth/AuthProvider";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [loading, user, router]);

  async function handleGoogleLogin() {
    setError(null);
    setSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch {
      setError("로그인에 실패했어요. 다시 시도해주세요.");
    } finally {
      setSigningIn(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FFFBF7] px-6 text-center">
      <div>
        <h1 className="text-2xl font-bold text-[#3A3532]">머니박스</h1>
        <p className="mt-2 text-sm text-[#9B948E]">나만의 가계부, 어디서든 로그인하고 바로 확인하세요.</p>
      </div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={signingIn}
        className="rounded-2xl bg-[#FF6F5E] px-6 py-3 font-bold text-white shadow-md disabled:opacity-60"
      >
        {signingIn ? "로그인 중..." : "Google로 로그인"}
      </button>
      {error && <p className="text-sm text-[#FF6F5E]">{error}</p>}
    </div>
  );
}

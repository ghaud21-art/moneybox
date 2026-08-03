"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useAuth } from "@/lib/auth/AuthProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-[#9B948E]">
        불러오는 중...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFBF7] md:flex-row">
      <nav className="flex items-center justify-between gap-4 bg-[#24213B] px-5 py-4 text-white md:w-56 md:flex-col md:items-stretch md:justify-start md:py-6">
        <span className="text-lg font-bold">머니박스</span>
        <div className="flex items-center gap-3 text-sm md:mt-8 md:flex-col md:items-stretch md:gap-2">
          <span className="truncate text-[#C7C2E0]">{user.displayName}</span>
          <button
            type="button"
            onClick={() => signOut(auth)}
            className="rounded-lg bg-white/10 px-3 py-2 text-left text-sm hover:bg-white/20"
          >
            로그아웃
          </button>
        </div>
      </nav>
      <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
    </div>
  );
}

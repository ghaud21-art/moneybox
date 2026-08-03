"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/auth/AuthProvider";

interface Category {
  id: string;
  name: string;
  type: string;
  icon: string;
  color: string;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "users", user.uid, "categories"), orderBy("order"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setCategories(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Category));
    });
    return unsubscribe;
  }, [user]);

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-[#3A3532]">홈</h1>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="mb-3 text-sm text-[#9B948E]">
          Phase 1a 확인용: 로그인 + Firestore 카테고리 시딩이 정상 동작하는지 보여주는 임시 화면입니다.
          실제 대시보드(캘린더/요약/목표 전광판)는 Phase 2에서 만들어집니다.
        </p>
        {categories === null ? (
          <p className="text-sm text-[#9B948E]">카테고리 불러오는 중...</p>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {categories.map((c) => (
              <div key={c.id} className="flex items-center gap-2 rounded-xl border border-[#F0E9E2] p-2 text-xs">
                <span className="h-3 w-3 rounded-full" style={{ background: c.color }} />
                {c.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { collection, doc, getDoc, getDocs, limit, query, setDoc, writeBatch } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { APP_NAME_DEFAULT, DEFAULT_CATEGORIES, THEME_COLOR_DEFAULT } from "@/lib/constants";

// 첫 로그인 시 1회만 실행: 기본 카테고리 23개 + 공개 설정 문서를 만들어둠.
// 이미 되어있으면 아무 것도 하지 않아서 매 로그인마다 불러도 안전함.
export async function ensureUserInitialized(uid: string) {
  const categoriesRef = collection(db, "users", uid, "categories");
  const existing = await getDocs(query(categoriesRef, limit(1)));

  if (existing.empty) {
    const batch = writeBatch(db);
    DEFAULT_CATEGORIES.forEach((cat, idx) => {
      const catDoc = doc(categoriesRef);
      batch.set(catDoc, {
        name: cat.name,
        type: cat.type,
        icon: cat.icon,
        color: cat.color,
        order: idx + 1,
        isCustom: false,
      });
    });
    await batch.commit();
  }

  const publicSettingsRef = doc(db, "users", uid, "settings", "public");
  const publicSettingsSnap = await getDoc(publicSettingsRef);
  if (!publicSettingsSnap.exists()) {
    await setDoc(publicSettingsRef, {
      appName: APP_NAME_DEFAULT,
      themeColor: THEME_COLOR_DEFAULT,
    });
  }
}

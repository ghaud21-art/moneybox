// 기존 Apps Script 앱의 01_Constants.gs를 그대로 포팅

export const TXN_TYPE = {
  INCOME: "수입",
  EXPENSE: "지출",
} as const;

export const GOAL_TYPE = {
  GENERAL: "일반",
  SAVINGS: "저축",
  INVESTMENT: "투자",
} as const;

export const BUDGET_TYPE = {
  CATEGORY: "CATEGORY",
  DAILY_LIMIT: "DAILY_LIMIT",
} as const;

export const INVLOG_TYPE = {
  DEPOSIT: "DEPOSIT",
  VALUATION: "VALUATION",
} as const;

export const APP_NAME_DEFAULT = "머니박스";
export const THEME_COLOR_DEFAULT = "#FF6F5E";

export const GEMINI_DEFAULT_MODEL = "gemini-3.5-flash-lite";
export const GEMINI_FALLBACK_MODEL = "gemini-3.1-flash-lite";

export interface DefaultCategory {
  name: string;
  type: string;
  icon: string;
  color: string;
}

export const DEFAULT_CATEGORIES: DefaultCategory[] = [
  { name: "식비", type: "지출", icon: "utensils", color: "#FF6F5E" },
  { name: "교통비", type: "지출", icon: "bus", color: "#FFB74D" },
  { name: "여가/취미", type: "지출", icon: "music-note", color: "#F48FB1" },
  { name: "생활용품", type: "지출", icon: "shopping-cart", color: "#9CCC65" },
  { name: "쇼핑", type: "지출", icon: "shopping-bag", color: "#FFD54F" },
  { name: "미용", type: "지출", icon: "sparkle", color: "#F06292" },
  { name: "의료/건강", type: "지출", icon: "cross", color: "#4DB6AC" },
  { name: "교육", type: "지출", icon: "book", color: "#7986CB" },
  { name: "통신비", type: "지출", icon: "phone", color: "#4FC3F7" },
  { name: "주거/공과금", type: "지출", icon: "home", color: "#A1887F" },
  { name: "경조사", type: "지출", icon: "gift", color: "#EC407A" },
  { name: "저축", type: "지출", icon: "piggy-bank", color: "#66BB6A" },
  { name: "카드대금", type: "지출", icon: "credit-card", color: "#8D6E63" },
  { name: "보험", type: "지출", icon: "shield", color: "#5C9EAD" },
  { name: "세금", type: "지출", icon: "receipt", color: "#78909C" },
  { name: "기타", type: "지출", icon: "dot-circle", color: "#BDBDBD" },
  { name: "잔액조정", type: "지출", icon: "adjust", color: "#90A4AE" },
  { name: "급여", type: "수입", icon: "wallet", color: "#66BB6A" },
  { name: "용돈", type: "수입", icon: "hand-coin", color: "#FFB300" },
  { name: "부수입", type: "수입", icon: "trending-up", color: "#EF5350" },
  { name: "이자/배당", type: "수입", icon: "bank", color: "#42A5F5" },
  { name: "환급", type: "수입", icon: "refresh", color: "#26A69A" },
  { name: "기타수입", type: "수입", icon: "dot-circle", color: "#BDBDBD" },
];

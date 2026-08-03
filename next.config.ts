import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 홈 디렉토리(C:\Users\zsq12)에 남아있는 다른 package-lock.json 때문에
  // Next.js가 워크스페이스 루트를 잘못 추론하는 것을 방지
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;

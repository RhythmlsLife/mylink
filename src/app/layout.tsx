import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YOUNGMIN — Signals & Grooves | 김영민 (Youngmin Kim)",
  description:
    "From Circuits to Curiosity. 한양대학교 융합전자공학부 김영민(Youngmin Kim)의 반도체 공정기술, 임베디드 프로젝트, 그리고 음악·취향을 담은 개인 웹사이트 및 마이링크 허브입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060b16] text-slate-100">
        {children}
      </body>
    </html>
  );
}

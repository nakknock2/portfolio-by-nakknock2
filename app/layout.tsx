import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김지수 | 금융 마케터 포트폴리오",
  description:
    "데이터 기반 금융 마케팅 전문가 김지수의 포트폴리오. 자산관리, 투자상품, 디지털 금융 마케팅 전략을 담았습니다.",
  keywords: ["금융 마케터", "포트폴리오", "투자", "자산관리", "디지털마케팅"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "AI Company OS",
  description: "统一研发与经营管理平台"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "ChocoOnLabo",
  description: "子どもの成長と学びをテクノロジーで支えるアプリ群",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white flex flex-col">
        {/* 上の白いバー：ロゴ＋サイト名のみ */}
        <div className="w-full bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="ChocoOnLabo" className="h-9 w-auto" />
              <span className="text-lg font-semibold text-slate-900">
                ChocoOnLabo
              </span>
            </a>
          </div>
        </div>

        {/* ページ本体 */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* フッターはここで1回だけ */}
        <footer className="mt-auto w-full">
          <div className="w-full h-[2px] bg-black"></div>
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm tracking-wide text-slate-900">
            <nav className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
              <a href="/legal/tokusho" className="hover:underline">
                特定商取引法
              </a>
              <a href="/legal/privacy" className="hover:underline">
                プライバシー
              </a>
              <a href="/legal/terms" className="hover:underline">
                利用規約
              </a>
              <a href="/legal/operator" className="hover:underline">
                運営者情報
              </a>
            </nav>
            <p className="text-xs md:text-sm">© 2025 CHOCOONLABO</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

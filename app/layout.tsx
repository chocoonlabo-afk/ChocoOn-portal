// portal/app/layout.tsx
import './globals.css'
import React from 'react'

export const metadata = {
  title: 'ChocoOnLabo',
  description: '音楽・学習系のアプリを提供するChocoOnLaboの公式サイトです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        {/* Header */}
        <header className="w-full border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
            <div className="font-bold tracking-tight">ChocoOnLabo</div>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">
                ホーム
              </a>
              <a href="/legal/tokusho" className="hover:underline">
                特定商取引法に基づく表記
              </a>
              <a href="/legal/privacy" className="hover:underline">
                プライバシーポリシー
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full border-t bg-slate-50 mt-10">
          <div className="mx-auto max-w-4xl px-4 py-4 text-xs text-slate-500 flex flex-wrap gap-4 justify-between">
            <div>© {new Date().getFullYear()} ChocoOnLabo</div>
            <div className="flex gap-4">
              <a href="/legal/tokusho" className="hover:underline">
                特定商取引法に基づく表記
              </a>
              <a href="/legal/privacy" className="hover:underline">
                プライバシーポリシー
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

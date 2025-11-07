// portal/app/page.tsx
export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          ChocoOnLabo（チョコオンラボ）
        </h1>
        <p className="text-slate-600">
          音楽・学習の練習を記録・管理する小さなWebサービスを公開していく予定です。
          現在は第1弾として「pocoapoco（練習学習管理アプリ）」を提供します。
        </p>
        <p className="text-sm text-slate-500">
          ※このサイトは動作確認中のテスト環境です。実際のご利用・課金はStripeを通じて行われます。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">提供中のサービス</h2>

        <div className="rounded-lg border p-4 space-y-2">
          <h3 className="text-lg font-semibold">pocoapoco</h3>
          <p className="text-slate-600 text-sm">
            子どもや生徒の「今日何分やったか」「どんな練習をしたか」を記録しておけるアプリです。
            保護者・講師が進捗を把握しやすくなります。
          </p>
          <div className="flex gap-3">
            {/* 決済ページへの動線 */}
            <a
              href="/buy/pocoapoco"
              className="inline-flex items-center justify-center rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
            >
              購入ページへ
            </a>
            {/* 実アプリのURLが別サブドメインの場合はここに書く */}
            <a
              href="https://pocoapoco.choco-on-labo.com"
              className="text-sm text-purple-700 hover:underline"
            >
              アプリを開く
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">運営者情報</h2>
        <p className="text-sm text-slate-600">
          運営者名：ChocoOnLabo
          <br />
          連絡先メール：choco-on-labo@gmail.com
          <br />
          決済事業者：Stripe, Inc.
        </p>
        <p className="text-sm text-slate-500">
          詳細は
          <a href="/legal/tokusho" className="text-purple-700 underline ml-1">
            特定商取引法に基づく表記
          </a>
          をご確認ください。
        </p>
      </section>
    </div>
  )
}

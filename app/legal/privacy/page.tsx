// portal/app/legal/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">プライバシーポリシー</h1>
      <p className="text-sm text-slate-600">
        本ページはテスト公開中のため、内容は今後更新される場合があります。
      </p>
      <p className="text-sm text-slate-600">
        当サイトでは、サービス提供・決済処理（Stripeの利用）・お問い合わせ対応のために必要な範囲でのみ個人情報を利用します。
        詳細な取扱いについてはお問い合わせください。
      </p>
      <p className="text-sm text-slate-500">
        お問い合わせ先：choco-on-labo@gmail.com
      </p>
    </main>
  )
}

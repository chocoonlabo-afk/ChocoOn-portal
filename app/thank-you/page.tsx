export default function ThankYouPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">お支払いありがとうございました</h1>
      <p className="text-sm text-slate-600">
        決済が完了しました。アプリの利用を開始してください。
      </p>
      <a
        href="https://pocoapoco.choco-on-labo.com"
        className="text-purple-700 underline"
      >
        pocoapoco を開く
      </a>
    </div>
  )
}

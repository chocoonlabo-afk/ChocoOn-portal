'use client'

import { useState } from 'react'

export default function BuyPocoapocoPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
      })

      if (!res.ok) {
        throw new Error('APIリクエストに失敗しました')
      }

      const data = await res.json()

      if (data.url) {
        // StripeのCheckoutに遷移
        window.location.href = data.url
      } else {
        throw new Error('決済URLが返ってきませんでした')
      }
    } catch (err: any) {
      console.error(err)
      setError('決済ページの作成に失敗しました。あとでもう一度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">pocoapoco を購入</h1>
      <p className="text-sm text-slate-600">
        Stripeの安全な決済画面に移動してお支払いいただきます。
      </p>

      <div className="rounded border p-4 space-y-2">
        <h2 className="text-lg font-semibold">内容</h2>
        <p className="text-sm text-slate-600">
          練習・学習を記録できるWebアプリ「pocoapoco」の利用料金です。
        </p>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="inline-flex items-center rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? '決済ページを作成中...' : 'Stripeで支払う'}
      </button>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

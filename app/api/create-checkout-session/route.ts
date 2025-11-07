// portal/app/api/create-checkout-session/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const priceId = process.env.STRIPE_PRICE_ID

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY が設定されていません')
}
if (!priceId) {
  throw new Error('STRIPE_PRICE_ID が設定されていません')
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-02-24.acacia',
})

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get('origin') || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription', // 月額ならこれ。買い切りなら 'payment'
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/thank-you`,
      cancel_url: `${origin}/buy/pocoapoco`,
      // customer_creation: 'always', // 必要に応じて
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Stripe session error:', error)
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    )
  }
}

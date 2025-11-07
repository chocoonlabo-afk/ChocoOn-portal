// app/api/create-checkout-session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY!;
const priceId = process.env.STRIPE_PRICE_ID!;
const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

// apiVersion は書かずにデフォルトを使う
const stripe = new Stripe(stripeSecretKey);

export async function POST(_req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription', // ここを 'payment' にしたいなら後で変えられます
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/thank-you`,
      cancel_url: `${baseUrl}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Error creating checkout session', err);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

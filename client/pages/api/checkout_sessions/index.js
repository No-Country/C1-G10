import Stripe from 'stripe';
const stripe = new Stripe (process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        // line_items: [
        //   {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: '{{PRICE_ID}}',
        //     quantity: 1,
        //   },
        // ],
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: req?.body?.items ?? [],
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        // cancel_url: `${req.headers.origin}/?canceled=true`,
        cancel_url: `${req.headers.origin}/cart`,
      });
      // res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// egypto -> price_1K45FDJlnsKsqSU6yiLD5Ita
// sicilia -> price_1K45CvJlnsKsqSU61E48OuzT
// milan -> price_1K45AaJlnsKsqSU603WBGtUc
// spartan -> price_1K457pJlnsKsqSU6ejNbC3TG
// aspen -> price_1K455WJlnsKsqSU6PHWmxip9
// villa -> price_1K452KJlnsKsqSU6hUIfa2OA
// bs as -> price_1K44vXJlnsKsqSU6o0Y92C6p
// cancun -> price_1K44rQJlnsKsqSU6KKscfOuQ
// samira -> price_1K44fnJlnsKsqSU6t85tz7ph
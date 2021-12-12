require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.createCheckoutSession = async (req, res) => {
  const { package } = req.body;
  const { quantity } = req.body;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: package.packageName,
            images: package.images,
          },
          unit_amount: package.totalCost * 100,
        },
        quantity,
      },
    ],
    mode: "payment",
    /* success_url: `http://localhost:3000/success?success=true`,
    cancel_url: `http://localhost:3000/tours?canceled=true`, */
    success_url: "https://toursg10.vercel.app/success?success=true",
    cancel_url: "https://toursg10.vercel.app/tours?canceled=true",
  });

  res.json(session.id);
};

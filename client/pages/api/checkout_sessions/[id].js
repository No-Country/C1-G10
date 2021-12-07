import Stripe from 'stripe';
const stripe = new Stripe (process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
    const id = req.query.id;
    
    try{
        if(!id.startsWith('cs_')){
            throw Error('Incorrect CheckoutSession ID');
        }
        const chechout_session = await stripe.chechout.sessions.retrieve(id);
        
        res.status(200).json(chechout_session)
    } catch(err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}
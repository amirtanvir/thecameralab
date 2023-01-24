const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

export default async (req, res) => {
    const { items, email } = req.body;

    const transformedItems = items.map(item => ({
        price_data: {
            currency: 'gbp',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
            },
        },
        quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
        }
    });

    res.status(200).json({ id: session.id })
};
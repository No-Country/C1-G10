module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "images.unsplash.com", "res.cloudinary.com"],
  },
  mode: "universal",
  env: {
    STRIPE_KEY: process.env.STRIPE_KEY,
  },
};

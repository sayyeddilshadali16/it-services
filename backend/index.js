// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const stripe = require("stripe")(
  "sk_test_51Ll9wSSHydEOdqAhdPDQwL0vptxDhYfHBgyhtRQxeN4xL0IB3KbfuqfXUxLduCpFgCASFqtimD1ypHpxDoUn1ek900EmKBAhim"
);

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://127.0.0.1:27017/itservices", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Database started");
});

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
          images: [product.image],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",

      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

app.listen(7000, () => {
  console.log("Server started on port 7000");
});

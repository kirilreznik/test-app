'use client';
import { Elements } from "@stripe/react-stripe-js";
import ExpressPaymentElementTest from "@/components/ExpressPaymentElementTest";
import {loadStripe} from "@stripe/stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = loadStripe(stripeKey);

export const  ExpressPaymentWrapper = () => {
    const amount = 50000
    return (
        <Elements stripe={stripePromise} options={{
            mode: "payment" as const,
            amount: amount,
            currency: "usd",
        }}>
            <ExpressPaymentElementTest />
        </Elements>
    );
};

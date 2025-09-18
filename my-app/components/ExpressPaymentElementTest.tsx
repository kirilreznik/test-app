import { ExpressCheckoutElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { LayoutOption, StripeExpressCheckoutElementConfirmEvent, StripeExpressCheckoutElementOptions } from "@stripe/stripe-js";

const ExpressPaymentElement = (layout?: LayoutOption) => {
    const stripe = useStripe();
    const elements = useElements();

    const expressCheckoutOptions: StripeExpressCheckoutElementOptions = {
        emailRequired: true,
        phoneNumberRequired: true,
        layout:{ maxColumns:0, maxRows:0, overflow:"never"},
        buttonHeight: 55,
    };

    const handleConfirmAlt = async (e: StripeExpressCheckoutElementConfirmEvent) => {
       if(!elements || !stripe){
           return
       }
        elements.submit().then(async (res) => {
            if(!res.error){
                const {error, confirmationToken} = await stripe.createConfirmationToken({
                    elements,
                    params: {
                        payment_method_data: {
                            billing_details: {
                                name: 'Jenny Rosen',
                            },
                        },
                        return_url: 'https://example.com/order/123/complete',
                    }
                });
                console.log("confirmationToken", confirmationToken, error);
            }
        })
    };

    return (
        <ExpressCheckoutElement onConfirm={handleConfirmAlt} options={expressCheckoutOptions} />
    );
};

export default ExpressPaymentElement;

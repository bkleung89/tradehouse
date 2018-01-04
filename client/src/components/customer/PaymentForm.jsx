import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_CONSTS from '../../../../config.js';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = (data) => {
  alert('Payment Successful');
};

const errorPayment = (data) => {
  alert('Payment Error');
};

const onToken = (amount, description, id) => token =>
  axios.post(
    `/api/customers/${id}/chargeCard`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount),
    }
  )
    .then(successPayment)
    .catch(errorPayment);

const PaymentForm = ({ name, description, amount, id }) =>
  (<StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, id)}
    currency={CURRENCY}
    stripeKey={STRIPE_CONSTS.STRIPE_PUBLISHABLE}
  />);

export default PaymentForm;
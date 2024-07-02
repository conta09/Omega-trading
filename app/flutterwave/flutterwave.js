import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const config = {
  public_key: 'FLWPUBK_TEST-eaea51dd8f849ae7eaaef53fa8def9d9-X',
  tx_ref: Date.now(),
  amount: 300,
  currency: 'NGN',
  payment_options: 'card,mobilemoney,ussd',
  customer: {
    email: 'user@gmail.com',
    phone_number: '070********',
    name: 'john doe',
  },
  customizations: {
    title: 'Omega Trading',
    description: 'Deposit and withdraw',
    logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  },
};

const fwConfig = {
  ...config,
  text: 'Pay with Flutterwave!',
  callback: (response) => {
     console.log(response);
    closePaymentModal() // this will close the modal programmatically
  },
  onClose: () => {},
};






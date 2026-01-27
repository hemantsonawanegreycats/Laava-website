import React from 'react';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div
        className="max-w-md w-full rounded-2xl shadow-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, #040A12 0%, #122B44 50%, #197dff 100%)',
        }}
      >

        <div className="flex justify-center mb-6">
          <img
            src="../../assets/images/Laava-logo.png"
            alt="Laava"
            className="h-25"
          />
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-30 h-30 text-orange-100" color="#8AD449" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">
          Payment Successful!
        </h1>

        <p className="text-white mb-8">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>

      </div>
    </div>
  );
};

export default PaymentSuccess;

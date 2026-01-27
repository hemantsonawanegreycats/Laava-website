import React from 'react';
import { XCircle, RefreshCcw, HelpCircle } from 'lucide-react';

const PaymentFailed = () => {
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
          <div className="bg-red-100 p-4 rounded-full">
            <XCircle className="w-30 h-30 text-red-500" color="#ff0054" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">
          Payment Failed
        </h1>

        <p className="text-white mb-6">
          Oops! Something went wrong while processing your payment. Please try again or use a different method.
        </p>

        <div className="bg-red-50 text-white text-sm p-4 rounded-xl mb-2 border border-red-100 text-left">
          <p className="font-medium">Possible reasons:</p>
          <ul className="list-disc list-inside mt-1 opacity-80">
            <li>Insufficient funds in the account</li>
            <li>Incorrect card details provided</li>
            <li>Bank server timed out</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PaymentFailed;

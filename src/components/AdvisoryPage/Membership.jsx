import React from 'react';
import { Check, X } from 'lucide-react';

const plans = ['Lite', 'Plus', 'Alpha', 'Super'];

const features = [
  { name: 'Premium screeners', access: [true, true, false, true] },
  { name: 'Equity trades', access: [true, true, true, true] },
  { name: 'Futures trades', access: [false, true, false, true] },
  { name: 'Options trades', access: [false, false, true, true] },
];

const colors = ['bg-yellow-400', 'bg-indigo-500', 'bg-pink-500', 'bg-green-600'];

const Membership = () => {
  return (
    <section className="text-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Available memberships</h2>

        {/* Table */}
        <div className="overflow-x-auto text-white">
          <table className="w-full border border-gray-600 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-black">
                <th className="text-left px-4 py-3 font-medium text-lg">Benefits</th>
                {plans.map((plan, i) => (
                  <th key={plan} className="px-4 py-3 text-sm font-semibold">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold ${colors[i]}`}
                    >
                      {plan}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className="border-t border-b border-gray-700 bg-black hover:bg-[#222] transition"
                >
                  <td className="text-left px-4 py-4 text-sm font-medium flex items-center gap-2">
                    ✨ {feature.name}
                  </td>
                  {feature.access.map((isIncluded, j) => (
                    <td key={j} className="text-center">
                      {isIncluded ? (
                        <Check className="text-green-500 inline-block" size={20} />
                      ) : (
                        <X className="text-red-500 inline-block" size={20} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing section */}
        <div className="mt-10 bg-black text-white rounded-xl p-6 border border-yellow-500 max-w-md mx-auto">
          <p className="text-xl font-semibold mb-2">Price starts at</p>
          <p className="text-4xl font-bold text-yellow-400">₹233</p>
          <p className="text-lg font-medium text-white">per month*</p>
          <p className="text-xs text-gray-400 mt-2">
            *Price may vary across different Pro plans durations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;

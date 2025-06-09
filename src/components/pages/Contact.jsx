import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-10 md:px-20">
      <h2 className="text-center text-3xl font-bold text-black mb-2">Contact Us</h2>
      <p className="text-center text-gray-700 mb-10">
        Your questions, Our expertise – Let's talk
      </p>

      <div className="max-w-xl mx-auto border border-primary p-8 rounded-xl shadow-md bg-white">
        <h3 className="text-2xl font-bold text-black text-center mb-6">Contact Us</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <input
            type="tel"
            placeholder="+91 Phone number"
            className="w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mb-12 pt-10">
        <h3 className="text-2xl font-semibold text-black mb-6">Global Offices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* UAE Office */}
          <div className="border border-primary p-6 rounded-lg shadow-sm bg-white">
            <h4 className="text-lg font-semibold text-black mb-2">UAE</h4>
            <p className="text-gray-700">
              UAE: Laava, Dubai, UAE
            </p>
          </div>

          {/* India Office */}
          <div className="border border-primary p-6 rounded-lg shadow-sm bg-white">
            <h4 className="text-lg font-semibold text-black mb-2">India</h4>
            <p className="text-gray-700">
              India: Laava, Andheri West, Mumbai - 400053
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;

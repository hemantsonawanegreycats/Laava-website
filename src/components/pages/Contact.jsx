import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen px-4 py-10 md:px-20">
      <h2 className="text-center text-3xl font-bold text-white mb-2">Contact Us</h2>
      <p className="text-center text-white mb-10">
        Have questions? Want to know more about how we can help you invest and trade smarter?
        We’d love to hear from you. 
      </p>

      <div className="mb-12 pt-10">
        {/* <h3 className="text-2xl font-semibold text-white mb-6">Global Offices</h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <a href="mailto:care@laavafin.com">
          <div className="abyssBlue border border-primary p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-white mb-2"><MdEmail /> Email</h4>
            <p className="text-white">
              care@laavafin.com 
            </p>
          </div>
          </a>

          {/* Address */}
          <a href="#">
          <div className="abyssBlue border border-primary p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-white"><FaLocationDot /> Address</h4>
            <p className="text-white">
              India: Laava, Andheri West, Mumbai - 400053.
            </p>
          </div>
          </a>
        </div>
      </div>

      <div className="abyssBlue max-w-xl mx-auto border border-primary p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Contact Us</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="text-white w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-white w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <input
            type="tel"
            placeholder="+91 Phone number"
            className="text-white w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="text-white w-full px-4 py-2 border border-primary rounded focus:outline-none"
          />
          <button
            type="submit"
            className="text-white abyssBlue w-full text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;

// import { Mail } from "lucide-react";

// export default function ContactUs() {
//   return (
//     <section className="py-24 bg-black text-gray-200">
//       <div className="max-w-3xl mx-auto text-center px-6">

//         <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">
//           Contact Us
//         </h2>

//         <p className="text-lg text-white mb-10 leading-relaxed">
//           Have questions? Want to know more about how wAe can help you 
//           invest and trade smarter? <br />
//           We'd love to hear from you. 🚀
//         </p>

//         <div className="flex justify-center">
//           <a 
//             href="mailto:care@laavafin.com"
//             className="inline-flex items-center gap-3 px-8 py-5 rounded-xl border border-gray-800 bg-gray-900 text-white font-medium shadow-sm transition"
//           >
//             <Mail className="w-6 h-6 text-primary" />
//             <span className="text-lg">care@laavafin.com</span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }


import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contactmain = () => {
    return (
        <div className="bg-black min-h-screen px-4 md:px-20">
            <h2 className="text-center text-3xl font-bold text-white">Contact Us</h2>
            <p className="text-center text-white">
                Have questions? Want to know more about how we can help you invest and trade smarter?
                We’d love to hear from you.
            </p>

            <div className=" pt-10">
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
                            <h4 className="text-lg font-semibold text-white mb-2"><FaLocationDot /> Address</h4>
                            <p className="text-white">
                                India: Laava, Andheri West, Mumbai - 400053.
                            </p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Contactmain;
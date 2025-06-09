import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "58 Profits Booked Even With Nifty Down!",
    rating: 4.9,
    content:
      "I had zero experience in the stock market when I subscribed to Pro, but in January alone, I booked 58 profits in Stocks & F&O—even when Nifty was...",
    user: {
      name: "Ankush Rajput",
      role: "Co-Founder, SAHI COIN",
      img: "/testimonials/ankush.png",
    },
  },
  {
    title: "Super App for Investing!",
    rating: 4.9,
    content:
      "Amazing app! You don’t just get expert trade ideas from a SEBI-registered RA—you can execute trades seamlessly in one click, all within the app.",
    user: {
      name: "Piyush Gupta",
      role: "Head of Digital Partnerships TATA AIA",
      img: "/testimonials/piyush.png",
    },
  },
  {
    title: "High-Quality Picks at Affordable Price!",
    rating: 4.9,
    content:
      "Pro is super affordable! The stock picks feel unreal for the price. Absolute value for money.",
    user: {
      name: "Amresh Kumar",
      role: "Chief Product Officer, Crofarm",
      img: "/testimonials/amresh.png",
    },
  },
  {
    title: "58 Profits Booked Even With Nifty Down!",
    rating: 4.9,
    content:
      "I had zero experience in the stock market when I subscribed to Pro, but in January alone, I booked 58 profits in Stocks & F&O—even when Nifty was...",
    user: {
      name: "Ankush Rajput",
      role: "Co-Founder, SAHI COIN",
      img: "/testimonials/ankush.png",
    },
  },
  {
    title: "Super App for Investing!",
    rating: 4.9,
    content:
      "Amazing app! You don’t just get expert trade ideas from a SEBI-registered RA—you can execute trades seamlessly in one click, all within the app.",
    user: {
      name: "Piyush Gupta",
      role: "Head of Digital Partnerships TATA AIA",
      img: "/testimonials/piyush.png",
    },
  },
  {
    title: "High-Quality Picks at Affordable Price!",
    rating: 4.9,
    content:
      "Pro is super affordable! The stock picks feel unreal for the price. Absolute value for money.",
    user: {
      name: "Amresh Kumar",
      role: "Chief Product Officer, Crofarm",
      img: "/testimonials/amresh.png",
    },
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          What our user says
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border rounded-2xl p-6 shadow-md h-full">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <div className="text-sm mb-4 text-gray-600">{item.content}</div>
                <div className="flex items-center mt-auto gap-3 pt-4 border-t">
                  <img
                    src={item.user.img}
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold">{item.user.name}</p>
                    <p className="text-xs text-gray-500">{item.user.role}</p>
                  </div>
                  <div className="ml-auto flex items-center text-green-600 font-semibold text-sm border border-green-600 px-2 py-1 rounded-md">
                    <FaStar className="mr-1" /> {item.rating}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* App Rating Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-center text-sm">
          <div className="font-bold text-black">Download Laava app</div>
          <div className="flex items-center gap-1">
            <img src="/icons/apple.svg" alt="Apple" className="h-5" />
            RATED <span className="text-black font-bold">4.5</span> ⭐
          </div>
          <div className="flex items-center gap-1">
            <img src="/icons/playstore.svg" alt="Playstore" className="h-5" />
            RATED <span className="text-black font-bold">4.6</span> ⭐
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/users.png"
              alt="users"
              className="h-6 rounded-full"
            />
            <span>
              Trusted by <span className="text-blue-600 font-bold">40 lakhs+</span>{" "}
              Indians
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

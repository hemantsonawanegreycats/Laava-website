import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const trades = [
  { type: 'Short Term', daysAgo: 4, potential: '10.0%', currency: false },
  { type: 'Short Term', daysAgo: 4, potential: '10.1%', currency: false },
  { type: 'Short Term', daysAgo: 6, potential: '9.4%', currency: false },
  { type: 'Future', daysAgo: 7, potential: '₹15,188', currency: true },
  { type: 'Short Term', daysAgo: 10, potential: '10.0%', currency: false },
];

const tagColor = {
  'Short Term': 'text-orange-500 border-orange-400',
  'Future': 'text-purple-600 border-purple-500',
};

const LiveTrade = () => {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Live trade ideas</h2>
          <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
            ● 78 Live
          </span>
        </div>

        {/* Carousel */}
        <div className="border border-gray-400 rounded-xl p-6">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.3}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {trades.map((trade, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black rounded-xl p-4 w-full shadow-md">
                  {/* Tag */}
                  <div
                    className={`text-xs font-semibold border px-2 py-0.5 rounded-full w-fit mb-2 ${tagColor[trade.type]}`}
                  >
                    {trade.type}
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Shared {trade.daysAgo} days ago</p>

                  {/* Card */}
                  <div className="bg-black text-white rounded-lg py-6 px-4 text-center">
                    <div className="bg-green-500 rounded text-sm font-semibold inline-block px-3 py-1 mb-3">
                      Potential left : {trade.potential}
                    </div>
                    <div className="text-white text-sm font-bold">Target</div>
                    <div className="bg-gradient-to-br from-primary to-primary/70 h-4 w-24 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-6 text-sm text-white">
          Unlock these ideas with free trial.
        </p>
      </div>
    </section>
  );
};

export default LiveTrade;

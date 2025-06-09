import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const screeners = [
  { title: 'Daily fresh breakouts', icon: '🍽️' },
  { title: 'Weekly breakouts', icon: '⏳' },
  { title: 'Oversold stocks', icon: '📉' },
  { title: 'Nearing breakout', icon: '📈' },
  { title: 'Buy in Short term', icon: '🎯' },
  { title: 'Daily fresh breakouts', icon: '🍽️' },
  { title: 'Weekly breakouts', icon: '⏳' },
  { title: 'Oversold stocks', icon: '📉' },
  { title: 'Nearing breakout', icon: '📈' },
  { title: 'Buy in Short term', icon: '🎯' },
];

const Popular = () => {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Powered by robust algorithms built by a highly experienced research team.
        </h2>

        <div className="bg-black rounded-3xl px-4 py-6 md:px-8 md:py-10 shadow-lg">
          {/* Title */}
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">
            Popular screeners
          </h3>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {screeners.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-4 shadow-md text-black">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tag */}
          <p className="text-center mt-4 text-sm text-gray-700">
            <span className="text-red-600 font-semibold">New</span> screeners every month
          </p>
        </div>

        {/* Filters and View All */}
        <div className="mt-6 flex flex-wrap justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-1 border border-white rounded-full bg-black/40 text-white text-sm">
              Breakouts
            </button>
            <button className="px-4 py-1 border border-white rounded-full bg-black/40 text-white text-sm">
              Exclusive on Laava
            </button>
            <button className="px-4 py-1 border border-white rounded-full bg-black/40 text-white text-sm">
              Other popular lists
            </button>
          </div>
          <button className="px-5 py-2 border border-white rounded-full bg-white text-black font-semibold mt-4 md:mt-0">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Jane A.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: "/assets/images/Jane.png",
  },
  {
    name: "David K.",
    role: "Vendor",
    review:
      "Since joining EasyShip, my sales have increased significantly! Customers trust the fast deliveries, and I get more repeat buyers.",
    image: "/assets/images/David.png",
  },
  {
    name: "Adebayo O.",
    role: "Customer",
    review:
      "I love how I can track my order. It gives me peace of mind knowing my package will arrive!",
    image: "/assets/images/Ade.png",
  },
  {
    name: "Abdul Q.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: "/assets/images/Mark.jpg",
  },
  {
    name: "Debbie O.",
    role: "Vendor",
    review:
      "Since joining EasyShip, my sales have increased significantly! Customers trust the fast deliveries, and I get more repeat buyers.",
    image: "/assets/images/Ruth.jpg",
  },
  {
    name: "Sadiq O.",
    role: "Vendor",
    review:
      "I love how I can track my order. It gives me peace of mind knowing my package will arrive!",
    image: "/assets/images/Amed.jpg",
  },
  {
    name: "Aisha K.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: "/assets/images/Aisha.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className='w-full px-10 py-16'>
      <h2 className='text-[27px] text-[#000] font-bold text-center mb-[33px] max-sm:text-[20px]'>
        What people think about us
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
        allowTouchMove={true}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        className='max-w-[1340px] mx-auto'
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='p-6 min-h-[192px] max-sm:h-[150px] h-[250px] bg-white rounded-[30px] shadow-[30px] flex flex-col justify-between'>
              <div className='flex items-center space-x-4'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className='max-sm:w-[60px] max-sm:h-[60px] rounded-full object-cover'
                />
                <div className='space-y-1'>
                  <div className='flex space-x-[13px]'>
                    <h3 className='font-bold text-[18px]'>{testimonial.name}</h3>
                    {testimonial.role === "Vendor" && (
                      <p className='text-sm text-blue-600 text-[18px]'>
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                  <div className='flex space-x-2'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src='/assets/images/material-symbols_star.png'
                        alt='Star'
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                </div>
                <Image
                  src='/assets/images/colon.png'
                  alt='Quote'
                  width={49}
                  height={49}
                  className='ml-auto max-sm:w-[30px] max-sm:h-[30px]'
                />
              </div>
              <p className='mx-5 mt-5 max-sm:mt-[5px] max-sm:text-[12px] text-[#000]/65 text-[15px]'>
                {testimonial.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

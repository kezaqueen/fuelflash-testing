'use client';
import Image from 'next/image';
import React from 'react';

const cardData = [
  {
    title: "Price increases",
    imgSrc: "/image/priceincrease.png",
    description: "Get notified when prices go up so you can plan ahead",
    imgAlt: "Price Increases Icon",
  },
  {
    title: "Price Drops",
    imgSrc: "/image/pricedecrease.png",
    description: "Never miss when prices decrease. Perfect time to fill up!",
    imgAlt: "Price Drops Icon",
  },
  {
    title: "SMS Alerts",
    imgSrc: "/image/sms.png",
    description: "Reliable SMS notifications that work on any phone",
    imgAlt: "SMS Alerts Icon",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        w-full min-h-[70vh] 
        bg-gradient-to-br from-[#F6F8FF] to-[#E9ECFF]
        py-8 sm:py-16 px-2 sm:px-8
        flex flex-col items-center
      "
    >
      <h2 className="text-[#181A39] text-2xl sm:text-4xl font-extrabold text-center mb-3 sm:mb-4 tracking-tight drop-shadow-sm">
        Why choose Fuel Flash
      </h2>
      <p className="text-[#222] text-center mb-8 text-base sm:text-lg font-medium max-w-xl mx-auto opacity-90">
        Join thousands of smart vehicle owners who never miss a price change.
      </p>
      <div className="
        flex flex-col md:flex-row justify-center items-stretch 
        w-full max-w-[90%] mx-auto gap-6 sm:gap-8 md:gap-12 px-0
      ">
        {cardData.map((card) => (
          <div
            key={card.title}
            className="
              bg-white/90 border border-gray-100
              rounded-[1.5rem] sm:rounded-[2.5rem]
              shadow-[0_4px_24px_rgba(37,39,87,0.10),0_2px_8px_rgba(0,0,0,0.07)]
              flex flex-col items-center
              p-8 sm:p-12
              flex-1
              min-w-0
              min-h-[330px] sm:min-h-[370px] md:min-h-[420px]
              w-full
              max-w-[480px]   
              transition-all duration-300
              hover:shadow-[0_8px_28px_rgba(37,39,87,0.14),0_4px_12px_rgba(0,0,0,0.09)]
              hover:scale-[1.035]
              group
            "
          >
            <div className="mb-6 sm:mb-10 flex justify-center">
              <Image
                src={card.imgSrc}
                width={90}
                height={90}
                alt={card.imgAlt}
                className="rounded-full object-contain drop-shadow-md"
                priority
              />
            </div>
            <h3 className="text-[#1a1a40] text-xl sm:text-3xl font-extrabold mb-3 sm:mb-6 text-center drop-shadow-sm group-hover:text-[#353675] transition-all duration-200">
              {card.title}
            </h3>
            <p className="text-[#44476a] text-base sm:text-lg text-center px-2 sm:px-4 leading-relaxed font-medium">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
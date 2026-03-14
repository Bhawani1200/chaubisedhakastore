import React from "react";
import { Truck, Clock, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "FAST & FREE SHIPPING",
    subtitle: "Every single order ships for free. No extra credit need.",
  },
  {
    icon: Clock,
    title: "30 DAYS RETURNS POLICY",
    subtitle: "Product returns are accepted within 30 days.",
  },
  {
    icon: Award,
    title: "TOP QUALITY PRODUCTS",
    subtitle: "We always provide high quality shoes",
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SUPPORT",
    subtitle: "Our support team is always here to help you.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 md:mb-12 tracking-tight">
          We Supported By
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gradient-to-b from-amber-50 via-white to-amber-50/60 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-200"
              >
                <div className="mb-6 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-100/80 text-amber-700">
                  <IconComponent
                    size={48}
                    strokeWidth={1.5}
                    className="text-amber-700"
                  />
                </div>
                <h3 className="text-sm md:text-base font-extrabold text-gray-900 uppercase tracking-[0.18em] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

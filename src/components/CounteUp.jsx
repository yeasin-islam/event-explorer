import React from "react";
import CountUp from "react-countup";

const CounteUp = () => {
  return (
    <div className="fontStyle text-center px-4 md:px-8 lg:px-16 bg-gray-300 py-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        We Provide Best Events Services
      </h1>
      <p className="text-base md:text-lg text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
        From small meetups to large-scale festivals — EventExplorer powers every moment.
      </p>

      {/* Counter Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Reusable Card */}
        {[
          { src: "/image.png", label: "Total Events", end: 100 },
          { src: "/review.png", label: "Total Reviews", end: 467 },
          { src: "/Happy.png", label: "Happy Customers", end: 1900 },
          { src: "/teamMember.png", label: "Team Members", end: 300 },
        ].map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-start space-y-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-16 md:w-20 md:h-20 h-16 rounded-full"
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold flex items-center">
                <CountUp start={0} end={item.end} duration={5.75} />+
              </h2>
              <p className="text-lg text-gray-500 mt-1">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounteUp;

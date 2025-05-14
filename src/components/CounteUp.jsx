import React from "react";
import CountUp from "react-countup";

const CounteUp = () => {
  return (
    <div className="text-center my-6 px-4 md:px-8 lg:px-16 bg-gray-300 py-14">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        We Provide Best Events Services
      </h1>
      <p className="text-base md:text-lg text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
        From small meetups to large-scale festivals — EventExplorer powers every moment.
      </p>

      {/* Counter Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-start space-y-6 text-left">
          <img src="/image.png" alt="Total Events" className="w-16 md:w-20 rounded-full" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center">
              <CountUp start={0} end={100} duration={5.75} />+
            </h2>
            <p className="text-lg text-gray-500 mt-1">Total Events</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-start space-y-6 text-left">
          <img src="/review.png" alt="Total Reviews" className="w-16 md:w-20 rounded-full" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center">
              <CountUp start={0} end={467} duration={5.75} />+
            </h2>
            <p className="text-lg text-gray-500 mt-1">Total Reviews</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-start space-y-6 text-left">
          <img src="/Happy.png" alt="Happy Customers" className="w-16 md:w-20 rounded-full" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center">
              <CountUp start={0} end={1900} duration={5.75} />+
            </h2>
            <p className="text-lg text-gray-500 mt-1">Happy Customers</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-start space-y-6 text-left">
          <img src="/teamMember.png" alt="Team Members" className="w-16 md:w-20 md:h-20 h-16 rounded-full" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center">
              <CountUp start={0} end={300} duration={5.75} />+
            </h2>
            <p className="text-lg text-gray-500 mt-1">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounteUp;
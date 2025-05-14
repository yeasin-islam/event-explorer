import React from "react";
import CountUp from "react-countup";

const CounteUp = () => {
  return (
    <div className="fontStyle text-center my-20 container mx-auto">
      <h1 className="text-5xl font-bold">We Provide Best Events Services</h1>
      <p className="text-xl font-normal p-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      {/* Counter Container  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="1st card border-none bg-slate-200 rounded-md p-8 pr-16 text-left space-y-8">
          <div className="w-40">
            <img src="success-doctor.png" alt="Success-doctors" />
          </div>
          <div className=" space-y-3 pr-3">
            <div className="text-5xl font-bold flex justify-start items-center">
              <CountUp start={0} end={100} duration={5.75}>
                {" "}
              </CountUp>
              <p>+</p>
            </div>

            <p className="text-2xl font-medium text-slate-500">Total Dictors</p>
          </div>
        </div>
        <div className="2nd card border-none bg-slate-200 rounded-md p-8 pr-16 text-left space-y-8">
          <div className="w-40">
            <img src="success-review.png" alt="Success-reviews" />
          </div>
          <div className=" space-y-3 pr-3">
            <div className="text-5xl font-bold flex justify-start items-center">
              <CountUp start={0} end={467} duration={5.75}></CountUp>
              <p>+</p>
            </div>

            <p className="text-2xl font-medium text-slate-500">Total Reviews</p>
          </div>
        </div>
        <div className="3rd card border-none bg-slate-200 rounded-md p-8 pr-16 text-left space-y-8">
          <div className="w-40">
            <img src="success-patients.png" alt="Success-patients" />
          </div>
          <div className=" space-y-3 pr-3">
            <div className="text-5xl font-bold flex justify-start items-center">
              <CountUp start={0} end={1900} duration={5.75}></CountUp>
              <p>+</p>
            </div>
            <p className="text-2xl font-medium text-slate-500">
              Total Patients
            </p>
          </div>
        </div>
        <div className="4th card border-none bg-slate-200 rounded-md p-8 pr-16 text-left space-y-8">
          <div className="w-40">
            <img src="success-staffs.png" alt="Success-staffs" />
          </div>
          <div className="space-y-3 pr-3">
            <div className="text-5xl font-bold flex justify-start items-center">
              <CountUp start={0} end={300} duration={5.75}></CountUp>
              <p>+</p>
            </div>
            <p className="text-2xl font-medium text-slate-500">Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounteUp;

import React from "react";

const LoadingFallback = () => {
  return (
    <>
      <p className="text-center mt-4 space-x-3">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
      </p>
    </>
  );
};

export default LoadingFallback;

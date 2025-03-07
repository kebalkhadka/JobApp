import React from "react";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const randomJob = [1, 2, 5];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 md:px-20">
        <h1 className="font-bold text-xl my-10 ">
          Search Results({randomJob.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJob.map((item, length) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;

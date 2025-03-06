import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

// let allJobs = [1,2,3,4,5,6,7,8];
const LatestJob = () => {
  //   const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="flex justify-between items-center p-4 md:px-20 ">
      <h1 className="text-4xl font-bold ">
        <span className="text-red-700 ">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {/* {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )} */}
        <LatestJobCards />
      </div>
    </div>
  );
};

export default LatestJob;

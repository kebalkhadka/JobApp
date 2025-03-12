import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import useGetAlljobs from "./hooks/useGetAlljobs";

// let allJobs = [1,2,3,4,5,6,7,8];
const LatestJob = () => {
  useGetAlljobs();
  const { allJobs } = useSelector((store) => store.job);
  console.log("data of jobs", allJobs);
  return (
    <div className="flex justify-between  p-4 md:px-20 flex-col">
      <h1 className="text-4xl font-bold ">
        <span className="text-red-700 ">Latest & Top </span>Job Openings
      </h1>
      {/* <div className="flex">
        <LatestJobCards />
        <LatestJobCards />
      </div> */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJob;

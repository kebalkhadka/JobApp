import React from "react";
import Navbar from "./shared/Navbar";
import { Filter } from "lucide-react";
import FilterCard from "./FilterCard";
import Job from "./Job";
const jobsArray = [1, 2, 3, 4, 5, 6, 7];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex p-4 md:px-20">
        <div className="w-[20%]">
          <FilterCard />
        </div>

        {/* Main Content (Job Listings) */}
        <div className="flex-1 ml-5 h-[88vh] pb-5">
          {jobsArray.length <= 0 ? (
            <span>No Job Available</span>
          ) : (
            <div className="grid grid-cols-3 gap-4 h-full">
              {jobsArray.map((item, index) => (
                <div key={index}>
                  <Job />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

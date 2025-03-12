import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer"
    >
      <div>
        <h1 className=" text-2xl font-bold">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">Description:{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="flex gap-2">
          <p>No of position</p>
          <Badge className={"text-blue-700 font-bold"} variant="ghost">
            {job?.position}
          </Badge>
        </div>
        <div className="flex gap-2">
          <p>Job Status</p>
          <Badge className={"text-red-700 font-bold"} variant="ghost">
            {job?.jobType}
          </Badge>
        </div>
        <div className="flex gap-2">
          <p>Salary</p>
          <Badge className={"text-purple-600 font-bold"} variant="ghost">
            {job?.salary}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;

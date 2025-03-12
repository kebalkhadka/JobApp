import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";

import AppliedJobTable from "./AppliedJobTable";
import useGetAppliedJobs from "./hooks/useGetAppliedJobs";

// const skills = ["HTML", "CSS", "JAVASCRIPT", "REACTJS"];
const isResume = true;
const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  console.log("Resume URL:", user?.profile?.resume);
  console.log("Resume Name:", user?.profile?.resumeOriginalName);

  return (
    <div>
      <Navbar />
      <div className="flex justify-between  p-4 md:px-20 flex-col bg-white rounded-2xl my-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://via.placeholder.com/150"
                }
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullName}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="text-right"
              variant="outline"
            >
              <Pen />
            </Button>
          </div>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {Array.isArray(user?.profile?.skills) &&
            user?.profile?.skills.length > 0 ? (
              user?.profile?.skills.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="flex justify-between  p-4 md:px-20 flex-col mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs </h1>
        <AppliedJobTable />
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;

import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";

const skills = ["React", "Node", "Express", "MongoDB", "Firebase"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="p-4 md:px-20">
        <div className="border-2 bg-white rounded-xl border-gray-200 p-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <Avatar className={"w-32 h-32"}>
                <AvatarImage src="https://th.bing.com/th/id/OIP.HJaK9nBzi4aXrIm5tSf_jwHaHa?rs=1&pid=ImgDetMain" />
              </Avatar>
              <div>
                <h1 className="font-medium text-xl ">Full Name</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates explicabo soluta illum officiis, fugiat sint
                  quibusdam est debitis eligendi aut dignissimos praesentium
                  deleniti ea eaque ad, modi repellat rem dicta.
                </p>
              </div>
              <Button
                className="text-right"
                variant="outline"
                onClick={() => setOpen(true)}
              >
                <Pen />
              </Button>
            </div>
          </div>
          <div className="my-5">
            <div className="flex items-center gap-4 my-2">
              <Mail />
              <span>Kebalkhadka123@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 my-2">
              <Contact />
              <span>14578</span>
            </div>
          </div>
          <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
              {skills.length !== 0 ? (
                skills.map((item, index) => {
                  return (
                    <Badge key={index} className="mt-2">
                      {item}
                    </Badge>
                  );
                })
              ) : (
                <p>No skills added</p>
              )}
            </div>
          </div>
          <div className="grid w-full items-center max-w-sm gap-1.5">
            <Label className="text-md font-semibold">Resume</Label>
            {isResume ? (
              <a
                href="https://i.pinimg.com/originals/dd/7d/f4/dd7df4cfc15d7a615ee112596477761f.jpg"
                target="_blank"
                className="text-blue-500"
              >
                Resume
              </a>
            ) : (
              <span>No resume added</span>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-lg my-5 ">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;

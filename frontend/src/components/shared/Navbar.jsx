import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../../../redux/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  // const [user, setUser] = useState(false);
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-4 md:px-20 ">
        <div>
          <h1 className="text-2xl font-bold ">
            Job <span className="text-red-700">Bridge</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 font-semibold items-center ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-4 px-8">
              <Link to="/login">
                <Button
                  variant="outline"
                  onClick={() => setUser(true)}
                  className="px-8 py-4"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="secondary"
                  onClick={() => setUser(true)}
                  className="bg-red-700  text-white hover:bg-black px-8 py-4"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className={"cursor-pointer"}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4">
                  <Avatar className={"cursor-pointer"}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Kebal Khadka</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quasi dolores delectus voluptatibus quo mollitia
                      aspernatur{" "}
                    </p>
                  </div>
                </div>
                <div flex flex-col text-gray-600>
                  <div className="flex w-fit items-center cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

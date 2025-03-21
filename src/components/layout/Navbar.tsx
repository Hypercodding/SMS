"use client";

import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold ">
              School Management
            </Link>
          </div>
          {/* Center: Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8">
              <Link
                href="/dashboard"
                className=" px-3 py-2 rounded-md text-sm font-medium "
              >
                Dashboard
              </Link>
              <Link
                href="/students"
                className="px-3 py-2 rounded-md text-sm font-medium "
              >
                Students
              </Link>
              <Link
                href="/teachers"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Teachers
              </Link>
            </div>
          </div>
          <div className="m-3 flex space-x-4 ">
            <Button name="Login" onClick={handleButtonClick} />
            <Button
              name="Signup"
              color="bg-black"
              textColor="text-white"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

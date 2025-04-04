"use client";
import Button from "@/components/layout/Button";
import Ellipse from "@/components/layout/Ellipse";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/login");
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen px-8 bg-[#FFFFFF]">
        <div className="flex-1 p-7 mb-8">
          <p className="text-5xl font-bold leading-14">
            School Management System
          </p>
          <p className="mt-6 text-[#6C6C6C] text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, quo sapiente. Enim ex fugiat neque assumenda velit.
            Reprehenderit iste blanditiis unde aperiam omnis ipsum amet, fugit
            quaerat facilis vero et.
          </p>
          <div className="mt-15">
            <Button
              onClick={handleSubmit}
              name="Get Started"
              color="bg-[linear-gradient(90deg,rgba(174,89,195,0.5),rgba(109,236,205,0.5),rgba(219,255,0,0.5))] outline-2  outline-offset-2  outline-white border-none shadow-xl"
            />
          </div>
        </div>

        {/* Right Side (50%) */}
        <div className="flex-1 relative h-full flex justify-center items-center overflow-hidden">
          {/* Background Ellipses */}
          <Ellipse className="w-[400px] h-[400px] bg-purple-300 top-[-100px] right-[-100px]" />
          <Ellipse className="w-[300px] h-[300px] bg-green-300 bottom-[-50px] left-[-50px]" />
          <Ellipse className="w-[250px] h-[250px] bg-yellow-300 top-[50%] right-[20%]" />

          {/* Polygon Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm" />
        </div>
      </div>
    </div>
  );
}

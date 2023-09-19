"use client";

import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-Off-White flex items-center justify-center p-4
    mobile:p-0
    mobileBig:p-0
    "
    >
      <div
        className="w-[45%] h-[70%] bg-Off-White shadow-2xl shadow-Green-teal/20 rounded-3xl overflow-hidden text-Dark-gray-blue flex
      mobile:flex-col mobile:w-full mobile:h-full mobile:rounded-none
      mobileBig:flex-col mobileBig:w-full mobileBig:h-full mobileBig:rounded-none
      "
      >
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

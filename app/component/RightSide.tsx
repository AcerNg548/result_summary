"use client";
import Image from "next/image";
import reaction from "@/public/assets/images/icon-reaction.svg";
import memory from "@/public/assets/images/icon-memory.svg";
import verbal from "@/public/assets/images/icon-verbal.svg";
import visual from "@/public/assets/images/icon-visual.svg";

export default function RightSide() {
  return (
    <div
      className="w-[50%] h-full p-4 flex flex-col py-10 justify-between
    mobile:h-[55%] mobile:w-full mobile:px-8 mobile:py-4
    mobileBig:h-[60%] mobileBig:w-full mobileBig:px-8 mobileBig:py-6
    "
    >
      <h2
        className="text-[18px] font-extrabold text-Dark-gray-blue
      mobileBig:text-[24px]
      "
      >
        Summary
      </h2>
      <div
        className="flex flex-col gap-2
      mobileBig:gap-4
      "
      >
        <button
          className="flex flex-row w-full p-4 rounded-lg font-semibold items-centre
             bg-Light-red bg-opacity-5"
        >
          <Image
            src={reaction}
            alt="react"
            width={20}
            priority
            className="mr-4 
            mobileBig:w-6
            "
          />
          <p
            className="text-[14px] text-Light-red mr-auto
          mobileBig:text-[18px]
          "
          >
            Reaction
          </p>
          <p
            className="text-[12px]
          mobileBig:text-[16px]
          "
          >
            80 <span className="text-Light-lavender"> / 100</span>
          </p>
        </button>

        <button
          className="flex flex-row w-full  p-4 rounded-lg font-semibold items-center
             bg-Orangey-yellow bg-opacity-5"
        >
          <Image
            src={memory}
            alt="react"
            width={20}
            priority
            className="mr-4
            mobileBig:w-6
            "
          />
          <p
            className="text-[14px] text-Orangey-yellow mr-auto
          mobileBig:text-[18px]
          "
          >
            Memory
          </p>
          <p
            className="text-[12px] 
          mobileBig:text-[16px]
          "
          >
            92 <span className="text-Light-lavender"> / 100</span>
          </p>
        </button>

        <button
          className="flex flex-row w-full  p-4 rounded-lg font-semibold items-center
             bg-Green-teal bg-opacity-5"
        >
          <Image
            src={verbal}
            alt="react"
            width={20}
            priority
            className="mr-4
            mobileBig:w-6
            "
          />
          <p
            className="text-[14px] text-Green-teal mr-auto
          mobileBig:text-[18px]
          "
          >
            Verbal
          </p>
          <p
            className="text-[12px]
          mobileBig:text-[16px]
          "
          >
            61 <span className="text-Light-lavender"> / 100</span>
          </p>
        </button>

        <button
          className="flex flex-row w-full  p-4 rounded-lg font-semibold items-center
             bg-Cobalt-blue bg-opacity-5"
        >
          <Image
            src={visual}
            alt="react"
            width={20}
            priority
            className="mr-4
            mobileBig:w-6
            "
          />
          <p
            className="text-[14px] text-Cobalt-blue mr-auto
          mobileBig:text-[18px]
          "
          >
            Visual
          </p>
          <p
            className="text-[12px] 
          mobileBig:text-[16px]
          "
          >
            72 <span className="text-Light-lavender"> / 100</span>
          </p>
        </button>
      </div>
      <button
        className="flex flex-row  rounded-full items-center justify-center 
           w-full  p-2 bg-Dark-gray-blue
           hover:bg-gradient-to-b hover:from-Violet-blue hover:to-Persian-blue
           mobileBig:p-4
           "
      >
        <p
          className="text-Off-White text-[14px] font-medium 
        mobileBig:text-[16px] mobileBig:font-semibold
        "
        >
          Continue
        </p>
      </button>
    </div>
  );
}

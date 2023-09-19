"use client";
export default function LeftSide() {
  return (
    <div
      className="w-[50%] h-full flex flex-col items-center p-4 justify-between  rounded-3xl
      bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue overflow-hidden mx-auto py-10
      mobile:w-full mobile:h-[45%]  mobile:rounded-none mobile:py-1 mobile:rounded-b-3xl mobile:my-0
      mobileBig:w-full mobileBig:h-[40%]  mobileBig:rounded-none mobileBig:py-2 mobileBig:rounded-b-3xl mobileBig:m-0
      "
    >
      <h2
        className="text-Light-lavender text-[18px] font-semibold mb-8 
      mobile:text-[18px] mobile:mb-1
      mobileBig:text-[20px] mobileBig:mb-1
      "
      >
        Your Result
      </h2>
      <button
        className="flex flex-col   rounded-full items-center justify-center 
           w-36 h-36 p-5 bg-gradient-to-b from-Violet-blue to-Persian-blue/5 from-10% to-90% mb-8
           mobile:mb-2 mobile:w-36 mobile:h-36
           mobileBig:mb-2 mobileBig:w-36 mobileBig:h-36
           "
      >
        <p
          className="text-Off-White text-[52px] font-black 
        "
        >
          76
        </p>
        <p className="text-Light-lavender text-[14px] ">of 100</p>
      </button>
      <div className=" flex flex-col items-center">
        <p
          className="text-Off-White text-[20px] font-bold mb-2
        mobile:mb-1
        mobileBig:text-[24px] mobileBig:mb-1
        "
        >
          Great
        </p>
        <p
          className="text-Light-lavender text-[16px] text-center mx-6
        mobile:text-[14px] mobile:mx-12 mobile:font-semibold
        mobileBig:mx-14 mobileBig:font-semibold mb-2
        "
        >
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

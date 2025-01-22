import pattern from "../assets/bgImage.png";
import { Link } from "react-router";
interface PlanProps {
  title: string;
  price: string;
  planFeatures: string[];
  isCurrent: boolean;
  allFeatures: string[];
}

export default function Plan({
  title,
  price,
  planFeatures,
  isCurrent,
  allFeatures,
}: PlanProps) {
  return (
    <div
      className="flex flex-col mx-2 sm:mx-4 md:mx-1 lg:mx-[1.25rem] bg-cover bg-center items-center border-[0.16em] border-transparent w-full md:w-[30%] lg:w-auto min-w-[280px] rounded-3xl px-4 md:px-3 lg:px-[1.25rem] hover:border-[#336DBA] transition ease-in duration-250 h-full"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="w-full py-4 md:py-[1.5rem] text-center">
        <h3 className="text-xl md:text-[1rem] font-semibold mb-2 md:mb-[0.6em]">
          {title}
        </h3>
        <p className="text-sm md:text-[13px] mb-2 md:mb-[0.4em]">
          Monthly Charge
        </p>
        <h1 className="text-2xl md:text-[2rem] mt-4 md:mt-[0.5em] font-bold text-[#4880ff]">
          {price}
        </h1>
      </div>
      <div className="text-top md:h-[26.75rem] text-top pt-4 px-4 md:px-[0.5em] w-[90%] border-y-[0.12em]">
        {allFeatures.map((feature: string, index: number) => {
          const isIncluded = planFeatures.includes(feature);
          return (
            <p
              key={index}
              className={`mb-3 md:mb-[0.9rem] text-center text-sm md:text-[0.9em] font-semibold
                ${isIncluded ? "text-black" : "text-black text-opacity-40"}
              `}
            >
              {feature}
            </p>
          );
        })}
      </div>
      <div className="pt-6 md:pt-[1em] flex flex-col w-full items-center">
        <button
          className={`mb-6 md:mb-[0.7em] w-[60.4%] min-w-[160px] py-2 md:aspect-[3/1] rounded-full md:rounded-[2.7em] border-[0.25em] text-xs md:text-[0.8rem] font-semibold
            ${
              title.toLowerCase() === "premium"
                ? "bg-[#4880FF] text-white"
                : !isCurrent
                ? "text-[#4880FF] hover:border-[#336DBA] transition ease-in duration-250"
                : "text-[#4880FF]"
            }`}
        >
          {!isCurrent ? "Upgrade" : "Current Plan"}
        </button>
        <Link
          to="#"
          className="underline text-sm md:text-[0.8rem] font-semibold mb-4 md:mb-0"
        >
          Start Your 30 Day Free Trial
        </Link>
      </div>
    </div>
  );
}

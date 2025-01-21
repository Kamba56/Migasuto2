import { Link } from "react-router";
import pattern from "../assets/bgfrfr.png";
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
      className="flex flex-col mx-[1.25rem] bg-cover bg-center pb-[3.43rem] items-center border-[0.16em] border-transparent h-[100%] aspect-[5/12] rounded-3xl px-[1.25rem] overflow-hidden hover:border-[#336DBA] hover:border-[0.16em] transition ease-in duration-250"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="h-[215px] w-full py-[2.5rem] text-center">
        <h3 className="text-[1.37rem] font-semibold mb-[0.6em]">{title}</h3>
        <p className="text-[16px]  mb-[0.6em]">Monthly Charge</p>
        <h1 className="text-[2.87rem] mt-[0.8em] font-bold text-[#4880ff]">
          {price}
        </h1>
      </div>
      <div className="text-top pt-[2.5em] px-[1.37em] h-[26.75rem] w-[90%] border-y-[0.12em]">
        {allFeatures.map((feature: string, index: number) => {
          const isIncluded = planFeatures.includes(feature);
          return (
            <p
              key={index}
              className={`mb-[1.87rem] text-center text-[1em] font-semibold
                ${isIncluded ? "text-black" : "text-black text-opacity-40"}
              `}
            >
              {feature}
            </p>
          );
        })}
      </div>
      <div className="pt-[2.5em] flex flex-col w-full mx-[-1.25rem] items-center">
        <button
          className={`mb-[3em] w-[60.4%] aspect-[3/1] rounded-[2.7em] 3xl border-[0.25em] text-[0.8rem] text-[#4880FF] font-semibold ${
            title.toLowerCase() === "premium"
              ? "bg-[#4880FF] text-white"
              : !isCurrent
              ? "hover:border-[#336DBA] transition ease-in duration-250"
              : ""
          } `}
        >
          {!isCurrent ? "Upgrade" : "Current Plan"}
        </button>
        <Link to={""} className="underline text-[1rem] font-semibold ">
          Start Your 30 Day Free Trial
        </Link>
      </div>
    </div>
  );
}

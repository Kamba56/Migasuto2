import pattern from "../../assets/images/subscriptionCardBG.png";
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
      className="text-[0.8rem] md:min-w-[24em] flex flex-col mx-2 sm:mx-4 md:mx-1 lg:mx-3 bg-cover bg-center items-center border-[0.2em] hover:border-[#336DBA] border-transparent rounded-3xl px-4 md:px-3 lg:px-5 transition ease-in duration-250 md:min-h-[53em]"
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
      <div className="text-top pt-4 px-4 md:px-[0.5em] max-w-[90%] border-y-[0.12em]">
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
      <div className="flex flex-col w-full items-center">
        <button
          className={`mt-[2.5em] mb-[1.25em] w-[11.2em] h-[3.75em] py-2 rounded-full md:rounded-[2.7em] border-[0.2em] text-xs md:text-[0.8rem] font-semibold
            ${
              title.toLowerCase() === "premium"
                ? "bg-[#4880FF] text-white border-transparent"
                : !isCurrent
                ? "text-[#4880FF] hover:border-[#336DBA] transition ease-in duration-250"
                : "text-[#4880FF] border-[#575757]"
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

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
      className="flex flex-col mx-2 sm:mx-4 md:mx-[1.25rem] bg-cover bg-center pb-6 md:pb-[3.43rem] items-center border-[0.16em] border-transparent w-full md:w-auto min-w-[280px] md:aspect-[5/12] rounded-3xl px-4 md:px-[1.25rem] overflow-hidden hover:border-[#336DBA] transition ease-in duration-250"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="w-full py-6 md:py-[2.5rem] text-center">
        <h3 className="text-xl md:text-[1.37rem] font-semibold mb-2 md:mb-[0.6em]">
          {title}
        </h3>
        <p className="text-sm md:text-[16px] mb-2 md:mb-[0.6em]">
          Monthly Charge
        </p>
        <h1 className="text-3xl md:text-[2.87rem] mt-4 md:mt-[0.8em] font-bold text-[#4880ff]">
          {price}
        </h1>
      </div>
      <div className="text-top pt-6 md:pt-[2.5em] px-4 md:px-[1.37em] md:h-[26.75rem] w-[90%] border-y-[0.12em]">
        {allFeatures.map((feature: string, index: number) => {
          const isIncluded = planFeatures.includes(feature);
          return (
            <p
              key={index}
              className={`mb-4 md:mb-[1.87rem] text-center text-sm md:text-[1em] font-semibold
                ${isIncluded ? "text-black" : "text-black text-opacity-40"}
              `}
            >
              {feature}
            </p>
          );
        })}
      </div>
      <div className="pt-6 md:pt-[2.5em] flex flex-col w-full items-center">
        <button
          className={`mb-6 md:mb-[3em] w-[60.4%] min-w-[160px] py-2 md:aspect-[3/1] rounded-full md:rounded-[2.7em] border-[0.25em] text-xs md:text-[0.8rem] font-semibold
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
        <a
          href="#"
          className="underline text-sm md:text-[1rem] font-semibold mb-4 md:mb-0"
        >
          Start Your 30 Day Free Trial
        </a>
      </div>
    </div>
  );
}

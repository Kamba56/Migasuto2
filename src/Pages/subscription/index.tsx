import Plan from "../../Components/subscriptionPage/Plan";
import logo from "../../assets/images/subscriptionLogo.png";
import {
  subPlans,
  plantype,
} from "../../Components/subscriptionPage/dummyData";
export default function SubscriptionPage() {
  const getAllUniqueFeatures = (plans: plantype[]): string[] => {
    const uniqueFeatures = new Set<string>();
    plans.forEach((plan) => {
      plan.features.forEach((feature) => {
        uniqueFeatures.add(feature);
      });
    });
    return Array.from(uniqueFeatures);
  };

  const allFeatures = getAllUniqueFeatures(subPlans);

  return (
    <div className="absolute inset-0 bg-[#ECF0FF] ">
      <div className="bg-[#ECF0FF] md:max-h-screen p-4 md:pt-[1.56em] md:px-[1.56em] overflow-hidden">
        <div className="flex items-center gap-2 mb-8 md:mb-[2.5em]">
          <img src={logo} alt="" className="w-auto md:w-auto" />
          <p className="font-semibold text-xl md:text-[1.1em] text-[#3B4250]">
            Subscription
          </p>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-8 md:gap-2 lg:gap-8 md:justify-center md:align-middle min-h-[53em] md:min-h-[15em]">
          {subPlans.map((plan: plantype, index: number) => (
            <Plan
              key={index}
              title={plan.name}
              price={plan.price}
              planFeatures={plan.features}
              allFeatures={allFeatures}
              isCurrent={plan.isCurrent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import Plan from "./components/Plan";
import logo from "./assets/Category.png";
import Button from "./components/Button";
import { subPlans, plantype } from "./assets/dummyData";
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
  console.log(allFeatures);
  return (
    <div className="bg-[#ECF0FF] pt-[1.56em] pl-[1.56em] h-[100vh]">
      <div className="flex justify-start">
        <img src={logo} alt="" />
        <p className="font-semibold text-[1.5rem] text-[#3B4250]">
          Subscription
        </p>
      </div>

      <div className="mt-[3.56em] flex justify-evenly ">
        {subPlans.map((plan: plantype) => (
          <Plan
            title={plan.name}
            price={plan.price}
            planFeatures={plan.features}
            allFeatures={allFeatures}
            isCurrent={plan.isCurrent}
          />
        ))}
      </div>
    </div>
  );
}

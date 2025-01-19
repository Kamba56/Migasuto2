import React from "react";
interface PlanProps {
  title: string;
  price: string;
  features: string[];
  upgrade: React.FC;
}

export default function Plan(/*{ title, price, features, upgrade }: PlanProps*/) {
  const title = "basic";
  const price = 50;
  const features = [
    "asscheecks",
    "boo says the ghost",
    "cats kinda cool af i want one",
    "doctor diss",
    "eggs and fucking bacon, my dude",
    "fishy fish fish fishing fishermen",
    "great stuff fr",
  ];
  return (
    <div className="flex-col border-4 max-w-[21.85rem] aspect-[5/12] rounded-3xl overflow-hidden">
      <div className="h-[215px] w-full box-border border-4"></div>
      <div className="py-[2.5em] px-[3.12em] h-[428px] w-full box-border border-4">
        {features.map((feature: string) => (
          <p className=""></p>
        ))}
      </div>
    </div>
  );
}

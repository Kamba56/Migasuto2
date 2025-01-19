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
  const features = ["a", "b", "c", "d", "e", "f"];
  return (
    <div className="flex-col border-4 w-[350px] h-[748px] rounded-3xl overflow-hidden">
      <div className="h-[215px] w-full box-border border-4"></div>
      <div className="h-[428px] w-full box-border border-4"></div>
    </div>
  );
}

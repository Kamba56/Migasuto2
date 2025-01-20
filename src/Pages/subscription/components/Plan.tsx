import React from "react";
import { Link } from "react-router";
import Button from "./Button";
import pattern from "../assets/bgfrfr.png";
interface PlanProps {
  title: string;
  price: string;
  features: string[];
  upgrade: React.FC;
}

export default function Plan(/*{ title, price, features, upgrade }: PlanProps*/) {
  const title = "Basic";
  const price = "$14.99";
  const features = [
    "Asscheecks",
    "Boo says the ghost",
    "Cats kinda cool af i want one",
    "doctor diss",
    "eggs and fucking bacon, my dude",
    "fishy fish fish fishing fishermen",
    "great stuff fr",
  ];
  return (
    <div
      className="flex flex-col bg-cover bg-center items-center border-[0rem] border-[#979797ff] max-w-[21.85rem] aspect-[5/12] rounded-3xl px-[1.25rem] overflow-hidden"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="h-[215px] w-full box-border py-[2.5rem] text-center">
        <h3 className="text-[1.37rem] font-semibold mb-[0.6em]">{title}</h3>
        <p className="text-[1em]  mb-[0.6em]">Monthly Charge</p>
        <h1 className="text-[2.87rem] mt-[0.8em] font-bold text-[#4880ff]">
          {price}
        </h1>
      </div>
      <div className="text-top pt-[2.5em] px-[1.37em] h-[26.75rem] w-[90%] box-border border-y-[0.12em]">
        {features.map((feature: string) => (
          <p className="mb-[1.87rem] text-center text-[1em] font-semibold">
            {feature}
          </p>
        ))}
      </div>
      <div className="pt-[2.5em] flex flex-col w-full mx-[-1.25rem] items-center">
        <Button />
        <Link to={""} className="underline text-[1rem] font-semibold">
          Start Your 30 Day Free Trial
        </Link>
      </div>
    </div>
  );
}

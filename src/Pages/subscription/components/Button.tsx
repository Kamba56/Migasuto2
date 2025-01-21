interface buttonprop {
  isactive: boolean;
  isPremium: boolean;
}

export default function Button({ isactive, isPremium }: buttonprop) {
  return (
    <button
      className={`mb-[3em] w-[60.4%] aspect-[3/1] rounded-[2.7em] 3xl border-[0.25em] text-[0.8rem] text-[#4880FF] font-semibold ${
        !isactive
          ? "hover:border-[#336DBA] transition ease-in duration-250"
          : isPremium
          ? "bg-[#4880FF] hover:border-[#5A8BFF] transition ease-in duration-250"
          : ""
      } `}
    >
      Current Plan
    </button>
  );
}
//set the transition to only work when isActive is false

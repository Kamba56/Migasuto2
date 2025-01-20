interface buttonprop {
  isactive: boolean;
}

export default function Button(/*{isactive}:buttonprop*/) {
  return (
    <button className="mb-[3em] w-[60.4%] aspect-[3/1] rounded-[2.7em] 3xl border-[0.25em] text-[0.8rem] text-[#4880FF] font-semibold hover:border-[#336DBA] transition ease-in duration-250">
      Current Plan
    </button>
  );
}
//set the transition to only work when isActive is false

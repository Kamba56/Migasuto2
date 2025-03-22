import icon from "../../assets/images/accountCreatedIcon.png";
import { useNavigate } from "react-router";

export default function Stepthree() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img
        src={icon}
        alt="welcome aboard"
        className="max-w-[8em] object-center mb-[2.25em]"
      />
      <h2 className="text-[2em] font-semibold mb-[0.4em]">
        Account Created Successfully!
      </h2>
      <h3 className="text-[#9C9AA5] mb-[2em] text-[1.6em]">
        Welcome aboard! Start your success journey with SimpleFlow!
      </h3>
      <button
        onClick={() => navigate("/login")}
        className="bg-[#465FF1] min-w-[13em] min-h-[3em] rounded-[0.6em] text-[#FFFFFF] font-[550]"
      >
        Let's Start!
      </button>
    </div>
  );
}

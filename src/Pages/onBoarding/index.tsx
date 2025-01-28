import { useParams } from "react-router";
import Stepone from "../../Components/onboarding/Stepone";
import Steptwo from "../../Components/onboarding/Steptwo";

export default function Onboarding() {
  const { id } = useParams();

  // Decide which component to render
  const renderContent = () => {
    switch (id) {
      case "1":
        return <Stepone />;
      case "2":
        return <Steptwo />;
      default:
        return <></>;
    }
  };
  return (
    <div className=" overflow-hidden">
      <div className="bg-[#336DBA] absolute min-h-screen min-w-full">
        {" "}
        {/*here to make the bg color spread throughout the screen*/}
        <div
          className="border-[2px] text-[16px] box-border m-[2em] min-h-[36em] rounded-[1.25em] bg-white
    "
        ></div>
      </div>
    </div>
  );
}

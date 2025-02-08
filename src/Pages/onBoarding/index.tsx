import { useParams } from "react-router";
import Stepone from "../../Components/onboarding/Stepone";
import Steptwo from "../../Components/onboarding/Steptwo";
import { Link } from "react-router";
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
    <div className="overflow-hidden">
      <div className="bg-[#336DBA] absolute min-h-screen min-w-full">
        {/*here to make the bg color spread throughout the screen*/}
        <div className="h-screen overflow-hidden">
          {/*so this div SEEMS useless, but trust me, it's not. I need to set a defined height for the div white bg to cover 95% of the screen*/}
          <div
            className="text-[11px] text-center box-border m-[2em] min-h-[95%] rounded-[1.25em] bg-white flex flex-col items-center
    "
          >
            <Link
              to="/onboarding/1/"
              className="text-[#336DBA] absolute top-12 left-12"
              hidden={id === "1"}
            >
              {"< Back"}
            </Link>
            <div className="m-[2em] max-w-[35em] flex flex-col items-center">
              <img
                src="/logo.svg"
                alt="company logo"
                className="w-[5em] mb-[0.8em]"
              />
              <p className="mb-[0.8em] text-[#9C9AA5] text-[0.8em]">{id}/2</p>
              <div>
                <h2 className="text-[1.2em] font-semibold mb-[0.4em]">
                  Customize your Organization
                </h2>
                <h3 className="text-[#9C9AA5] mb-[2.5em]">
                  Setup your organization for members that may join later.
                </h3>
              </div>
              <div className="w-full">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

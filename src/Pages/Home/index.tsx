import { SlCalender } from "react-icons/sl";
import NewClient from "../../Components/Dashboard/NewClientCard";

const HomePage = () => {
  return (
    <main className="py-4 flex flex-col gap-5">
      <section className="px-9 py-12 flex items-center flex-col bg-home_blue text-white text-left rounded-2xl">
        <div className="w-[70%] min-w-80 flex flex-col gap-2 items-start">
          <p className="text-base font-semibold">September 12-22</p>
          <h2 className="font-black text-4xl">Content Creation for Investment Management Businesses</h2>
          <p className="text-base font-normal">This service is designed to accelerate the connections between your brand as a firm and your audience through a fundamental and data-driven approach.</p>
          <button className="font-bold py-2 px-6 bg-home_orange rounded-lg">Get Started</button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-1">
        <div className="w-full max-w-80 px-[3%] py-8 bg-home_purple rounded-2xl flex flex-row items-center justify-center gap-7 md:gap-3">
          <figure className="bg-white rounded-full p-3 text-white bg-opacity-10">
            <SlCalender />
          </figure>
          <div className="w-fit text-white flex flex-col gap-3">
            <h2 className="font-semibold text-3xl">2390</h2>
            <p>Meeting Schedule</p>
          </div>
        </div>

        <div className="w-full max-w-80 px-[3%] py-8 bg-home_red rounded-2xl flex flex-row items-center justify-center gap-7 md:gap-3 xl:gap-5">
          <figure className="bg-white rounded-full p-3 text-white bg-opacity-10">
            <SlCalender />
          </figure>
          <div className="w-fit text-white flex flex-col gap-3">
            <h2 className="font-semibold text-3xl">2390</h2>
            <p>Meeting Schedule</p>
          </div>
        </div>

        <div className="w-full max-w-80 px-[3%] py-8 bg-home_orange rounded-2xl flex flex-row items-center justify-center gap-7 md:gap-3 xl:gap-5">
          <figure className="bg-white rounded-full p-3 text-white bg-opacity-10">
            <SlCalender />
          </figure>
          <div className="w-fit text-white flex flex-col gap-3">
            <h2 className="font-semibold text-3xl">2390</h2>
            <p>Meeting Schedule</p>
          </div>
        </div>

        <div className="w-full max-w-80 px-[3%] py-8 bg-home_orange rounded-2xl flex flex-row items-center justify-center gap-7 md:gap-3 xl:gap-5">
          <figure className="bg-white rounded-full p-3 text-white bg-opacity-10">
            <SlCalender />
          </figure>
          <div className="w-fit text-white flex flex-col gap-3">
            <h2 className="font-semibold text-3xl">2390</h2>
            <p>Meeting Schedule</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row flex-wrap gap-5">
        <NewClient />
        <NewClient />
        <NewClient />
        <NewClient />
      </section>
    </main>
  )
}

export default HomePage;

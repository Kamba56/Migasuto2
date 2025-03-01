import MetricChart from "../../Components/base-components/Charts";
import FilterBar from "../../Components/base-components/Filter/FilterBar";

export default function Metrics() {
    return (
        <div
        className="flex flex-col gap-5">
            <FilterBar />
            <section
                className="bg-white w-full p-5 md:p-10 rounded-3x"
            >
                <h1 className="text-2xl text-mig_blue font-bold mb-5">Metrics Title</h1>
                <div className="bg-blue_fade w-full px-6 py-4 rounded-xl">
                    <p className="text-[12px] text-mig_blue max-w-[476px]">To optimize ante-natal care (ANC) uptake by ensuring every pregnant woman
                    attending ANC in PHCs receives quality integrated PHC services and care</p>

                </div>

                <MetricChart />
            </section>
            
        </div>
    );
}
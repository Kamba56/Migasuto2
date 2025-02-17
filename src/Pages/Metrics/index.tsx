import MetricChart from "../../Components/base-components/Charts";
import FilterBar from "../../Components/base-components/Filter/FilterBar";
import CategoryLayout from "../../Components/CategoryLayout";

export default function Metrics() {
    return (
        <CategoryLayout
            organization="Migasuto"
            category="Metrics"
        >
            <FilterBar />
            <section
                className="bg-white w-full md:p-10 rounded-3x"
            >
                <h1 className="text-2xl text-mig_blue font-bold">Metrics Title</h1>
                <div className="bg-blue_fade w-full px-6 py-4">
                    <p className="text-[12px] text-mig_blue max-w-[476px]">To optimize ante-natal care (ANC) uptake by ensuring every pregnant woman
                    attending ANC in PHCs receives quality integrated PHC services and care</p>

                </div>

                <MetricChart />
            </section>
            
        </CategoryLayout>
    );
}
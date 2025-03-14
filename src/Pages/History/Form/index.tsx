import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./CreatorPages/shemas";

import Back from '../../../assets/icons/Back.svg';
import HistoryToggle from "../../../Components/framer-motion/animations/toggle";
import CreatorFirstPage from "./CreatorPages/page1";
import CreatorSecondPage from "./CreatorPages/page2";

export default function Questionnaire() {
    const [page, setPage] = useState(2);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
    };

    return (
        <section>
            <section className="py-10 px-5 sm:px-10 rounded-3xl bg-white flex flex-col gap-3">
                <p className="text-lg font-bold flex gap-4">
                    <img src={Back} alt="Back" />
                    Back
                </p>
                <div className="sm:pl-16 flex flex-col md:flex-row gap-2 justify-between items-center">
                    <div>
                        <h1 className="text-2xl text-dark font-semibold">New Client Questionnaire</h1>
                        <p className="text-[13px] text-secondary_dark sm:w-[400px]">
                            Please endeavour to complete all the sections that are relevant to you.
                        </p>
                    </div>
                    <HistoryToggle />
                </div>
                <p className="text-center text-gray">Please provide your response below</p>

                {/* Form is now here */}
                <form onSubmit={handleSubmit(onSubmit)} className="sm:px-20 py-5">
                    {page === 1 ? (
                        <CreatorFirstPage register={register} errors={errors} />
                    ) : (
                        <CreatorSecondPage register={register} errors={errors} />
                    )}

                    <div className="flex justify-between mt-4">
                        {page === 2 && (
                            <div  className="bg-primary text-white py-2 px-4 rounded-lg" onClick={() => setPage(page - 1)}>
                                Previous
                            </div>
                        )}
                        {page === 1 && (
                            <button type="button" className="bg-primary text-white py-2 px-4 rounded-lg" onClick={() => setPage(page + 1)}>
                                Next
                            </button>
                        )}
                        {page === 2 && (
                            
                        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg">submit</button>
                        )}
                    </div>
                </form>
            </section>
        </section>
    );
}

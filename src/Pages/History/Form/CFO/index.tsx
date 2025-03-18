import { motion, AnimatePresence, m } from "framer-motion";
import HistoryToggle from "../../../../Components/framer-motion/animations/toggle";
import Back from '../../../../assets/icons/Back.svg'
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Page1 from "./page1";
import Page2 from "./page2";
import FinancialAssumption from "./pages/FinancialAssumption";
import Funding from "./pages/Funding";
import FinancialNeeds from "./pages/FinancialNeeds";
import Projection from "./pages/RevenueProjection";
import RiskManagement from "./pages/RiskManagement";
import FinancialSuccess from "./pages/FinancialSuccess";
import Schema1 from "./schemas/schemas1";
import Schema2 from "./schemas/schemas2";
import Schema3 from "./schemas/schemas3";
import Schema4 from "./schemas/schemas4";
import Schema5 from "./schemas/schemas5";
import Schema6 from "./schemas/schemas6";
import Schema7 from "./schemas/schemas7";
import Schema8 from "./schemas/schemas8";
import Schema9 from "./schemas/schemas9";
import FileUploadForm from "./pages/FinancialDocument";
import { useSubmitCFOForm } from "../../../../stores/store";
import { useDispatch, useSelector } from "react-redux";
import { submitCFOForm } from "../../../../stores/CFO/Slice";

const schemas: Array<any> = [Schema1, Schema2, Schema3, Schema4, Schema5, Schema6, Schema7, Schema8, Schema9];

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-50vw",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "-50vw",
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
};

export default function CFO() {
    const [page, setPage] = useState(1);
    const { mutate, isLoading, isError, error } = useSubmitCFOForm();
    const methods = useForm({
        resolver: yupResolver(schemas[page - 1]),
        mode: "onChange",
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;


    const onSubmit = (data: any) => {
        mutate(data, {
            onError: (err: any) => {
                console.error("Submission error:", err);
                alert(
                    err?.response?.data?.message ||
                    "An error occurred while submitting the form."
                );
            },
            onSuccess: (response: any) => {
                console.log("Form submitted successfully:", response);
                alert("Form submitted successfully!");
            },
        });
    };

    return (
        <FormProvider {...methods}>
            <section>
                <section className="py-10 px-5 sm:px-10 rounded-3xl bg-white flex flex-col gap-3">
                    <p className="text-lg font-bold flex gap-4">
                        <img src={Back} alt="Back" />Back
                    </p>
                    <div className="sm:pl-16 flex flex-col md:flex-row gap-2 justify-between items-center">
                        <div className="">
                            <h1 className="text-2xl text-dark font-semibold">New Client Questionnaire</h1>
                            <p className="text-[13px] text-secondary_dark sm:w-[400px]">Please endeavour to complete all the sections that are relevant to you</p>
                        </div>
                        <HistoryToggle />
                    </div>
                    <p className="text-center text-gray">Please provide your response below</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <AnimatePresence mode="wait">
                            <h2>{page}/9</h2>
                            <motion.div
                                key={page}
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                {page === 1 && <Page1 register={register} errors={errors} />}
                                {page === 2 && <Page2 register={register} errors={errors} />}
                                {page === 3 && <FinancialAssumption register={register} errors={errors} />}
                                {page === 4 && <Funding register={register} errors={errors} />}
                                {page === 5 && <FinancialNeeds register={register} errors={errors} />}
                                {page === 6 && <Projection register={register} errors={errors} />}
                                {page === 7 && <RiskManagement register={register} errors={errors} />}
                                {page === 8 && <FinancialSuccess register={register} errors={errors} />}
                                {page === 9 && <FileUploadForm errors={errors} />}
                            </motion.div>
                        </AnimatePresence>
                        {page > 1 && <button type="button" onClick={() =>{setPage(page - 1)}} className="bg-primary text-white py-2 px-4 rounded-lg">Previous</button>}
                        {page < 9 && <button type="button" onClick={handleSubmit( () =>{setPage(page + 1)} )} className="bg-primary text-white py-2 px-4 rounded-lg">Next</button>}
                        {page === 9 && <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg">{isLoading ? "Submitting..." : "Submit"}</button>}
                    </form>
                    {error && <p className="text-red-500">{typeof error === 'string' ? error : JSON.stringify(error)}</p>}
                
                </section>
            </section>
        </FormProvider>
    );
}

import HistoryToggle from "../../../Components/framer-motion/animations/toggle";

import Back from '../../../assets/icons/Back.svg'
import { useState } from "react";
import CreatorFirstPage from "./CreatorPages/page1";
import CreatorSecondPage from "./CreatorPages/page2";

export default function Questionnaire() {
    const [page, setPage] = useState(2)

    const handleNextPage = () => {
        setPage(1)
    }
    
    return (
        <section>
            <section className="py-10 px-5 sm:px-10 rounded-3xl bg-white flex flex-col gap-3">
                <p className="text-lg font-bold flex gap-4">
                <img src={Back} />Back</p>
                <div className="sm:pl-16 flex flex-col md:flex-row gap-2 justify-between items-center">
                    <div className="">
                        <h1 className="text-2xl text-dark font-semibold">New Client Questionnaire</h1>
                        <p className="text-[13px] text-secondary_dark sm:w-[400px] ">Please endeavour to complete all the sections that are relevant to you</p>
                    </div>
                    <HistoryToggle />

                </div>
                <p className="text-center text-gray">Please provide  your response below</p>

                {page === 1 && (
                    <CreatorFirstPage />
                )}

                {page === 2 && (
                    <CreatorSecondPage />
                )}
                
            </section>
            
        </section>
    )
}
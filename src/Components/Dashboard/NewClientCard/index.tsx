import { TiDocumentText } from "react-icons/ti"

const NewClient = () => {
  return (
    <section className="w-full md:w-[calc(50%-12px)] bg-white rounded-3xl p-3 lg:p-5 flex flex-row gap-3 items-start">
      <figure className="p-3 rounded-full bg-secondary text-white">
        <TiDocumentText />
      </figure>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">MIGASUTO New Client Questionnaire</h2>
        <p>Please endeavour to complete all the sections that are relevant to you
        </p>
        <button className="self-end flex items-center justify-center w-30 h-11 text-white bg-secondary rounded-lg px-4">Click to Fill Form</button>
      </div>
    </section>
  )
}

export default NewClient

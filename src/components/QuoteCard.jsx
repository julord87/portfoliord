import { useEffect } from "react";
import { handleScroll } from "../helpers/handle-scroll-fn";


const QuoteCard = ({ name, quote, img, linkedin }) => {

    useEffect(() => {
        handleScroll('.quote-container');
    }, []);

    return (
        <div className="quote-container max-w-6xl mx-auto mt-16 p-2 misterious-fade-in to-fade-in">
            <div className="quote-card min-h-72">
                <div className="md:grid md:grid-cols-5 items-center mx-5">
                    <p className="quote text-slate-500 col-span-4 p-8 lg:p-20 lg:pl-32">
                        {quote}"
                    </p>

                    <div className=" grid grid-cols-6">
                        <span className="cols-span-1 Description-9999 text-slate-300 sm:hidden italic text-base">{`<`} slide</span>
                        <div className="xs:col-span-4 md:col-span-6 w-auto pt-7 space-y-1 lg:pt-16 lg:mb-10 flex flex-col xs:mb-8  items-center h-full">
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={img} alt="Profile image" className="rounded-full shadow-2xl h-28 w-28 lg:h-30 lg:w-30"/>
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <span className="Description-Quote-Name text-gray-500 text-center italic border-b border-gray-300">{name}</span>
                            </a>
                        </div>
                        <span className="cols-span-1 Description-9999 text-slate-300 lg:hidden italic text-base">slide {`>`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default QuoteCard
import React, { Suspense, useEffect, useState } from "react";
import Button from "../components/shared/Button";
import { CiCalendarDate } from "react-icons/ci";
import LoadingFallback from "../components/shared/LoadingFallback";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
    const [faqs, setFaqs] = useState([]);
    const [displayQuestions, setDisplayQuestions] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/faq.json")
            .then((res) => res.json())
            .then((data) => {
                setFaqs(data);
                setDisplayQuestions(data.slice(0, 3)); // initial 3 questions
            })
            .catch((error) => console.error("Failed to fetch FAQ data:", error));
    }, []);

    useEffect(() => {
        if (showAll) {
            setDisplayQuestions(faqs);
        } else {
            setDisplayQuestions(faqs.slice(0, 3));
        }
    }, [showAll, faqs]);

    return (
        <section className='bg-base-200'>
            <Helmet>
                <title>
                    About | EventeXplorer
                </title>
            </Helmet>
            <Suspense fallback={<LoadingFallback />}>
                <div className="fontStyle fontStyle px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-5">
                    <div className="text-center mb-14 mt-5">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                            Got questions? We've got answers. Here are some of the most common things people ask about EventeXplorer.
                        </p>
                    </div>
                    <div className="space-y-4 mb-8">
                        {displayQuestions.map((faq) => (
                            <div
                                key={faq.id}
                                className="p-5 duration-300 transform bg-white border-none rounded shadow-sm hover:-translate-y-2"
                            >
                                <h6 className="mb-2 font-semibold text-lg leading-5">
                                    Q-{faq.id}: {faq.question}
                                </h6>
                                <hr />
                                <div className="my-7">
                                    <p className="font-medium text-lime-400">Answer:</p>
                                    <p className="text-md text-gray-900">{faq.answer}</p>
                                </div>
                                <hr />
                                <h3 className="text-md text-gray-600 mt-2 flex gap-1 items-center">
                                    <CiCalendarDate className="text-xl" />
                                    Added at {faq.date}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button
                            onClick={() => {
                                setShowAll((prev) => !prev);
                                if (showAll) window.scrollTo(0, 0);
                            }}
                            label={showAll ? "Hide" : "Learn More"}
                        />
                    </div>
                </div>
            </Suspense>
        </section>
    );
};

export default Blogs;

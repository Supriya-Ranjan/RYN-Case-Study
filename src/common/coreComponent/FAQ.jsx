import PropTypes from "prop-types";
import React, { useState } from "react";
import Title from "./Title";

const FAQ = ({ faqList }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col mt-10">
      <Title
        path="../../public/assets/img/star.svg"
        name="Frequently asked questions"
      />
      <div className="bg-black text-white px-6 py-8 space-y-4 w-full mx-auto">
        {faqList.map((item) => (
          <div key={item.id} className="pb-4">
            <button
              onClick={() => toggleQuestion(item.id)}
              className="text-xl font-semibold cursor-pointer w-full text-left focus:outline-none"
            >
              {item.question}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeQuestion === item.id
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FAQ.propTypes = {
  faqList: PropTypes.array,
};

export default FAQ;

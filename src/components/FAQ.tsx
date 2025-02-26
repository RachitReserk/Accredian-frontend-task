import { useState } from "react";

const FAQs = [
  {
    question: "What are the minimum system requirements?",
    answer: "You need at least 8GB RAM, an Intel i5 or equivalent processor, and 20GB of free disk space.",
  },
  {
    question: "Do I need prior experience in Project Management?",
    answer: "No, but having some experience will be beneficial. We also provide beginner-friendly resources.",
  },
  {
    question:"What payment methods do you accept?",
    answer:"We accept credit/debit cards, PayPal, and bank transfers."
  },
  {
    question:"Do you offer customer support?",
    answer:"Yes, we provide 24/7 customer support via email and chat."
  }
];

const FAQ = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col mt-8 items-start p-10 gap-7">
        <h2 className="w-full text-2xl font-semibold text-center">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

    <div className="md:w-[800px]">
      {FAQs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-3">
          <button
            className="flex justify-between w-full text-left font-medium text-lg"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="transition-transform duration-200" style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;

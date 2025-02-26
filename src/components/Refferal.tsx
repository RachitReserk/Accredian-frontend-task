import { useEffect, useState } from "react";

const ReferralBenefits = () => {

  const [benefits,setBenefits]=useState([
    ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
    ["PG Certificate Program in Strategic Product Management", "₹ 9,000", "₹ 11,000"],
    ["Executive Program in Data Driven Product Management", "₹ 10,000", "₹ 10,000"],
    ["Executive Program in Product Management and Digital Transformation", "₹ 10,000", "₹ 10,000"],
    ["Executive Program in Product Management", "₹ 10,000", "₹ 10,000"],
    ["Advanced Certification in Product Management", "₹ 10,000", "₹ 10,000"],
    ["Executive Program in Product Management and Project Management", "₹ 10,000", "₹ 10,000"],
  ])

  const handleClick = (e:string)=>{
    const categories = {
      "All": [
        ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
        ["PG Certificate Program in Strategic Product Management", "₹ 9,000", "₹ 11,000"],
        ["Executive Program in Data Driven Product Management", "₹ 10,000", "₹ 10,000"],
        ["Executive Program in Product Management and Digital Transformation", "₹ 10,000", "₹ 10,000"],
        ["Executive Program in Product Management", "₹ 10,000", "₹ 10,000"],
        ["Advanced Certification in Product Management", "₹ 10,000", "₹ 10,000"],
        ["Executive Program in Product Management and Project Management", "₹ 10,000", "₹ 10,000"],
      ],
      "STRATEGY & LEADERSHIP": [
        ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
        ["PG Certificate Program in Strategic Product Management", "₹ 9,000", "₹ 11,000"],
        ["Executive Program in Data Driven Product Management", "₹ 10,000", "₹ 10,000"],
      ],
      "PRODUCT MANAGEMENT": [
        ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
        ["PG Certificate Program in Strategic Product Management", "₹ 9,000", "₹ 11,000"],
        ["Executive Program in Data Driven Product Management", "₹ 10,000", "₹ 10,000"],
        ["Executive Program in Product Management and Digital Transformation", "₹ 10,000", "₹ 10,000"],
        ["Executive Program in Product Management", "₹ 10,000", "₹ 10,000"],
      ],
      "BUSINESS MANAGEMENT": [
        ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
      ],
      "FINTECH": [
        ["Executive Program in Fintech and Digital Banking", "₹ 12,000", "₹ 14,000"],
        ["PG Certificate Program in Fintech", "₹ 10,000", "₹ 12,000"],
      ],
      "SENIOR MANAGEMENT": [
        ["Executive Program in Senior Management", "₹ 15,000", "₹ 17,000"],
      ],
      "DATA SCIENCE": [
        ["PG Certificate Program in Data Science", "₹ 8,000", "₹ 10,000"],
        ["Executive Program in AI & Data Science", "₹ 12,000", "₹ 14,000"],
      ],
      "DIGITAL TRANSFORMATION": [
        ["Executive Program in Digital Transformation", "₹ 11,000", "₹ 13,000"],
      ],
      "BUSINESS ANALYTICS": [
        ["PG Certificate Program in Business Analytics", "₹ 9,000", "₹ 11,000"],
      ],
    };
    
    setBenefits(categories[e]);
    
  }

  return (
  <div>
    {/*Desktop*/}
    <div className="max-w-[1000px] md:flex hidden min-h-screen p-8 mt-12">
      <div className="w-[300px] rounded-lg shadow-2xl drop-shadow-2xl p-4">
        <div className="w-full text-white bg-blue-600 py-3 rounded-md font-bold flex justify-between items-center">
          <span onClick={() => handleClick('All')} className="ml-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">ALL PROGRAMS</span>
        </div>
        <ul className="mt-4 space-y-4 text-gray-700">
          {[
            "PRODUCT MANAGEMENT",
            "STRATEGY & LEADERSHIP",
            "BUSINESS MANAGEMENT",
            "FINTECH",
            "SENIOR MANAGEMENT",
            "DATA SCIENCE",
            "DIGITAL TRANSFORMATION",
            "BUSINESS ANALYTICS",
          ].map((category, index) => (
            <li key={index} className="cursor-pointer flex justify-between border-b pb-2">
              <p onClick={() => handleClick(category)} className="transition-transform duration-300 ease-in-out hover:scale-105"
              >{category}</p><span>›</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 ml-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl ml-18 font-bold">
            What Are The{" "}
            <span className="text-blue-600">Referral Benefits?</span>
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="text-left py-3 px-4 font-semibold">Programs</th>
                <th className="py-3 px-4 font-semibold">Referrer Bonus</th>
                <th className="py-3 px-4 font-semibold">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map(([program, referrer, referee], index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4 flex items-center">
                    <span className="mr-2">🎓</span> {program}
                  </td>
                  <td className="py-3 px-4 text-center">{referrer}</td>
                  <td className="py-3 px-4 text-center">{referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/*SmartPhone*/}
    <div className="mx-4 md:hidden">
    <div className="mt-6">
        <div className=" flex  flex-row w-full justify-center items-center mb-4">
          <h2 className="text-2xl font-bold">
            What Are The{" "}
            <span className="text-blue-600">Referral Benefits?</span>
          </h2>
        </div>
      </div>
    <div className="mt-8 bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="text-left py-3 px-4 font-semibold">Programs</th>
                <th className="py-3 px-4 font-semibold">Referrer Bonus</th>
                <th className="py-3 px-4 font-semibold">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
                ["PG Certificate Program in Strategic Product Management", "₹ 9,000", "₹ 11,000"],
                ["Executive Program in Data Driven Product Management", "₹ 10,000", "₹ 10,000"],
                ["Executive Program in Product Management and Digital Transformation", "₹ 10,000", "₹ 10,000"],
                ["Executive Program in Product Management", "₹ 10,000", "₹ 10,000"],
                ["Advanced Certification in Product Management", "₹ 10,000", "₹ 10,000"],
                ["Executive Program in Product Management and Project Management", "₹ 10,000", "₹ 10,000"],
              ].map(([program, referrer, referee], index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4 flex items-center">
                    <span className="mr-2">🎓</span> {program}
                  </td>
                  <td className="py-3 px-4 text-center">{referrer}</td>
                  <td className="py-3 px-4 text-center">{referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  </div>
  );
};

export default ReferralBenefits;

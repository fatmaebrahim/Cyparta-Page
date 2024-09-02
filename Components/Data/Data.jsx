import React from 'react'

export default function Data({data}) {
  return (
    <div className="container mx-auto p-4 ">
            <div className="grid grid-cols-2 g   w-[768px] ">
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px] ">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  First Name
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  {data.first_name}
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Last Name
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  {data.last_name}
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Mobile Number
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  {data.phone}
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Email Address
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  {data.email}
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Date of Birth
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [Date of Birth]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Marital Status
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [Marital Status]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Gender
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [Gender]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Nationality
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [Nationality]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Address
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [Address]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  City
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [City]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  State
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [State]
                </p>
              </div>
              <div className=" border-b-[1px] w-[374px] h-[61px] my-[10px]">
                <label className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px]">
                  Zip Code
                </label>
                <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                  [Zip Code]
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 w-[917px]">
                <div className=" border-b-[1px] w-[261px] h-[61px] my-[10px]">
                  <label className="text-[#A2A1A8] font-normal font-lexend text-[14px] leading-[22px]">
                    Work's Hours
                  </label>
                  <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                    [Work Hours]
                  </p>
                </div>
                <div className=" border-b-[1px] w-[261px] h-[61px] my-[10px]">
                  <label className="text-[#A2A1A8] font-normal font-lexend text-[14px] leading-[22px]">
                    Salary/hour
                  </label>
                  <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                    [Salary per Hour]
                  </p>
                </div>
                <div className=" border-b-[1px] w-[261px] h-[61px] my-[10px]">
                  <label className="text-[#EE232F] font-normal font-lexend text-[14px] leading-[22px]">
                    Total Salary
                  </label>
                  <p className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px]">
                    [Total Salary]
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

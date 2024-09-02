import React from "react";

export default function Editablefield({
  label,
  value,
  onChange, 
}) {
  return (
    <div className="border-b-[1px] w-[374px] h-[61px] my-[5px]">
      <label
        className="text-[#A2A1A8] font-light font-lexend text-[14px] leading-[22px] "
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-[#16151C] text-[16px] font-light font-lexend leading-[24px] w-full border-none focus:outline-none"
      />
    </div>
  );
}

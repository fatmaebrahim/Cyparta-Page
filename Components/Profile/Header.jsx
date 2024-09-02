"use client";
import Image from "next/image";
export default function Header({ email, firstname, lastname, position, image,onEditClick }) {
  return (
    <div className="absolute top-[186px] left-[412px] w-[942px] h-[131px] border-b-2">
      <div className=" w-[856px] flex flex-row">
        <div className="h-[100px] w-[100px] rounded-[10px] overflow-hidden">
          <Image
            src={image}
            alt="profile picture"
            width={100}
            height={100}
          />
        </div>
        <div className="w-fit h-[100px] ml-[16px]">
          <p className="h-[36px] text-[24px] font-lexend font-semibold text-[#242223] ">
            {firstname} {lastname}
          </p>
          <div className="flex flex-row h-[24px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
                stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 12.16V13.16C14 13.17 14 13.17 14 13.18C14 14.27 13.99 15.16 12 15.16C10.02 15.16 10 14.28 10 13.19V12.16C10 11.16 10 11.16 11 11.16H13C14 11.16 14 11.16 14 12.16Z"
                stroke="#16151C"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="ml-[10px] font-lexend text-[#16151C] text-[16px] font-light ">
              {position}
            </span>
          </div>
          <div className="flex flex-row h-[24px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#16151C"
                strokeWidth="1.5"
              />
              <path
                d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="ml-[10px] font-lexend text-[#16151C] text-[16px] font-light ">
              {email}
            </span>
          </div>
        </div>
        <button 
        onClick={onEditClick}
        className=" absolute right-[88px] bottom-[35px] w-[156px] h-[50px]  rounded-[10px]  bg-[#262626] text-white flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
             className="mr-[10px]"
          >
            <path
              d="M3 21H21M13.7844 5.31171C13.7844 5.31171 13.7844 6.94634 15.419 8.58096C17.0537 10.2156 18.6883 10.2156 18.6883 10.2156M7.31963 17.9881L10.7523 17.4977C11.2475 17.4269 11.7064 17.1975 12.06 16.8438L20.3229 8.58096C21.2257 7.67818 21.2257 6.21449 20.3229 5.31171L18.6883 3.67708C17.7855 2.77431 16.3218 2.77431 15.419 3.67708L7.15616 11.94C6.80248 12.2936 6.57305 12.7525 6.50231 13.2477L6.01193 16.6804C5.90295 17.4432 6.5568 18.097 7.31963 17.9881Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
             
            />
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Image from "next/image";
import Modal from "../Helper/Modal";
import Data from "../Data/Data";
import Spinner from "../Helper/Spinner";
import Editdata from "../Data/Editdata";

export default function Info() {
  const [data, setData] = useState({
    id: 1,
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    bio: null,
    is_superuser: false,
    is_staff: false,
    image:
      "https://sadakatcdn.cyparta.com/Cyparta_System/DefaultPhotos/default.jpg",
    cover:
      "https://sadakatcdn.cyparta.com/Cyparta_System/DefaultPhotos/default.jpg",
    message: "",
    status: 400,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("No token found. Please log in.");

          setModalOpen(true);

          return;
        }

        const response = await fetch(
          "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          
          if (response.status === 401) {
            
            setError(
              "Unauthorized access. Please check your token or log in again."
            );
          } else if (response.status === 403) {
            setError(
              "Access forbidden. You do not have permission to view this resource."
            );
          } else {
            const errorResult = await response.json();
            setError(errorResult.message || "An error occurred.");
          }
          throw new Error("Error in fetch");
        }

        const result = await response.json();
      
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const closeModal = () => {
    router.push("/");
    setModalOpen(false);
  };
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };
  
  return (
    <div>
      <div className="absolute top-[34px] left-[1202px] w-[145px] h-[60px] gap-[35px] flex flex-row">
        <button>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="50"
              height="50"
              rx="10"
              fill="#A2A1A8"
              fillOpacity="0.1"
            />
            <path
              d="M18.6796 21.794C19.0538 18.4909 21.7709 16 25 16C28.2291 16 30.9462 18.4909 31.3204 21.794L31.6652 24.8385C31.7509 25.595 32.0575 26.3069 32.5445 26.88C33.5779 28.0964 32.7392 30 31.1699 30H18.8301C17.2608 30 16.4221 28.0964 17.4555 26.88C17.9425 26.3069 18.2491 25.595 18.3348 24.8385L18.6796 21.794Z"
              stroke="#16151C"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M28 32C27.5633 33.1652 26.385 34 25 34C23.615 34 22.4367 33.1652 22 32"
              stroke="#16151C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="h-[60px] w-[60px] rounded-[50px] overflow-hidden border-1 border-[#EBEBEB]">
          <Image
            src={data.image}
            alt="profile picture"
            width={60}
            height={60}
          />
        </div>
      </div>

      <div className="absolute top-[132px] left-[412px] w-[224px] h-[25px] flex flex-row items-center gap-[5px]">
        <p className="font-inter text-[16px] font-semibold leading-[19.36px] text-[#242223]">
          Employees
        </p>

        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M9.375 6.25L15.625 12.5L9.375 18.75"
            stroke="#242223"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="font-inter text-[16px] font-semibold leading-[19.36px] text-[#242223]">
          Profile
        </p>
      </div>

      <Header
        email={data.email}
        firstname={data.first_name}
        lastname={data.last_name}
        position="UX/UI Designer"
        image={data.image}
        onEditClick={toggleEditMode}
      />

      <div className="w-[994px] h-[621px] top-[339px] left-[386px] bg-[#F8F8F8] absolute ">
        <Navbar />
        {error ? (
          <Modal isOpen={modalOpen} onClose={closeModal} message={error} />
        ) : loading ? (
          <Spinner />
        ) : isEditing ? (
          <Editdata
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            data={data}
            setData={setData}
            toggleEditMode={toggleEditMode}
          />
        ) : (
          <Data data={data} />
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Editablefield from "./Editablefield";

export default function Editdata({ data, isEditing, setIsEditing}) {
  const [firstName, setFirstName] = useState(data.first_name);
  const [lastName, setLastName] = useState(data.last_name);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [dob, setDob] = useState(data.dob);
  const [maritalStatus, setMaritalStatus] = useState(data.marital_status);
  const [gender, setGender] = useState(data.gender);
  const [nationality, setNationality] = useState(data.nationality);
  const [address, setAddress] = useState(data.address);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [zipCode, setZipCode] = useState(data.zip_code);
   
  const onSaveClick = () => {
    setIsEditing(false)
    //call the edit API to save the data
  };
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4 w-[768px]">
        <Editablefield
          label="First Name"
          value={firstName}
          onChange={setFirstName}
        />
        <Editablefield
          label="Last Name"
          value={lastName}
          onChange={setLastName}
        />
        <Editablefield
          label="Mobile Number"
          value={phone}
          onChange={setPhone}
        />
        <Editablefield
          label="Email Address"
          value={email}
          onChange={setEmail}
        />
        <Editablefield label="Date of Birth" value={dob} onChange={setDob} />
        <Editablefield
          label="Marital Status"
          value={maritalStatus}
          onChange={setMaritalStatus}
        />
        <Editablefield label="Gender" value={gender} onChange={setGender} />
        <Editablefield
          label="Nationality"
          value={nationality}
          onChange={setNationality}
        />
        <Editablefield label="Address" value={address} onChange={setAddress} />
        <Editablefield label="City" value={city} onChange={setCity} />
        <Editablefield label="State" value={state} onChange={setState} />
        <Editablefield label="Zip Code" value={zipCode} onChange={setZipCode} />

        <button 
       onClick={onSaveClick}
        className="  w-[156px] h-[50px]  rounded-[10px]  bg-[#EE232F] text-white flex items-center justify-center">
         Save
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";


const validateCountryCode = (countryCode: string) => {
  return countryCode.match(/^\+[0-9](?:[0-9]{0,2})$/);
}

const validatePhoneNumber = (phoneNumber: string) => {
  return phoneNumber.match(/^[0-9]*$/) && phoneNumber.length === 10;
}

export default function GetTheApp({ onClose, onSubmit }: { onClose: () => void, onSubmit: (phoneNumber: string) => void }) {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="relative z-50 fixed flex items-center justify-center rounded-[25px] shadow-xl w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-white">
      <p className="absolute top-[10px] right-[20px] text-gray-500 text-[24px] font-semibold" onClick={onClose}>x</p>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-black text-[24px] md:text-[32px] lg:text-[40px] mb-[10px] font-bold">Get the StellarPay App</h1>
        <p className="text-black text-[16px] md:text-[18px] lg:text-[20px]">Scan the QR code to download the app</p>
        <div className="flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ">
          <Image src="/images/qr-code-2.png" alt="QR Code" className="w-full h-full" width={400} height={400} />
        </div>
        <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] mb-[25px]">or get a download link via SMS</p>
        <div className="flex flex-row items-center justify-center">
          <input type="text" placeholder="+1" className="bg-[#e2edff] w-[60px] h-[40px] md:w-[60px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[16px] md:text-[18px] lg:text-[20px] mr-[10px]" onChange={(e) => setCountryCode(e.target.value)} maxLength={4} />
          <input type="text" placeholder="Mobile number" className="bg-[#e2edff] w-[150px] h-[40px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[16px] md:text-[18px] lg:text-[20px] mr-[10px]" onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} />
          <button className="bg-[#aacaff] hover:bg-[#aacaff] text-black font-bold text-[24px] px-4 h-[40px] md:h-[50px] lg:h-[60px] rounded-full" onClick={() => {
            if (validateCountryCode(countryCode) && validatePhoneNumber(phoneNumber)) {
              alert("Link sent to " + countryCode + " "+ phoneNumber);
              onSubmit(countryCode + phoneNumber);
              setCountryCode("+1");
              setPhoneNumber("");
              onClose();
            } else {
              alert("Please enter a valid country code and phone number");
            }
          }}>→</button>
        </div>
      </div>
    </div>
    </div>
  );
}
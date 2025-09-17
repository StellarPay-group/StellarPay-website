"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { sendAppLink, validatePhoneNumber, validateCountryCode } from "@/lib/message";
import { getUrlForDevice } from "@/lib/device";


export default function SignUpPage() {

      const [showPopup, setShowPopup] = useState(false);    
      const [countryCode, setCountryCode] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');

      return (
        <div className="flex flex-col min-h-screen">
          <header className="flex flex-row justify-between items-center p-2">
            <Link href="/">
              <div className="ml-[10px] mt-[5px] hidden md:block text-xl md:text-[24px] font-bold text-[#191c1f]">StellarPay</div>
            </Link>
          </header>
    
    
    
    
    
          <main className="flex flex-col justify-center items-center">
    
          <Image src="/images/stellarbanking_logo.png" alt="StellarPay" width={100} height={100} className="mt-[20px] md:mt-[-10px] mx-auto" />
            <div className="flex flex-col md:flex-row justify-center items-center">
    
            <div className="relative fixed flex items-center justify-center rounded-[25px] mt-[10px] bg-white">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-black text-[24px] md:text-[32px] lg:text-[40px] mb-[10px] font-bold">Get the StellarPay App</h1>
        <p className="text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]">Scan the QR code to download the app</p>
        <div className="mt-[20px] mb-[20px]  flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <Image src="/images/frame.png" alt="QR Code" className="w-full h-full border-2 border-gray-400 rounded-2xl shadow-xl" width={400} height={400} />
        </div>
        <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] mb-[25px]">or get a download link via SMS</p>
        <div className="flex flex-row items-center justify-center">
          <input inputMode="tel" type="tel" placeholder="+1" className="bg-gray-100 w-[60px] h-[40px] md:w-[60px] md:h-[50px] lg:w-[80px] lg:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[16px] md:text-[18px] lg:text-[20px] mr-[10px]" onChange={(e) => setCountryCode(e.target.value)} maxLength={4} />
          <input inputMode="numeric" type="numeric" placeholder="Mobile number" className="bg-gray-100 w-[150px] h-[40px] md:w-[200px] md:h-[50px] lg:w-[300px] lg:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[16px] md:text-[18px] lg:text-[20px] mr-[10px]" onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} />
          <button className="bg-[#0065ff] hover:bg-[#0065ff] text-black font-bold text-[25px] h-[40px] w-[40px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px] rounded-full" onClick={async () => {
            if (validateCountryCode(countryCode) && validatePhoneNumber(phoneNumber)) {
              setCountryCode(countryCode);
              setPhoneNumber("");
              await sendAppLink(countryCode, phoneNumber, 'sms');
            } else {
              alert("Please enter a valid country code and phone number");
            }
          }}><p className='text-white'>&gt;</p></button>
        </div>
      </div>
    </div>
    
            </div>
          </main>
    
    
          <div className="fixed flex flex-row left-[60px] bottom-[30px]">
            <p className="hidden md:block mr-[30px] text-sm md:text-md">English (United States)</p>
            <Link href="/privacy-policy" className="hidden md:block text-[#000000] underline hover:no-underline text-sm md:text-md">
              Privacy policy
            </Link>
          </div>
    
    
        </div>
      );
} 
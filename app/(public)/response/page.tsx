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
        <h1 className="text-black text-[16px] md:text-[24px] lg:text-[32px] mb-[10px] font-bold">We're waiting for your response</h1>
        <p className="max-w-[400px] text-center text-gray-700 text-[12px] md:text-[15px] lg:text-[18px]">Approve this login by opening the StellarPay app and tapping "Yes, it's me"
        </p>
        <div className="mt-[20px] mb-[20px] flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <Image src="/images/response.png" alt="QR Code" className="w-full h-full rounded-2xl" width={400} height={400} />
        </div>
        <div className="flex flex-row items-center justify-center">
          <button className="mb-[100px] md:mb-[0px] bg-white hover:bg-gray-100 text-black font-bold text-[12px] md:text-[18px] h-[40px] md:h-[60px] w-[270px] md:w-[370px] lg:w-[450px] rounded-[20px] border-1 border-gray-300" onClick={async () => {
          }}><p className='text-black font-normal'>I haven't received an approval request</p></button>
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
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
        <h1 className="text-black text-[24px] md:text-[32px] lg:text-[40px] mb-[10px] font-bold">Check your text</h1>
        <p className="max-w-[450px] text-center text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]">Follow the link in the email we sent to (phone number). The text message can take up to 1 minute to arrive.

        </p>
        <div className="mt-[20px] mb-[20px] flex items-center justify-center w-[300px] h-[225px] md:w-[400px] md:h-[300px]">
          <Image src="/images/text.png" alt="QR Code" className="w-full h-full rounded-2xl" width={400} height={400} />
        </div>
        <div className="flex flex-row items-center justify-center">
          <button className="bg-white hover:bg-gray-100 text-black font-bold text-[18px] md:text-[25px] h-[40px] md:h-[60px] w-[270px] md:w-[350px] lg:w-[450px] rounded-[20px] border-1 border-gray-300" onClick={async () => {
          }}><p className='text-black font-normal'>Resend text</p></button>
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
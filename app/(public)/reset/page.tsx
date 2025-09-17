"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { sendAppLink, validatePhoneNumber, validateCountryCode } from "@/lib/message";
import { getUrlForDevice } from "@/lib/device";

export default function SignUpPage() {
      const [email, setEmail] = useState('');

      return (
        <div className="flex flex-col min-h-screen">
          <header className="flex flex-row justify-between items-center p-2">
            <Link href="/">
              <div className="ml-[10px] mt-[5px] hidden md:block text-xl md:text-[24px] font-bold text-[#191c1f]">StellarPay</div>
            </Link>
          </header>
    
    
    
    
    
          <main className="flex flex-col justify-center items-center">
    
          <Image src="/images/stellarbanking_logo.png" alt="StellarPay" width={100} height={100} className="mt-[20px] md:mt-[50px] mx-auto" />
            <div className="flex flex-col md:flex-row justify-center items-center">
    
            <div className="relative fixed flex items-center justify-center rounded-[25px] mt-[10px] bg-white">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-black text-[24px] md:text-[32px] lg:text-[40px] mb-[10px] font-bold">Reset password</h1>
        <p className="max-w-[300px] md:max-w-[450px] text-center text-gray-700 text-[12px] md:text-[16px] lg:text-[18px]">Just enter the email address you registered with and we’ll send you a link to reset your password.

        </p>
        <div className="flex flex-col items-center justify-center">
        <input placeholder="Email address" className="mt-[40px] mb-[40px] w-[300px] md:w-[450px] h-[50px] md:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px]" onChange={(e) => {setEmail(e.target.value)}} maxLength={10} />
          <button className="bg-[#0065ff] hover:bg-[#0065ff] text-white font-bold text-[16px] md:text-[18px] h-[50px] md:h-[60px] w-[270px] md:w-[350px] lg:w-[400px] rounded-[15px] border-1 border-gray-300" onClick={async () => {
          }}><p className='text-white font-semibold'>{email}Send password reset link</p></button>
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
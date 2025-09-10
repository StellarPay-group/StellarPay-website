"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { sendAppLink } from "@/lib/message";


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
    
    
    
    
    
          <main className="flex flex-col justify-center items-center mb-[50px]">
    
          <Image src="/images/stellarbanking_logo.png" alt="StellarPay" width={100} height={100} className="mt-[20px] md:mt-[0px] mx-auto mb-[20px]" />
            <div className="flex flex-col md:flex-row justify-center items-center lg:translate-x-[-24px]">
              <div className="flex flex-col max-w-lg mr-[0px] lg:mr-[50px]">
                <h1 className="text-4xl font-semibold mb-4 text-center md:text-start">Welcome</h1>
                <div className="max-w-md">
                <p className="text-md text-gray-700 mb-[40px] text-center md:text-start mx-[30px] md:mx-[0px]">Enter your phone number</p>
                </div>
                <div className="flex flex-row mx-auto md:mx-[0px]">
                  <input inputMode="tel" type="tel" placeholder="+1" className="mb-[20px] w-[60px] h-[50px] md:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px] mr-[10px] md:mr-[20px]" onChange={(e) => {setCountryCode(e.target.value)}} maxLength={4} />
                  <input inputMode="numeric" type="number" placeholder="Mobile number" className="w-[228px] md:w-[340px] h-[50px] md:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px]" onChange={(e) => {setPhoneNumber(e.target.value)}} maxLength={10} />
                </div>
                <a className='mx-auto md:mx-[0px]' onClick={() => sendAppLink(countryCode, phoneNumber, 'sms')}>
                  <button className="bg-[#000000] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[50px] md:h-[60px] w-[300px] md:w-[420px] text-[16px] md:text-[20px] mt-[5px]">Continue</button>
                </a>
                <p className="text-center text-md text-[#191c1f] mt-[20px] mr-[0px] md:mr-[20px]">OR</p>
                <div className="flex flex-col md:flex-row justify-between items-center border-gray mr-[0px] md:mr-[20px]">
                <a onClick={() => setShowPopup(true)}>
                    <button className="mt-[20px] w-[300px] md:w-[210px] h-[50px] md:h-[60px] rounded-[10px] border 
                  border-gray-300 p-[10px] text-[18px] mr-[0px] md:mr-[10px]">
                    <div className="flex flex-row items-center justify-center">
                      <Image src="/images/GoogleLogo.png" alt="Google" width={20} height={20} />
                      <p className="text-[16px] ml-[8px]">Sign up with Google</p>
                    </div>
                  </button>
                  </a>
                  <a onClick={() => setShowPopup(true)}>
                    <button className="mt-[20px] w-[300px] md:w-[200px] h-[50px] md:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[18px] mr-[0px] md:mr-[7px]">
                      <div className="flex flex-row items-center justify-center">
                        <Image src="/images/AppleLogo.png" alt="Apple" width={20} height={20} />
                        <p className="text-[16px] ml-[10px]">Sign up with Apple</p>
                      </div>
                    </button>
                  </a>
                </div>
                <p className="mt-[20px] text-center mr-[0px] md:mr-[20px] text-md">Already have an account? </p>
                <Link href="/signin" className='mx-auto md:mx-[0px]'>
                  <button className="mt-[20px] bg-[#000000] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[50px] md:h-[60px] w-[300px] md:w-[420px] text-[16px] md:text-[20px]">Log in</button>
                </Link>
                <Link href="/privacy-policy" className="block md:hidden text-[#000000] underline hover:no-underline text-sm text-center mt-[10px]">
              Privacy policy
            </Link>
              </div>
    
              <div className="hidden lg:block flex flex-col justify-center items-center ml-[100px]">
                <Image src="/images/qr-code-09-25.png" alt="QR Code" width={200} height={200} className="mb-[20px] border-gray-700 border-1 rounded-2xl shadow-xl ml-[25px]" />
                <p className="text-center text-lg font-bold text-[#191c1f] mt-[20px]">Sign up with QR code</p>
                <p className="text-center text-md text-gray-700 mt-[20px] w-[250px]">Scan this code with your phone camera to log in instantly</p>
              </div>
    
            </div>
          </main>
    
    
          <div className="fixed flex flex-row left-[60px] bottom-[30px]">
            <p className="hidden md:block mr-[30px] text-sm md:text-md">English (United States)</p>
            <Link href="/privacy-policy" className="hidden md:block text-[#000000] underline hover:no-underline text-sm md:text-md">
              Privacy policy
            </Link>
          </div>
    
          {showPopup && <GetTheApp onClose={() => setShowPopup(false)} onSubmit={() => {}} />}
    
        </div>
      );
} 
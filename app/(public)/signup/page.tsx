"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";

const validateCountryCode = (countryCode: string) => {
          return countryCode.match(/^\+[0-9](?:[0-9]{0,2})$/);
}

const validatePhoneNumber = (phoneNumber: string) => {
          return phoneNumber.match(/^[0-9]*$/) && phoneNumber.length === 10;
}


export default function SignUpPage() {

      const [showPopup, setShowPopup] = useState(false);    

          return (
            <div className="flex flex-col min-h-screen">
            <header className="flex flex-row justify-between items-center p-2">
              <Link href="/">
                <Button variant="ghost" className="text-xl md:text-[24px] font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
            </header>
      
      
      
      
      
            <main className="flex flex-col justify-center items-center mb-[50px]">
      
            <Image src="/images/stellarbanking_logo.png" alt="StellarPay" width={100} height={100} className="mx-auto mb-[20px]" />
              <div className="flex flex-col md:flex-row justify-center items-center md:translate-x-[-24px]">
                <div className="flex flex-col max-w-lg mr-[50px]">
                  <h1 className="text-4xl font-semibold mb-4">Welcome</h1>
                  <div className="max-w-md">
                  <p className="text-md text-gray-700 mb-[40px]">Enter your phone number</p>
                  </div>
                  <div className="flex flex-row">
                    <input type="text" placeholder="+1" className="mb-[20px] w-[60px] lg:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px] mr-[20px]" onChange={(e) => { }} maxLength={4} />
                    <input type="text" placeholder="Mobile number" className="w-[340px] h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px]" onChange={(e) => { }} maxLength={10} />
                  </div>
                  <a onClick={() => setShowPopup(true)}>
                    <button className="bg-[#000000] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[60px] w-[420px] text-[20px] mt-[5px]">Continue</button>
                    </a>
                  <p className="text-center text-md text-[#191c1f] mt-[20px] mr-[20px]">OR</p>
                  <div className="flex flex-row justify-between items-center border-gray mr-[20px]">
                    <a onClick={() => setShowPopup(true)}>
                      <button className="mt-[20px] w-[200px] h-[60px] rounded-[10px] border 
                    border-gray-300 p-[10px] text-[18px] mr-[10px]">
                      <div className="flex flex-row items-center">
                        <Image src="/images/GoogleLogo.png" alt="Google" width={20} height={20} />
                        <p className="text-[16px] ml-[6px]">Sign up with Google</p>
                      </div>
                    </button>
                    </a>
                    <a onClick={() => setShowPopup(true)}>
                      <button className="mt-[20px] w-[200px] h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[18px] mr-[10px]">
                        <div className="flex flex-row items-center">
                          <Image src="/images/AppleLogo.png" alt="Apple" width={20} height={20} />
                          <p className="text-[16px] ml-[10px]">Sign up with Apple</p>
                        </div>
                      </button>
                    </a>
                  </div>
                  <p className="mt-[20px] text-center mr-[20px] text-md">Already have an account? </p>
                  <Link href="/signin">
                    <button className="mt-[20px] bg-[#000000] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[60px] w-[420px] text-[20px]">Log in</button>
                  </Link>
                </div>
      
                <div className="hidden md:block flex flex-col justify-center items-center ml-[100px]">
                  <Image src="/images/qr-code-2.png" alt="QR Code" width={200} height={200} className="mb-[20px] border-gray-700 border-1 rounded-2xl shadow-xl ml-[25px]" />
                  <p className="text-center text-lg font-bold text-[#191c1f] mt-[20px]">Sign up with QR code</p>
                  <p className="text-center text-md text-gray-700 mt-[20px] w-[250px]">Scan this code with your phone camera to sign up instantly</p>
                </div>
      
              </div>
            </main>
      
      
            <div className="fixed flex flex-row left-[60px] bottom-[30px]">
              <p className="mr-[30px] text-sm md:text-md">English (United States)</p>
              <Link href="/privacy-policy" className="block text-[#000000] underline hover:no-underline text-sm md:text-md">
                Privacy policy
              </Link>
            </div>

            {showPopup && <GetTheApp onClose={() => setShowPopup(false)} onSubmit={() => {}} />}
      
          </div>
          );
} 
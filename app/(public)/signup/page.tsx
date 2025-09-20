"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { sendAppLink } from "@/lib/message";
import { getUrlForDevice } from "@/lib/device";
import { useAllCountry_Phone } from "@/lib/country_query";
import { Country_Phone } from "@/lib/country.types";
import { useMemo } from "react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { sendLoginLink } from "@/lib/message";
export default function SignUpPage() {

  const {data: countries, isLoading} = useAllCountry_Phone();
  const [showPopup, setShowPopup] = useState(false);    
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState<Country_Phone | null>({ code: 'US', flag: 'https://flagcdn.com/w320/us.png', areaCode: '+1' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return countries;
  
    const lowerQuery = query.toLowerCase();
  
    return countries.filter(
      (c) =>
        c.code.toLowerCase().includes(lowerQuery) ||
        c.areaCode?.includes(lowerQuery)
    );
  }, [countries, query]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-row justify-between items-center p-2">
        <Link href="/">
        <Link href="/">
              <div className="ml-[10px] mt-[5px] hidden md:block text-xl md:text-[24px] font-bold text-[#191c1f]">StellarPay</div>
            </Link>
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
            <div className="flex flex-row items-center mx-auto md:mx-0">
            <Combobox value={countryCode} onChange={(value) => value && setCountryCode(value)}>
  <div className="relative inline-block">
    {/* Input + Button */}
    <div className="flex flex-row items-center justify-between">
      <div className='px-[10px] flex flex-row border border-gray-300 h-[50px] md:h-[60px] w-[115px] md:w-[135px] rounded-md'>
      <img
            src={countryCode?.flag || ''}
            alt={`flag`}
            className="my-auto w-6 h-4 mr-2 object-cover"
          />
      <ComboboxInput
        className={`my-auto w-[55px] md:w-[65px] h-[40px] md:h-[50px] bg-transparent p-2 text-black placeholder:text-[18px] md:placeholder:text-[20px] font-normal text-center ${
          isFocused ? 'placeholder:text-gray-300' : 'placeholder:text-black'
        }`}
        defaultValue={countryCode?.areaCode || '+1'}
        placeholder={countryCode?.areaCode || '+1'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setQuery(event.target.value)}
      />
            <ComboboxButton className="ml-0">
        <p className="text-gray-300 text-[10px] md:text-[20px] font-bold">▼</p>
      </ComboboxButton>
      </div>

    </div>

    {/* Dropdown positioned directly under input */}
    <ComboboxOptions className="absolute top-full left-0 mt-1 w-[150px] max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
      {filtered.map((item) => (
        <ComboboxOption
          key={item.code}
          value={item}
          className="flex flex-row items-center px-3 py-2 text-black text-[14px] hover:bg-gray-100 cursor-pointer"
        >
          <img
            src={item.flag || ''}
            alt={`${item.code} flag`}
            className="w-6 h-4 mr-2 object-cover"
          />
          {item.areaCode || ''} ({item.code})
        </ComboboxOption>
      ))}
    </ComboboxOptions>
  </div>
</Combobox>

              <input inputMode="numeric" type="numeric" placeholder="Mobile number" className="ml-[8px] w-[175px] md:w-[277px] h-[50px] md:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[18px] md:text-[20px]" onChange={(e) => {setPhoneNumber(e.target.value)}} maxLength={10} />
            </div>
            <div className='mx-auto md:mx-[0px]' onClick={async () => {
              const codeToUse = countryCode?.areaCode || '';
              const sid = await sendAppLink(codeToUse, phoneNumber, 'sms');
              if (sid !== -3) {
                window.open('/response', '_self')
              }
              }}>
              <button className="bg-[#000000] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[50px] md:h-[60px] w-[300px] md:w-[420px] text-[16px] md:text-[20px] mt-[10px]">Continue</button>
            </div>
            <p className="text-center text-md text-[#191c1f] mt-[20px] mr-[0px] md:mr-[20px]">OR</p>
            <div className="flex flex-col md:flex-row justify-between items-center border-gray mr-[0px] md:mr-[20px]">
            <div onClick={() => getUrlForDevice(() => {setShowPopup(true)})}>
                <button className="mt-[20px] w-[300px] md:w-[200px] h-[50px] md:h-[60px] rounded-[10px] border 
              border-gray-300 p-[10px] text-[18px] mr-[0px] md:mr-[10px]">
                <div className="flex flex-row items-center justify-center">
                  <Image src="/images/GoogleLogo.png" alt="Google" width={20} height={20} />
                  <p className="text-[16px] ml-[5px]">Sign up with Google</p>
                </div>
              </button>
              </div>
              <div onClick={() => getUrlForDevice(() => {setShowPopup(true)})}>
                <button className="mt-[20px] w-[300px] md:w-[200px] h-[50px] md:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[18px] mr-[0px] md:mr-[10px]">
                  <div className="flex flex-row items-center justify-center">
                    <Image src="/images/AppleLogo.png" alt="Apple" width={20} height={20} />
                    <p className="text-[16px] ml-[10px]">Sign up with Apple</p>
                  </div>
                </button>
              </div>
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
            <Image src="/images/frame.png" alt="QR Code" width={200} height={200} className="mb-[20px] border-gray-700 border-1 rounded-2xl shadow-xl ml-[25px]" />
            <p className="text-center text-lg font-bold text-[#191c1f] mt-[20px]">Log in with QR code</p>
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
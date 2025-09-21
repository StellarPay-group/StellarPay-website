"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMemo, useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { sendAppLink, validatePhoneNumber, validateCountryCode } from "@/lib/message";
import { getUrlForDevice } from "@/lib/device";
import { Country_Phone, currencies } from "@/lib/country.types";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useAllCountry_List, useAllCountry_Phone } from '@/lib/country_query';


export default function SignUpPage() {

      const [showPopup, setShowPopup] = useState(false);    
      const {data: countries, isLoading} = useAllCountry_Phone();
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
        <div className="border border-gray-300 rounded-xl border-2 flex flex-row items-center justify-center mr-[0px] md:mr-[10px]">
        <Combobox value={countryCode} onChange={(value) => value && setCountryCode(value)}>
  <div className="relative inline-block">
    {/* Input + Button */}
    <div className="flex flex-row items-center justify-between">
      <div className='px-[10px] flex flex-row h-[40px] md:h-[50px] lg:h-[60px] w-[105px] md:w-[125px] mr-[0px] '>
      <img
            src={countryCode?.flag || ''}
            alt={`flag`}
            className="my-auto w-6 h-4 mr-2 object-cover"
          />
                      <ComboboxButton className="ml-0">
        <p className="text-black text-[8px] md:text-[12px] font-bold">▼</p>
      </ComboboxButton>
      <ComboboxInput
        className={`my-auto w-[50px] md:w-[55px] h-[30px] md:h-[50px] bg-transparent pr-1 text-black placeholder:text-[16px] md:placeholder:text-[18px] font-normal text-right ${
          isFocused ? 'placeholder:text-gray-400' : 'placeholder:text-black'
        }`}
        defaultValue={countryCode?.areaCode || '+1'}
        placeholder={countryCode?.areaCode || '+1'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setQuery(event.target.value)}
      />
      </div>

    </div>

    {/* Dropdown positioned directly under input */}
    <ComboboxOptions className="absolute bottom-full left-0 mt-1 w-[150px] max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
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
          <input inputMode="numeric" type="numeric" placeholder="Phone number" className="w-[130px] h-[30px] md:w-[200px] md:h-[40px] lg:w-[240px] lg:h-[50px] p-[5px] text-[16px] md:text-[18px] lg:text-[18px] mr-[10px]" onChange={(e) => setPhoneNumber(e.target.value)} maxLength={12} />
          </div>
          <button className="bg-[#0065ff] hover:bg-[#0065ff] ml-[4px] md:ml-[10px] text-black font-bold h-[35px] w-[35px] md:h-[45px] md:w-[90px] lg:h-[55px] lg:w-[130px] rounded-full" onClick={async () => {
            if (countryCode && countryCode.areaCode) {
              await sendAppLink(countryCode?.areaCode, phoneNumber, 'sms');
            }
          }}><p className='hidden md:block text-[14px] md:text-[20px] text-white'>Send</p>
          <p className='block md:hidden text-[14px] md:text-[20px] text-white'>&gt;</p></button>
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
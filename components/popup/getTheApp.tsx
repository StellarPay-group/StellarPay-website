"use client";

import Image from "next/image";
import { useState } from "react";
import { sendAppLink, validateCountryCode, validatePhoneNumber } from "@/lib/message";
import { useAllCountry_List, useAllCountry_Phone } from '@/lib/country_query';
import { useMemo } from "react";
import { Country_Phone, currencies } from "@/lib/country.types";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'


export default function GetTheApp({ onClose, onSubmit }: { onClose: () => void, onSubmit: (phoneNumber: string) => void }) {
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
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="relative z-50 fixed flex items-center justify-center rounded-[25px] shadow-xl w-[380px] h-[400px] md:w-[480px] md:h-[600px] lg:w-[580px] lg:h-[700px] bg-white">
      <p className="absolute top-[10px] right-[20px] text-gray-500 text-[24px] font-semibold" onClick={onClose}>x</p>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-black text-[24px] md:text-[32px] lg:text-[40px] mb-[10px] font-bold">Get the StellarPay App</h1>
        <p className="text-black text-[16px] md:text-[18px] lg:text-[20px]">Scan the QR code to download the app</p>
        <div className="flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ">
          <Image src="/images/frame.png" alt="QR Code" className="w-full h-full" width={400} height={400} />
        </div>
        <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] mb-[25px]">or get a download link via SMS</p>
        <div className="flex flex-row items-center justify-center">
        <div className="border border-gray-300 rounded-xl border-2 flex flex-row items-center justify-center">
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
        className={`my-auto w-[50px] md:w-[55px] h-[30px] md:h-[50px] bg-transparent pr-1 text-black placeholder:text-[18px] md:placeholder:text-[18px] font-normal text-right ${
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
          <input inputMode="numeric" type="numeric" placeholder="Mobile number" className="w-[150px] h-[30px] md:w-[180px] md:h-[40px] lg:w-[180px] lg:h-[50px] p-[5px] text-[16px] md:text-[18px] lg:text-[18px] mr-[10px]" onChange={(e) => setPhoneNumber(e.target.value)} maxLength={12} />
          </div>
          <button className="bg-[#0065ff] hover:bg-[#0065ff] ml-[10px] text-black font-bold h-[40px] w-[70px] md:h-[50px] md:w-[90px] lg:h-[60px] lg:w-[130px] rounded-full" onClick={async () => {
            if (countryCode && countryCode.areaCode) {
              await sendAppLink(countryCode?.areaCode, phoneNumber, 'sms');
            }
          }}><p className='text-[14px] md:text-[20px] text-white'>Send</p></button>
        </div>
      </div>
    </div>
    </div>
  );
}
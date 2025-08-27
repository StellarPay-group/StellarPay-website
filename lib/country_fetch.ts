import { Country_Phone, Country_List, Currency, Country } from './country.types';
import axios from 'axios';

export async function fetchCountryCodes(): Promise<string[]> {
  try {
    const res = await axios.get('https://restcountries.com/v3.1/all?fields=cca2');
    const data = res.data;

    const codes = data
      .map((c: { cca2: string }) => c.cca2?.toUpperCase())
      .filter(Boolean)
      .sort(); // Sort alphabetically

    return codes;
  } catch (error) {
    console.error('Failed to fetch country codes:', error);
    return [];
  }
}

export async function fetchCountryName(code: Country["code"]): Promise<Country["name"] | null> {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}?fields=name`);
    const data = res.data;

    return data?.name?.common ?? null;
  } catch (error) {
    console.error(`Failed to fetch country name for code "${code}"`, error);
    return null;
  }
}

export async function fetchCountryCurrency(code: Country["code"]): Promise<Currency | null> {
  if (!code) return null;

  try {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}?fields=currencies`);
    const data = res.data;

    const currencies = data?.currencies;
    const codeKey = currencies ? Object.keys(currencies)[0] : null;
    const symbol = codeKey ? currencies[codeKey]?.symbol || '' : '';

    return codeKey ? { code: codeKey, symbol } : null;
  } catch (error) {
    console.error(`Failed to fetch currency for country code "${code}"`, error);
    return null;
  }
}

export const getCountryFlag = (code: Country["code"]): string => `https://flagcdn.com/w320/${code.toLowerCase()}.png`;


export async function fetchCountry_List(code: Country["code"]): Promise<Country_List | null> {
  const name = await fetchCountryName(code);
  const flag = getCountryFlag(code);
  return { code, name, flag };
}
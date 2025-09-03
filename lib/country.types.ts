export type Currency = { code: string; symbol: string };
export type CurrencyListOption = { code: string, display_code: string, name: string }
export type Country = { name: string | null; flag: string | null; areaCode: string | null; code: string; currency: Currency | null };
export type Country_List = { name: Country["name"] | null; flag: Country["flag"] | null; code: Country["code"] };
export type Country_Phone = { flag: Country["flag"] | null; areaCode: Country["areaCode"] | null; code: Country["code"] };

export const CountryKeys_fetch: (keyof Omit<Country, 'flag' | 'areaCode'>)[] = ['name', 'code', 'currency'];

export const currencies: CurrencyListOption[] = [
          { code: "USD", display_code: "USD", name: "United States Dollar" },
          { code: "EUR", display_code: "EUR", name: "Euro" },
          { code: "GBP", display_code: "GBP", name: "British Pound Sterling" },
          { code: "AUD", display_code: "AUD", name: "Australian Dollar" },
          { code: "CAD", display_code: "CAD", name: "Canadian Dollar" },
          { code: "JPY", display_code: "JPY", name: "Japanese Yen" },
          { code: "CHF", display_code: "CHF", name: "Swiss Franc" },
          { code: "INR", display_code: "INR", name: "Indian Rupee" },
          { code: "XOF", display_code: "XOF", name: "West Africa" },
          { code: "XAF", display_code: "FCFA", name: "Central Africa" }
        ];
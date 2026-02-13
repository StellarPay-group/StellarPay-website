export type Currency = { code: string; symbol: string };
export type AreaCode = { root: string };
export type CurrencyListOption = { code: string; display_code: string; name: string; rate: number; flag?: string; country: string }
export type Country = { name: string | null; flag: string | null; areaCode: string | null; code: string; currency: Currency | null };
export type Country_List = { name: Country["name"] | null; flag: Country["flag"] | null; code: Country["code"] };
export type Country_Phone = { flag: Country["flag"] | null; areaCode: Country["areaCode"] | null; code: Country["code"] };

export const CountryKeys_fetch: (keyof Omit<Country, 'flag' | 'areaCode'>)[] = ['name', 'code', 'currency'];

export const currencies: CurrencyListOption[] = [
          { code: "USD", display_code: "USD", name: "United States Dollar", rate: 1.00, flag: 'https://flagcdn.com/w320/us.png', country: 'US' },
          { code: "EUR", display_code: "EUR", name: "Euro", rate: 0.856181, flag: 'https://flagcdn.com/w320/fr.png', country: 'FR' },
          { code: "GBP", display_code: "GBP", name: "British Pound Sterling", rate: 0.74196, flag: 'https://flagcdn.com/w320/gb.png', country: 'GB' },
          { code: "AUD", display_code: "AUD", name: "Australian Dollar", rate: 1.529254, flag: 'https://flagcdn.com/w320/au.png', country: 'AU' },
          { code: "CAD", display_code: "CAD", name: "Canadian Dollar", rate: 1.376986, flag: 'https://flagcdn.com/w320/ca.png', country: 'CA' },
          { code: "JPY", display_code: "JPY", name: "Japanese Yen", rate: 147.346083, flag: 'https://flagcdn.com/w320/jp.png', country: 'JP' },
          { code: "CHF", display_code: "CHF", name: "Swiss Franc", rate: 0.801354, flag: 'https://flagcdn.com/w320/ch.png', country: 'CH' },
          { code: "INR", display_code: "INR", name: "Indian Rupee", rate: 87.272232, flag: 'https://flagcdn.com/w320/in.png', country: 'IN' },
          { code: "XOF", display_code: "XOF", name: "West Africa", rate: 557.50, flag: 'https://flagcdn.com/w320/gh.png', country: 'GH' },
          { code: "XAF", display_code: "FCFA", name: "Central Africa", rate: 557.50, flag: 'https://flagcdn.com/w320/cm.png', country: 'CM' }
        ];

export function getRateForCurrency(code: string): number {
  for (let i = 0; i < currencies.length; i++) {
    if (currencies[i].code === code || currencies[i].display_code === code) {
      return currencies[i].rate;
    }
  }
  return -1.00;
}

export function convertLocal(from: string, to: string, amount: number): number {
  const fromRate = getRateForCurrency(from);
  const toRate = getRateForCurrency(to);
  if (fromRate <= 0.00 || toRate <= 0.00) {
    return 0.00
  }
  return (amount / fromRate) * toRate
}

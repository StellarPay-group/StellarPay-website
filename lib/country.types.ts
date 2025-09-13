export type Currency = { code: string; symbol: string };
export type CurrencyListOption = { code: string, display_code: string, name: string, rate: number }
export type Country = { name: string | null; flag: string | null; areaCode: string | null; code: string; currency: Currency | null };
export type Country_List = { name: Country["name"] | null; flag: Country["flag"] | null; code: Country["code"] };
export type Country_Phone = { flag: Country["flag"] | null; areaCode: Country["areaCode"] | null; code: Country["code"] };

export const CountryKeys_fetch: (keyof Omit<Country, 'flag' | 'areaCode'>)[] = ['name', 'code', 'currency'];

export const currencies: CurrencyListOption[] = [
          { code: "USD", display_code: "USD", name: "United States Dollar", rate: 1.00 },
          { code: "EUR", display_code: "EUR", name: "Euro", rate: 0.856181 },
          { code: "GBP", display_code: "GBP", name: "British Pound Sterling", rate: 0.74196 },
          { code: "AUD", display_code: "AUD", name: "Australian Dollar", rate: 1.529254 },
          { code: "CAD", display_code: "CAD", name: "Canadian Dollar", rate: 1.376986 },
          { code: "JPY", display_code: "JPY", name: "Japanese Yen", rate: 147.346083 },
          { code: "CHF", display_code: "CHF", name: "Swiss Franc", rate: 0.801354 },
          { code: "INR", display_code: "INR", name: "Indian Rupee", rate: 87.272232 },
          { code: "XOF", display_code: "XOF", name: "West Africa", rate: 557.50 },
          { code: "XAF", display_code: "FCFA", name: "Central Africa", rate: 557.50 }
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
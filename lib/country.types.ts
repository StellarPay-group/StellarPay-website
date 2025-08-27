export type Currency = { code: string; symbol: string };
export type Country = { name: string | null; flag: string | null; areaCode: string | null; code: string; currency: Currency | null };
export type Country_List = { name: Country["name"] | null; flag: Country["flag"] | null; code: Country["code"] };
export type Country_Phone = { flag: Country["flag"] | null; areaCode: Country["areaCode"] | null; code: Country["code"] };

export const CountryKeys_fetch: (keyof Omit<Country, 'flag' | 'areaCode'>)[] = ['name', 'code', 'currency'];
import { useQuery } from '@tanstack/react-query';
import { CurrencyInfo, fetchCurrencyConversion, fetchExchangeRates } from './payment_fetch';

export function useCurrencyConversion(base: string, amount: string, target: string, enabled: boolean = true) {
  return useQuery({
    queryKey: ['currencyConversion', base, amount, target],
    queryFn: () =>
      fetchCurrencyConversion({
        base,
        amount: parseFloat(amount),
        targets: [target]
      }),
    enabled: !!base && !!amount && !!target && enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useExchangeRate(
  baseCurrency: string,
  targetCurrency: string,
  enabled: boolean = true,
  date?: string
) {
  return useQuery<CurrencyInfo[]>({
    queryKey: ['exchangeRate', baseCurrency, targetCurrency, date ?? 'latest'],
    queryFn: () =>
      fetchExchangeRates({
        baseCurrency,
        currencies: [targetCurrency],
        date,
      }),
    enabled: !!baseCurrency && !!targetCurrency && enabled,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
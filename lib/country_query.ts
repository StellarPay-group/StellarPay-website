import { useQueries, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { Country, Country_List, Country_Phone, CountryKeys_fetch } from './country.types';
import { fetchCountryCodes, fetchCountryCurrency, fetchCountryName, getCountryFlag } from './country_fetch';
import { EXPIRATION_TIME } from './cache';
import { useMemo } from 'react';

const cacheParams = {staleTime: EXPIRATION_TIME, cacheTime: EXPIRATION_TIME}

export function useQueryWithCache<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends unknown[] = unknown[]>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): UseQueryResult<TData, TError> {
  return useQuery({
    ...options,
    ...cacheParams,
  });
}

export function getCountryFieldQuery<K extends (typeof CountryKeys_fetch)[number]>(
  code: Country["code"],
  field: K,
  fetchFn: (code: Country["code"]) => Promise<Country[K] | null>,
  enabled = true
): UseQueryOptions<Country[K] | null, unknown, Country[K] | null, unknown[]> {
  return {
    queryKey: ['countryField', code, field] as unknown[],
    queryFn: () => fetchFn(code),
    enabled: !!field && !!code && enabled,
    ...cacheParams,
  };
}

// Fetch all country codes
export const useCountryCodes = (enabled = true) => {
  return useQueryWithCache({
    queryKey: ['countryCodes'],
    queryFn: fetchCountryCodes,
    enabled
  });
};

// Fetch a country's name
export const useCountryName = (code: Country["code"], enabled = true) => {
  return useQuery(getCountryFieldQuery(code, 'name', fetchCountryName, enabled));
};

// Fetch a country's currency
export const useCountryCurrency = (code: Country["code"], enabled = true) => {
  return useQuery(getCountryFieldQuery(code, 'currency', fetchCountryCurrency, enabled));
};

export type UseTransformedQueryResult<TTransformed, TRaw = unknown> =
  Omit<UseQueryResult<TRaw, unknown>, 'data'> & {
    data: TTransformed;
  };

export function useCountry_List(code: Country["code"]): UseTransformedQueryResult<Country_List, string | null> {
  const nameQuery = useCountryName(code);
  const flag = code ? getCountryFlag(code) : null;

  return {
    ...nameQuery,
    data: {
      name: nameQuery.data ?? null,
      flag,
      code,
    },
  };
}

export function useAllCountry_List(): {
  data: Country_List[];
  isLoading: boolean;
  isError: boolean;
} {
  const {
    data: codes,
    isLoading: codesLoading,
    isError: codesError,
  } = useCountryCodes();

  const results = useQueries({
    queries: codes?.map((code) => ({
      queryKey: ['countryName', code],
      queryFn: () => fetchCountryName(code),
      enabled: !!code,
      ...cacheParams,
    })) ?? [],
  });

  const isLoading = codesLoading || results.some((r) => r.isLoading);
  const isError = codesError || results.some((r) => r.isError);

  const sortedList = useMemo(() => {
    const allFetched = results.every((r) => r.status === 'success');
    if (!codes || !allFetched) return [];

    const countryList: Country_List[] = codes.map((code, i) => ({
      name: results[i]?.data ?? null,
      flag: getCountryFlag(code),
      code,
    }));

    return countryList.sort((a, b) =>
      (a.name || '').localeCompare(b.name || '')
    );
  }, [codes, results]);

  return {
    data: sortedList,
    isLoading,
    isError,
  };
}



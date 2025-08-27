import { SERVER } from '@/backend_urls';
import axios, { isAxiosError } from 'axios';
import { ADMIN_TOKEN } from '@/middleware/adminToken';

const API_BASE_URL = `${SERVER}dev/conversion/`; // Replace with your actual base URL

type CurrencyConversionDetail = {
  amount: number;
  code: string;
  name: string;
  rate: number;
  symbol: string;
};

type CurrencyConversionResponse = Record<string, CurrencyConversionDetail>;

export async function fetchCurrencyConversion(params: {
  base: string;
  amount: number;
  targets: string[];
}): Promise<CurrencyConversionResponse> {
  const { base, amount, targets } = params;

  console.log({
        base,
        amount,
        targets: targets.join(','),
      });

  try {
    let response = await axios.get(`${SERVER}dev/conversion/convert`, {
      headers: {
        'x-request-id': Date.now().toString(),
        'x-auth-token': `Bearer ${ADMIN_TOKEN}`
      },
      params: {
        base,
        amount,
        targets: targets.join(','),
      },
    });

    return response.data.data;
  } catch (error: any) {
    if (isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }

    throw error;
  }
}

export type CurrencyInfo = {
  currency: string;        // e.g. "EUR"
  rate: number;            // e.g. 1.0845
  baseCurrency: string;    // e.g. "USD"
  date: string;            // e.g. "2025-07-24" or "latest"
};

export async function fetchExchangeRates(params: {
  baseCurrency: string;
  currencies: string[];
  date?: string;
}): Promise<CurrencyInfo[]> {
  const { baseCurrency, currencies, date = 'latest' } = params;

  try {
    const response = await axios.get(`${API_BASE_URL}exchange-rates`, {
      headers: {
        'x-request-id': Date.now().toString(),
        'x-auth-token': `Bearer ${ADMIN_TOKEN}`
      },
      params: {
        baseCurrency,
        date,
        currencies: currencies.join(','),
      },
    });

    return response.data;
  } catch (error: any) {
    if (isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
import { SERVER } from '@/backend_urls';

const CONVERSION_BASE = `${SERVER}dev/conversion/convert`;
const API_BASE_URL = `${SERVER}dev/conversion/`;
const CALCULATE_FEES_ENDPOINT = `${SERVER}dev/transfer/calculate-fees`;

// --- Currency conversion (no headers/token/body) ---

export type CurrencyConversionDetail = {
  amount: number;
  code: string;
  name: string;
  rate: number;
  symbol: string;
};

export type CurrencyConversionResponseData = Record<string, CurrencyConversionDetail>;

type ConversionSuccessJson = {
  requestId?: string;
  data: CurrencyConversionResponseData;
};

type ConversionErrorJson = {
  error: string;
  requestId?: string;
  details?: unknown;
};

export async function fetchCurrencyConversion(params: {
  base: string;
  amount: number;
  targets: string[];
}): Promise<CurrencyConversionResponseData> {
  const { base, amount, targets } = params;
  const url = new URL(CONVERSION_BASE);
  url.searchParams.set('base', base);
  url.searchParams.set('targets', targets.join(','));
  url.searchParams.set('amount', String(amount));

  const response = await fetch(url.toString());

  const json = (await response.json()) as ConversionSuccessJson | ConversionErrorJson;

  if (!response.ok) {
    const err = json as ConversionErrorJson;
    console.error('Conversion error:', err.error ?? response.status, err.details);
    throw new Error(err.error ?? `Request failed with status ${response.status}`);
  }

  const success = json as ConversionSuccessJson;
  if (!success.data) {
    throw new Error('Invalid conversion response: missing data');
  }
  return success.data;
}

// --- Calculate transfer fees (use only CalculateTransferFeesDataAlternative) ---

export interface CalculateTransferFeesRequest {
  amount: number;
  sourceCurrency: string;
  destinationCurrency: string;
  sourceCountry: string;
  destinationCountry: string;
  transferType: string;
}

export interface CalculateTransferFeesDataAlternative {
  sourceAmount?: number;
  sourceCountry?: string;
  destinationCountry?: string;
  sourceCurrency: string;
  destinationCurrency?: string;
  collectedAmount?: number;
  destinationAmount?: number;
  effectiveExchangeRate?: number;
  estimatedDeliveryTime?: string;
  available?: boolean;
  message?: string;
}

export interface CalculateTransferFeesResponse {
  success: boolean;
  data?: CalculateTransferFeesDataAlternative;
  message?: string;
}

/** Estimated total fees in source currency: sourceAmount - destinationAmount (on error returns 0). */
export function getTotalFeesFromAlternative(alt: CalculateTransferFeesDataAlternative): number {
  const src = alt.sourceAmount ?? 0;
  const dest = alt.destinationAmount ?? 0;
  return Math.max(0, src - dest);
}

export async function calculateTransferFees(
  params: CalculateTransferFeesRequest,
): Promise<CalculateTransferFeesResponse> {
  const response = await fetch(CALCULATE_FEES_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: params.amount,
      sourceCurrency: params.sourceCurrency,
      destinationCurrency: params.destinationCurrency,
      sourceCountry: params.sourceCountry,
      destinationCountry: params.destinationCountry,
      transferType: params.transferType,
    }),
  });

  const json = (await response.json()) as CalculateTransferFeesResponse;

  if (!response.ok) {
    return {
      success: false,
      message: json.message ?? `Request failed with status ${response.status}`,
    };
  }

  return json;
}

// --- Exchange rates (fetch, no Axios) ---

export type CurrencyInfo = {
  currency: string;
  rate: number;
  baseCurrency: string;
  date: string;
};

export async function fetchExchangeRates(params: {
  baseCurrency: string;
  currencies: string[];
  date?: string;
}): Promise<CurrencyInfo[]> {
  const { baseCurrency, currencies, date = 'latest' } = params;
  const url = new URL(`${API_BASE_URL}exchange-rates`);
  url.searchParams.set('baseCurrency', baseCurrency);
  url.searchParams.set('date', date);
  url.searchParams.set('currencies', currencies.join(','));

  const response = await fetch(url.toString());
  const data = await response.json();

  if (!response.ok) {
    console.error('Exchange rates error:', data);
    throw new Error((data as { message?: string }).message ?? `Request failed with status ${response.status}`);
  }

  return data as CurrencyInfo[];
}

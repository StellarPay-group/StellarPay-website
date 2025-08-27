export const EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24 hours

const cache: Record<string, { value: any; timestamp: number }> = {};

export function setCache<T>(key: string, value: T) {
  cache[key] = {
    value,
    timestamp: Date.now(),
  };
}

export function getCache<T>(key: string): T | null {
  const cached = cache[key];
  if (!cached) return null;

  if (Date.now() - cached.timestamp > EXPIRATION_TIME) {
    delete cache[key];
    return null;
  }

  return cached.value;
}

export function clearCache(key: string): void {
  delete cache[key];
}

export function clearCacheByPrefix(prefix: string) {
  for (const key in cache) {
    if (key.startsWith(prefix)) {
      delete cache[key];
    }
  }
}

export function clearAllCache(): void {
  Object.keys(cache).forEach(key => delete cache[key]);
}

export function getCacheByPrefix<T = any>(prefix: string): { key: string; value: T }[] {
  const results: { key: string; value: T }[] = [];

  for (const key in cache) {
    if (key.startsWith(prefix)) {
      const value = getCache<T>(key);
      if (value !== null) {
        results.push({ key, value });
      }
    }
  }

  return results;
}
export type MetaRecord = Record<string, unknown>;

export function asMetaRecord(value: unknown): MetaRecord | null {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? value as MetaRecord
    : null;
}

export function readMetaString(value: unknown): string | null {
  if (typeof value !== "string" && typeof value !== "number") return null;
  const text = String(value).trim();
  return text || null;
}

export function readMetaNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) ? number : null;
}

export function normalizeMetaAdAccountId(value: string): string {
  const accountId = value.trim().replace(/^act_/i, "");
  if (!/^\d+$/.test(accountId)) {
    throw new Error("Invalid Meta Ad Account ID.");
  }
  return `act_${accountId}`;
}

export function normalizeMetaApiVersion(value: string | undefined, fallback: string): string {
  const apiVersion = (value?.trim() || fallback).trim();
  if (!/^v\d+\.\d+$/.test(apiVersion)) {
    throw new Error("Invalid Meta Graph API version.");
  }
  return apiVersion;
}

export function requireMetaNumericId(value: string, label: string): string {
  if (typeof value !== "string" || !/^\d+$/.test(value)) {
    throw new Error(`Valid numeric ${label} is required.`);
  }
  return value;
}

import type { BillingDateRange } from "../../googleadsAPI/services/billing.service.js";

export interface MetaBillingInvoice {
  id: string;
  invoiceNumber: string | null;
  invoiceDate: string | null;
  billingPeriod: string | null;
  dueDate: string | null;
  paymentStatus: string | null;
  amountDue: number | null;
  amount: number | null;
  currency: string | null;
  invoiceType: string | null;
  downloadAvailable: boolean;
  businessId: string;
}

export interface MetaSpendTrendPoint {
  date: string;
  amount: number;
}

export interface MetaBillingOverview {
  availability: "available" | "not_supported" | "permission_required" | "error";
  message: string | null;
  currency: string | null;
  accountStatus: { code: number | null; label: string };
  paymentArrangement: "prepaid" | "postpay" | "unknown";
  balance: number | null;
  balanceLabel: string;
  amountSpentLifetimeOrCap: number | null;
  spendCap: number | null;
  periodSpend: number | null;
  periodSpendAvailability: "available" | "no_data" | "permission_required" | "error";
  periodSpendMessage: string | null;
  spendTrend: MetaSpendTrendPoint[];
  spendTrendAvailability: "available" | "no_data" | "permission_required" | "error";
  spendTrendMessage: string | null;
  paymentMethod: {
    availability: "available" | "permission_required" | "not_available";
    displayString: string | null;
    type: string | null;
  };
  tax: {
    availability: "available" | "not_available";
    taxId: string | null;
    taxIdStatus: number | null;
  };
  business: { id: string; name: string | null } | null;
  invoicesAvailability: "available" | "not_supported" | "permission_required" | "error";
  invoicesMessage: string | null;
  invoices: MetaBillingInvoice[];
  lastSyncedAt: string;
}

export interface MetaBillingActivity {
  id: string;
  eventType: string;
  title: string;
  description: string;
  eventTime: string | null;
  accountTime: string | null;
  actorName: string | null;
  objectName: string | null;
  objectType: string | null;
}

export interface MetaBillingActivitiesResult {
  availability: "available" | "not_supported" | "permission_required" | "error";
  message: string | null;
  activities: MetaBillingActivity[];
  truncated: boolean;
  lastSyncedAt: string;
}

export type UnknownRecord = Record<string, unknown>;

export type MetaPeriodSpendResult = {
  amount: number | null;
  availability: MetaBillingOverview["periodSpendAvailability"];
  message: string | null;
};

export type MetaSpendTrendResult = {
  points: MetaSpendTrendPoint[];
  availability: MetaBillingOverview["periodSpendAvailability"];
  message: string | null;
};

export interface GetMetaBillingOverviewInput {
  userId: string;
  accountId: string;
  dates: BillingDateRange;
}

export interface GetMetaBillingActivitiesInput {
  userId: string;
  accountId: string;
  dates: BillingDateRange;
}

export interface DownloadMetaBillingInvoiceInput {
  userId: string;
  accountId: string;
  businessId: string;
  invoiceId: string;
}

export interface DownloadMetaBillingInvoiceResult {
  bytes: Uint8Array;
  filename: string;
  contentType: string;
}

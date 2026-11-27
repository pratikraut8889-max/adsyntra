export type MetaWebsiteAudienceEvent =
  | "PageView"
  | "ViewContent"
  | "AddToCart"
  | "Purchase";

export interface CreateMetaWebsiteCustomAudienceInput {
  name: string;
  description?: string;
  pixelId: string;
  retentionDays: number;
  eventName: MetaWebsiteAudienceEvent;
}

export interface MetaAudienceCreateResult {
  provider: "metaAds";
  id: string;
  name: string;
  subtype: "WEBSITE";
  pixelId: string;
  retentionDays: number;
}

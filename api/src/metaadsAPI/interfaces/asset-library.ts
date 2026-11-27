import type {
  AssetKind,
  ProviderCreativeContent,
} from "../../models/asset.model.js";

export type MetaAdsAssetFilter =
  | "ALL"
  | "IMAGE"
  | "VIDEO"
  | "TEXT"
  | "CTA"
  | "CREATIVE";

export interface ListMetaAdsAssetsInput {
  kind?: MetaAdsAssetFilter;
  limit?: number;
  pageToken?: string;
}

export interface MetaAdsProviderAsset {
  provider: "metaAds";
  accountId: string;
  assetId: string;
  resourceName: null;
  assetType: string;
  name: string;
  kind: AssetKind;
  mimeType: string | null;
  mediaUrl: string | null;
  thumbnailUrl: string | null;
  imageHash: string | null;
  videoId: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: string | null;
  sizeBytes: null;
  textContent: string | null;
  providerCreative: ProviderCreativeContent | null;
  providerExtension: null;
  creativeId: string | null;
  adId: string | null;
  campaignId: string | null;
  adGroupId: null;
  adSetId: string | null;
  source: string | null;
  createdTime: string | null;
  updatedTime: string | null;
}

export interface ListMetaAdsAssetsResult {
  provider: "metaAds";
  accountId: string;
  assets: MetaAdsProviderAsset[];
  nextPageToken: string | null;
}

export type MetaRecord = Record<string, unknown>;

export interface MetaAdImage {
  id?: string;
  hash?: string;
  name?: string;
  url?: string;
  url_128?: string;
  width?: number;
  height?: number;
  original_width?: number;
  original_height?: number;
  created_time?: string;
  updated_time?: string;
}

export interface MetaAdVideo {
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  picture?: string;
  source?: string;
  width?: number;
  height?: number;
  length?: number;
  created_time?: string;
  updated_time?: string;
  permalink_url?: string;
}

export interface MetaAdCreative {
  id?: string;
  name?: string;
  account_id?: string;
  object_type?: string;
  body?: string;
  title?: string;
  description?: string;
  image_url?: string;
  image_hash?: string;
  video_id?: string;
  thumbnail_url?: string;
  link_url?: string;
  link_destination_display_url?: string;
  call_to_action_type?: string;
  call_to_action?: unknown;
  object_story_spec?: unknown;
  asset_feed_spec?: unknown;
  effective_object_story_id?: string;
  instagram_permalink_url?: string;
}

export interface MetaPaging {
  cursors?: { before?: string; after?: string };
  next?: string;
}

export interface MetaGraphPage<T> {
  data?: T[];
  paging?: MetaPaging;
}

export interface MetaGraphErrorResponse {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
}

export interface MetaAssetPageTokenV2 {
  version: 2;
  kind: MetaAdsAssetFilter;
  imagesAfter?: string;
  videosAfter?: string;
  creativesAfter?: string;
  imagesDone: boolean;
  videosDone: boolean;
  creativesDone: boolean;
}

export interface MetaAssetPageTokenV1 {
  version: 1;
  kind: string;
  imagesAfter?: string;
  videosAfter?: string;
}

export type MetaAssetPageState = MetaAssetPageTokenV2;

export type MetaAssetEdge = "adimages" | "advideos" | "adcreatives";

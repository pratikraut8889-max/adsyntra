/* -------------------------------------------------------------------------- */
/* Meta Ads Service                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Service-only implementation for Meta ad operations.
 *
 * This module intentionally contains no Express imports, Router instances,
 * Request/Response objects, or route registration. Your existing route layer
 * should obtain the user's Meta access token and pass it to these functions.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface MetaAdsServiceContext {
    accessToken: string;
    apiVersion?: string;
}

export interface CreateMetaAdInput {
    adAccountId: string;
    name: string;
    adSetId: string;
    creativeId: string;
}

export interface ListMetaAdsInput {
    adAccountId: string;
    limit?: number;
    after?: string;
    fields?: string[];
}

export interface ListMetaAdSetAdsInput {
    adSetId: string;
    adAccountId: string;
    campaignId?: string;
    limit?: number;
    after?: string;
    fields?: string[];
}

export interface ListMetaCampaignAdSetsInput {
    adAccountId: string;
    campaignId: string;
    limit?: number;
    after?: string;
}

export type MetaAdPreviewFormat =
    | "MOBILE_FEED_STANDARD"
    | "DESKTOP_FEED_STANDARD"
    | "INSTAGRAM_STANDARD"
    | "INSTAGRAM_STORY"
    | "INSTAGRAM_REELS";

export interface GetMetaAdPreviewInput {
    adId: string;
    adFormat?: MetaAdPreviewFormat;
}

export interface MetaResolvedCreativeAsset {
    id: string;
    type: "IMAGE";
    name: string | null;
    mediaUrl: string | null;
    thumbnailUrl: string | null;
    width: number | null;
    height: number | null;
    sourcePath: string;
    resolutionError?: string | null;
}

export interface MetaAd {
    id: string;
    name?: string;
    status?: string;
    effective_status?: string;
    adset_id?: string;
    campaign_id?: string;
    creative?: {
        id?: string;
        [key: string]: unknown;
    };
    /** Image hashes in dynamic creatives resolved through the selected Ad Account's adimages edge. */
    resolvedAssets?: MetaResolvedCreativeAsset[];
    [key: string]: unknown;
}

export interface MetaPagination {
    hasNextPage: boolean;
    nextCursor: string | null;
    previousCursor: string | null;
}

export interface CreateMetaAdResult {
    adId: string;
    status: "PAUSED";
}

export interface ListMetaAdsResult {
    ads: MetaAd[];
    count: number;
    pagination: MetaPagination;
}

export interface MetaAdPreview {
    body?: string;
    html?: string;
    [key: string]: unknown;
}

export interface GetMetaAdPreviewResult {
    adId: string;
    adFormat: MetaAdPreviewFormat;
    previews: MetaAdPreview[];
}

export interface MetaApiErrorPayload {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
    [key: string]: unknown;
}

export interface MetaApiResponse<T> {
    data?: T;
    id?: string;
    paging?: {
        next?: string;
        previous?: string;
        cursors?: {
            before?: string;
            after?: string;
        };
    };
    error?: MetaApiErrorPayload;
    success?: boolean;
    [key: string]: unknown;
}

export interface MetaAdImageRecord {
    hash?: string;
    url?: string;
    url_128?: string;
    name?: string;
    width?: number;
    height?: number;
}
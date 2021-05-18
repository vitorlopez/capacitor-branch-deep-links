import { WebPlugin } from '@capacitor/core';
import { BranchDeepLinksPlugin, BranchLoggedOutResponse, BranchReferringParamsResponse, BranchUrlParams, BranchShortUrlParams, BranchShortUrlResponse, BranchShowShareSheetParams, BranchTrackingResponse } from './definitions';
export declare class BranchDeepLinksWeb extends WebPlugin implements BranchDeepLinksPlugin {
    constructor();
    handleUrl(_: BranchUrlParams): Promise<void>;
    generateShortUrl(_: BranchShortUrlParams): Promise<BranchShortUrlResponse>;
    showShareSheet(_: BranchShowShareSheetParams): Promise<void>;
    getStandardEvents(): Promise<{
        [index: number]: string;
    }>;
    sendBranchEvent(_: {
        eventName: string;
        metaData: {
            [key: string]: any;
        };
    }): Promise<void>;
    disableTracking(_: {
        isEnabled: false;
    }): Promise<BranchTrackingResponse>;
    setIdentity(_: {
        newIdentity: string;
    }): Promise<BranchReferringParamsResponse>;
    logout(): Promise<BranchLoggedOutResponse>;
}
declare const BranchDeepLinks: BranchDeepLinksWeb;
export { BranchDeepLinks };

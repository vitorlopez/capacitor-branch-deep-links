import { WebPlugin } from '@capacitor/core';
export class BranchDeepLinksWeb extends WebPlugin {
    constructor() {
        super({
            name: 'BranchDeepLinks',
            platforms: ['web'],
        });
    }
    handleUrl(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    generateShortUrl(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    showShareSheet(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    getStandardEvents() {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    sendBranchEvent(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    disableTracking(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    setIdentity(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    logout() {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
}
const BranchDeepLinks = new BranchDeepLinksWeb();
export { BranchDeepLinks };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BranchDeepLinks);
//# sourceMappingURL=web.js.map
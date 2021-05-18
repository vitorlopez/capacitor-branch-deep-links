var capacitorPlugin = (function (exports, core) {
    'use strict';

    class BranchDeepLinksWeb extends core.WebPlugin {
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
    core.registerWebPlugin(BranchDeepLinks);

    exports.BranchDeepLinks = BranchDeepLinks;
    exports.BranchDeepLinksWeb = BranchDeepLinksWeb;

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map

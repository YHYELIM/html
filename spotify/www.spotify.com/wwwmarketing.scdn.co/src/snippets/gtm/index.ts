import { insertInlineScript } from '../../util/insertScript';
export const GTM_SHA_HASH = "'sha256-NaDaNqZLU1SlmmmuMN3bzISYfOEfEajS7WgrYZnxz3U='";
export function load({ id, additionalData, }) {
    window.__gtm_additional_data = additionalData || '';
    window.__gtm_track_id = id;
    insertInlineScript({
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+window.__gtm_additional_data;var n=d.querySelector('[nonce]');n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer',window.__gtm_track_id);`,
    });
}
//# sourceMappingURL=index.js.map
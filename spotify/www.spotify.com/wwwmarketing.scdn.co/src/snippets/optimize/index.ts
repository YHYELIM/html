import { insertInlineScript, insertExternalScript, } from '../../util/insertScript';
import { insertInlineStyle } from '../../util/insertStyle';
export const OPTIMIZE_SHA_HASH = "'sha256-KRzjHxCdT8icNaDOqPBdY0AlKiIh5F8r4bnbe1PQwss='";
export function load({ id, timeout = 4000, }) {
    window.__optimize_timeout = timeout;
    window.__optimize_options = {};
    window.__optimize_options[id] = true;
    insertInlineStyle({
        innerHTML: `.async-hide { opacity: 0 !important}`,
    });
    insertInlineScript({
        innerHTML: `(function(a,s,y,n,c,h,i,d,e){d=true;s.className+=' '+y;h.start=1*new Date;h.end=i=function(t){s.className=s.className.replace(RegExp(" ?"+y),""),e=new Date-h.start,(e<c||d)&&a[n].push({event:"optimize",optimizeLoadedWithinTimeout:t?"false":"true"}),d=!1};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i(true);h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',window.__optimize_timeout,window.__optimize_options);`,
    });
    insertExternalScript({
        async: true,
        onError: () => window.dataLayer &&
            window.dataLayer.hide &&
            window.dataLayer.hide.end &&
            window.dataLayer.hide.end(),
        src: `https://www.googleoptimize.com/optimize.js?id=${id}`,
    });
}
//# sourceMappingURL=index.js.map